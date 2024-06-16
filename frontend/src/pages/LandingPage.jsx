import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import CardProduct from '../components/CardProduct';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import TopProduct from '../components/TopProduct';
import Banner from '../components/Banner';
import productService from '../services/productService';

const LandingPage = () => {

  const [Data,setData]=useState([])

  useEffect(()=>{

    const fetchProductData= async()=>{
      const res=await productService.getProduct()
      .then(({data})=>{
        setData(data)
      })
      .catch((err)=>{
        console.log(err)
      })
    }
    fetchProductData()
  },[])
  

  return (
    <div>
      <Hero />
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            className="mt-6"
          >
            {Data.filter(item=>item.quantity>=40).map((item, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <div className="w-full max-w-xs">
                  <CardProduct {...item} item={item} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Top Rated Product</h2>
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            className="mt-6"
          >
            {Data.filter(item=>item.price>=300).map((item, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <div className="w-full max-w-xs">
                  <TopProduct {...item} item={item} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <Banner/>
    </div>
  );
};

export default LandingPage;
