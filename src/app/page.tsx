'use client';

import styles from './page.module.scss';
import Header from "@/components/Home/Header/Header";
import NavBar from "@/components/Home/NavBar/NavBar";
import Banner from "@/components/Home/Banner Area/Banner";
import ShopByCategories from '@/components/Home/Shop By Categories/ShopByCategories';
import NewArrivals from '@/components/Home/New Arrivals/NewArrivals';
import Discounts from '@/components/Home/Discounts Banner/Discounts';
import InstaLove from '@/components/Home/Insta Love/InstaLove';
import Subscribe from '@/components/Home/SubscribeForm/Subscribe';
import Footer from '@/components/Home/Footer/Footer';
import SideBar from '@/components/Side Bar/SideBar';
import { useTheme } from '../components/ThemeContext';

export default function Home() {
  const {theme} = useTheme();
  return (
      <div className={`${styles.home} ${theme==='dark' ? styles.darkHome : ''}`}>
        <div className={styles.aside}>
          <SideBar/>
        </div>
        <div className={styles.wrapper}>
          <Header/>
          <NavBar/>
          <Banner/>
          <ShopByCategories/>
          <NewArrivals/>
          <Discounts/>
          <InstaLove/>
          <Subscribe/>
          <Footer/>
        </div>
      </div>
  );
}
