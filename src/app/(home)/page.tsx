'use client';

import Banner from "@/components/Home/Banner Area/Banner";
import ShopByCategories from '@/components/Home/Shop By Categories/ShopByCategories';
import NewArrivals from '@/components/Home/New Arrivals/NewArrivals';
import Discounts from '@/components/Home/Discounts Banner/Discounts';
import InstaLove from '@/components/Home/Insta Love/InstaLove';
import Subscribe from '@/components/Home/SubscribeForm/Subscribe';
import Footer from '@/components/Home/Footer/Footer';
import { useLogin } from '@/components/LoginContext';
import { useRouter } from 'next/navigation';

export default function Home() {
  const {isLogIn} = useLogin();
  const router = useRouter()
  return (

      <div className='cotainer-fluid mx-0 h-100'>

        {isLogIn===true?router.push('/home') as any:''}

        {/* home main banner */}
        <div className="row m-0 position-relative">
            <Banner />
        </div>  

        {/* shop by categories section */}
        <div className='row my-xxl-5 my-3 mx-0 p-0'>
          <ShopByCategories />
        </div>

        {/* new arrivals section */}
        <div className='row my-3 d-flex align-items-center justify-content-center justify-content-sm-center justify-content-md-around h-100'>
          <NewArrivals />
        </div>

        {/* discounts banner */}
        <div className='row my-3' >
          <Discounts />
        </div>

        {/* insta love section */}
        <div className='row my-3'>
          <InstaLove />
        </div>

        {/* subscribe form */}
        <div className='row my-5 '>
          <Subscribe />
        </div>

        {/* footer section */}
        <div className='row m-2'>
          <Footer />
        </div> 
        
      </div>
  );
}
