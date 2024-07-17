/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */

import React, { useEffect } from 'react';
import mobiles from '../../../../../public/mobileImage';


import "./SingleCard.css"
import { useRef, useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import Button from '@mui/material/Button';

String.prototype.capitalize = function () {
    if (this.length === 0) return this;
    return this.charAt(0).toUpperCase() + this.slice(1);
};



const Card_Slider = ({ product, brand }) => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const [maxScrollWidth, setMaxScrollWidth] = useState(0);
    let [scrollcard, setscrollcard] = useState(0);

    const containerRef = useRef();

    useEffect(() => {
        const updateMaxScrollWidth = () => {
            setMaxScrollWidth(containerRef.current.scrollWidth - containerRef.current.clientWidth);
        };

        const handleScroll = () => {
            setScrollPosition(containerRef.current.scrollLeft);
        };

        updateMaxScrollWidth();
        window.addEventListener('resize', updateMaxScrollWidth);
        containerRef.current.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', updateMaxScrollWidth);
            if (containerRef.current) {
                containerRef.current.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    const handleScrollLeft = () => {
        containerRef.current.scrollLeft -= 300;
        setScrollPosition(containerRef.current.scrollLeft - 500);
    };

    const handleScrollRight = () => {
        containerRef.current.scrollLeft += 300;
        setScrollPosition(containerRef.current.scrollLeft + 500);
    };


    return (
        <div className='relative w-full'>

            <div className='flex justify-between relative    px-10'>
                <h1 className='text-lg font-bold'>{brand.capitalize()} SmartPhones</h1>
                <Button variant="contained">View All</Button>
            </div>

            <div className='border-t-2 my-5'></div>
            <section className="card-slider-conatiner">
                <div className="main-slider-contianer">

                    <button className={`slider-icon left ${scrollPosition <= 0 ? "opacity-0" : "opacity-100"}`} onClick={handleScrollLeft} disabled={scrollPosition <= 0}>
                        <ArrowBackIosNewOutlinedIcon />
                    </button>


                    <div className="slider" style={{ scrollLeft: scrollcard }} ref={containerRef}>
                        {
                            product?.map((product, idx) => {
                                return (
                                    <div key={idx} className='slider-card'>
                                        <div className='flex items-center flex-col'>
                                            <div className="w-fit h-48 cursor-pointer">
                                                <img className="relative w-full h-full" src={product.url} alt={product.name} />
                                            </div>
                                            <div className='mt-5 flex flex-col items-center gap-y-2 border-'>
                                                <p className='text-md w-[90%] text-center text-wrap font-medium'>{product.name}</p>
                                                <div className='flex items-center w-fit gap-x-2 border text-sm'>
                                                    <span className='px-2  font-semibold bg-green-600 rounded-sm text-white'>{product.rating} *</span>
                                                    <span>({product.views})</span>
                                                </div>
                                                <div className='flex gap-2 items-center '>
                                                    {/* discountedPrice */}
                                                    <span className='font-semibold font-mono'>{product.discountedPrice}</span>
                                                    {/* discount */}
                                                    <span className='text-green-500 text-sm'>{product.discount}% off</span>
                                                    {/* originalPrice */}
                                                    <del className='opacity-60'>{product.price}</del>
                                                </div>
                                            </div>

                                        </div>
                                    </div>


                                )
                            })
                        }
                    </div>


                    <button className={`slider-icon right ${scrollPosition >= maxScrollWidth ? "opacity-0" : "opacity-100"} `} onClick={handleScrollRight} disabled={scrollPosition >= maxScrollWidth} >
                        <ArrowForwardIosIcon />
                    </button>

                </div>
            </section>

            <div className='border-t-2 my-5'></div>

        </div>
    )
}

export default function MultipleBrands_ProductCrasoul({ className }) {
    return (
        <>
            <div className={`relative ${className}`}>
                {Object.keys(mobiles).map((key, idx) => (
                    <Card_Slider product={mobiles[key]} brand={key} key={idx} />
                ))}
            </div>
        </>
    )

}


