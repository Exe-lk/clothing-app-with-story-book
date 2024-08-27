import React, { useRef, useState, useEffect } from 'react';
import styles from './Price.module.scss';

const Price = () => {
  const priceRangeRef = useRef<HTMLInputElement>(null);
  const minValueRef = useRef<HTMLInputElement>(null);
  const maxValueRef = useRef<HTMLInputElement>(null);
  const [minValue, setMinValue] = useState<number | null>(null);
  const [maxValue, setMaxValue] = useState<number | null>(null);
  const [activeInput, setActiveInput] = useState<'min' | 'max' | null>(null);

  useEffect(() => {
    if (priceRangeRef.current) {
      priceRangeRef.current.value = '0';
    }
  }, []);

  useEffect(() => {
    const priceRange = priceRangeRef.current;

    if (priceRange) {
      const updateValues = () => {
        const value = parseInt(priceRange.value, 10);

        if (activeInput === 'min') {
          if (value <= (maxValue ?? Infinity)) {
            setMinValue(value);
          } else {
            setMinValue(maxValue);
            priceRange.value = maxValue?.toString() ?? '0';
          }
        } else if (activeInput === 'max') {
          if (value >= (minValue ?? 0)) {
            setMaxValue(value);
          } else {
            setMaxValue(minValue);
            priceRange.value = minValue?.toString() ?? '0';
          }
        }
      };

      priceRange.addEventListener('input', updateValues);

      return () => {
        priceRange.removeEventListener('input', updateValues);
      };
    }
  }, [activeInput, minValue, maxValue]);

  return (
    <div className='row text-capitalize p-1 mx-1 my-3'>
      <div className="col-12">
        <p className='text-capitalize fs-xxl-5 fs-xl-6 fs-lg-6 fw-bold'>Price</p>
        <div className='px-4 py-1'>
          <input
            type="range"
            className='my-1 w-100'
            id="priceRange"
            min="0"
            max="100000"
            step="10"
            ref={priceRangeRef}
          />
          <p className='text-capitalize my-1 fs-xxl-6 fs-xl-6 fs-lg-7 ms-5 ms-sm-4 ms-md-4 ms-xxl-2 ms-xl-2 ms-lg-2'>
            Rs:
            <span>
              <input
                type="text"
                className='ms-1 rounded border-1 w-25 text-center'
                id="minValue"
                style={{ width: '100px' }}
                placeholder='min'
                ref={minValueRef}
                value={minValue !== null ? minValue : ''}
                onClick={() => setActiveInput('min')}
              />
              {' - '}
              <input
                type="text"
                className='rounded border-1 w-25 text-center'
                id="maxValue"
                style={{ width: '100px' }}
                placeholder='max'
                ref={maxValueRef}
                value={maxValue !== null ? maxValue : ''}
                onClick={() => setActiveInput('max')}
              />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Price;
