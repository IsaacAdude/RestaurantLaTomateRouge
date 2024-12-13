import React from 'react';
import './Home.css'
import MultiItemCarousel from './MultiItemCarousel';
import RestaurantCart from '../Restaurant/RestaurantCard';

const restaurant=[1] // I can add restaurants [1,1,1,1,]
export const Home = () => {
    
    return (
        <div className='pb-10'>
            <section className='banner -z-50 relative flex flex-col justify-center
            items-center'>
                <div className='w-[50vw] z-10 text-center'>
                    <p className='text-2xl lg:text-6xl font-bold z-10 py-5'>La Tomate Rouge</p>
                    <p className='z-10 text-gray-300 text-xl lg:text-4xl'>Speed, Quality, Convinience, Specialty</p>
                </div>
                <div className='cover absolute top-0 left-0 right-0'>

                </div>
                <div className='fadeout'>
                    
                </div>

            </section>
            <section className='p-10 lg:py-10 lg:px-20 pt-10'>
                <p className='text-2xl font-semibold text-gray-400 py-3 pb-10'>Meals of the Week</p>
                <MultiItemCarousel/>
            </section>
            <section className='px-5 lg:px-20 pt-10'>
                <h1 className='text-2xl font-semibold text-gray-400 pb-8'>Order From The People's Favorites</h1>
                <div className='flex flex-wrap items-center justify-around gap-5'>
                    {
                        restaurant.map((item)=><RestaurantCart/>)
                    }

                </div>
            </section>
            
        </div>
    )
}

export default Home