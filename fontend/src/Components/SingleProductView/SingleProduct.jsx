/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


import singleProduct_Images from "../../../public/SingleProduct_Images";
import Button from '@mui/material/Button';
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded';
import MultipleBrands_ProductCrasoul from "../Landing_Page/MiddlePortion/Right/SingleCard";




export default function SingleProduct({ product }) {

    product = {
        url: "https://exstatic-in.vivo.com/Oz84QB3Wo0uns8j1/in/1710999704108/c017ab843092b285e62963a9824de5f9.png.webp",

    }

    const [likeToHeart, setLikeToHeart] = useState(false);
    const [selectedImageUrl, setSelectedImageUrl] = useState(product?.url || "");

    const handleLikeClick = () => {
        setLikeToHeart(!likeToHeart);
    };


    const containerRef = useRef(null);

    const checkScrollPosition = () => {
        if (containerRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
        }
    };

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.addEventListener("scroll", checkScrollPosition);
            return () => {
                containerRef.current.removeEventListener("scroll", checkScrollPosition);
            };
        }
    }, []);



    return (
        <div className="relative w-full border-4 ">
            <header className="flex  gap-x-10 mt-10 px-16">


                <section className="relative w-[45%] flex items-start gap-x-5 border-r-[1px]">

                    <div className="relative flex justify-center">
                        {/* small images showcase */}
                        <div ref={containerRef} className={`relative flex flex-col gap-y-3 h-[500px] overflow-y-auto border p-2 custom-scrollbar`}>
                            {singleProduct_Images.map((elem, idx) => (
                                <div key={idx} className="w-20 h-20">
                                    <img
                                        onMouseOver={() => setSelectedImageUrl(elem.url)}
                                        className={`high-quality pixelated relative w-full h-full ${elem.url === selectedImageUrl && 'border-2 p-2 border-green-600'}`}
                                        src={elem.url}
                                        alt=""
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="absolute -bottom-6 "><ArrowDropDownRoundedIcon fontSize="large" /></div>
                    </div>

                    <div className="border-2 border-b-0 px-2 w-fit h-fit flex flex-col  items-center gap-y-20 justify-center">
                        <div className="max-w-96 max-h-96 mt-5">
                            {/* single image */}
                            <img className="high-quality pixelated relative w-full " src={selectedImageUrl} alt="" />
                        </div>
                        <div className="flex gap-x-5">
                            <Button color="info" variant="contained" className="bg-orange-400">Add To cart</Button>
                            <Button color="success" variant="contained" className="bg-green-600">Buy Now</Button>
                        </div>
                    </div>

                    <button className="" onClick={handleLikeClick}>
                        {likeToHeart ? (
                            <FavoriteOutlinedIcon className="text-red-700" />
                        ) : (
                            <FavoriteBorderOutlinedIcon className="text-gray-500" />
                        )}
                    </button>

                </section>

                <section className=" relative w-[50%]">
                    {/* produuct description section */}
                    <div className="flex flex-col items-start gap-y-1">

                        <p className="font-bold">POCO C65 (Pastel Blue, 128 GB)  (4 GB RAM)</p>
                        <div className="flex items-center">
                            <p className="bg-green-600 px-2 py-1 text-xs text-white font-bold">4.3⭐</p>
                            <span>29580 ratings & 1622 Reviews</span>
                        </div>

                        <p className="text-lg font-bold mt-2">Extra 4000 Off</p>

                        <div className="flex gap-x-3 items-center">
                            {/* product amount details */}
                            <p className="font-bold text-2xl">
                                <CurrencyRupeeOutlinedIcon />64999
                            </p>
                            <p>18% off</p>
                            <p>Free Delivery</p>
                        </div>
                        <p className="font-semibold mt-2">100 pcs Available</p>

                        <div className="flex flex-col gap-y-[3px]">
                            <p className="text-lg font-bold">Available Offers</p>
                            <p className="text-xs text-gray-600"><LocalOfferRoundedIcon className="text-green-600" /> <span className="font-bold">Bank Offer</span> Get ₹50 Instant Discount on first Flipkart UPI transaction on order of ₹200 and above</p>
                            <p className="text-xs text-gray-600"><LocalOfferRoundedIcon className="text-green-600" /> <span className="font-bold">Bank Offer</span> 5% Cashback on Flipkart Axis Bank Card</p>
                            <p className="text-xs text-gray-600"><LocalOfferRoundedIcon className="text-green-600" /> <span className="font-bold">Bank Offer</span> Get extra ₹4000 off (price inclusive of cashback/coupon)</p>
                            <p className="text-xs text-gray-600"><LocalOfferRoundedIcon className="text-green-600" /> <span className="font-bold">Bank Offer</span> ₹1000 off on Cleartrip hotels booking along with 300 supercoins on booking</p>
                        </div>
                        <div>
                            {/* product description */}
                            <p>Brand : VIVO</p>
                            <p>4Gb Ram , 128GB Rom</p>
                            <p>Color : Blue</p>
                            <p>Camera : </p>
                        </div>
                    </div>
                    <div className="relative  w-full">
                        <RatingsReviews />
                    </div>
                </section>

            </header>

            <section className="relative w-full 0">
                <h1 className="font-bold text-xl text-center mt-20 mb-10">Related Products</h1>
                <MultipleBrands_ProductCrasoul className={`w-full`} />
            </section>
        </div>
    );
}





import "./singleProduct.css"
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useEffect, useRef, useState } from "react";


function RatingsReviews() {

    const GradientProgressBar = ({ percentage, color }) => {
        const gradient = `linear-gradient(to right, ${color} ${percentage}%, #d6d5d2 ${percentage}%)`;
        return (
            <div
                className="w-40 h-2 rounded-full"
                style={{ background: gradient }}
            />
        );
    }

    const ratings = [
        { stars: 5, percentage: 80, count: 4808, color: "green" },
        { stars: 4, percentage: 60, count: 1365, color: "blue" },
        { stars: 3, percentage: 40, count: 648, color: "orange" },
        { stars: 2, percentage: 20, count: 290, color: 'pink' },
        { stars: 1, percentage: 10, count: 575, color: "red" },
    ];

    const circularProgressBar = [
        { percentage: 66, rating: 4.5, domain: "Camera" },
        { percentage: 85, rating: 3.5, domain: "Battery" },
        { percentage: 91, rating: 4.3, domain: "Display" },
        { percentage: 70, rating: 4.1, domain: "Design" },
    ]
    return (
        <div className="relative w-full  bg-white py-10  rounded-lg  flex flex-col gap-y-8">

            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Ratings & Reviews</h2>
                <button className="bg-gray-100 text-gray-800 py-2 px-4 rounded-md">
                    Rate Product
                </button>
            </div>

            <section className="flex gap-x-10 w-full">
                <div className="flex flex-col w-fit  items-center">
                    <p className="text-4xl font-bold flex gap-x-2 items-center">
                        4.2 <span className="text-gray-600">★</span>
                    </p>
                    <p className="text-sm text-gray-600">7,686 Ratings & 230 Reviews</p>
                </div>

                <div className="relative w-fit">
                    {/* ratings and reviews */}
                    {ratings.map(rating => (
                        <div key={rating.stars} className="flex  gap-x-5 border items-center">
                            <span>{rating.stars}★</span>
                            <GradientProgressBar percentage={rating.percentage} color={rating.color} />
                            <span>{rating.count}</span>
                        </div>
                    ))}
                </div>

                <div className="relative w-full flex justify-between">
                    {circularProgressBar.map((obj, idx) => (
                        <div key={idx} className="w-12 flex flex-col gap-y-2 items-center ">
                            <CircularProgressbar
                                className="font-semibold"
                                styles={buildStyles({
                                    pathColor: "green", textColor: "black",
                                })}
                                value={obj.percentage} text={`${obj.rating}%`}
                            />
                            <p className="font-semibold">{obj.domain}</p>
                        </div>
                    ))}
                </div>
            </section>


        </div>
    );
}
