/* eslint-disable no-unused-vars */
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';

 function ProductCart() {
    const [likeToHeart, setLikeToHeart] = useState(false);

    const handleLikeClick = () => {
        setLikeToHeart(!likeToHeart);
        
    };

    return (
        <>
            <div className="pl-10 pr-20 flex justify-between cursor-pointer">
                <section className="flex w-[70%] gap-x-12 ">
                    <div className="h-48 gap-x-5 flex items-start">
                        {/* image box */}
                        <img
                            className="relative w-full h-full"
                            src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70"
                            alt="iPhone 15"
                        />
                        <button className="" onClick={handleLikeClick}>
                            {likeToHeart ? (
                                <FavoriteOutlinedIcon className="text-red-700" />
                            ) : (
                                <FavoriteBorderOutlinedIcon className="text-gray-500" />
                            )}
                        </button>
                    </div>

                    <div>
                        {/* product details */}
                        <p className="font-bold text-lg hover:text-blue-600">Apple iPhone 15 (Black, 128 GB)</p>

                        <div className="font-semibold">
                            <span className="px-2 bg-green-700 font-bold text-white rounded-md">
                                4.5
                            </span>
                            <span>39466 ratings</span>
                            <span>165162 reviews</span>
                        </div>
                        <ul className="font-semibold text-gray-500 text-sm flex flex-col gap-y-[4px]">
                            <li>128 GB ROM</li>
                            <li>15.6 cm (6.1) inch Super Retina XDR Display</li>
                            <li>48MP + 12MP | 12MP Front Camera</li>
                            <li>A16 Bionic Chip, 6 Core Processor</li>
                            <li>
                                1 Year Warranty For Phone and 6 months Warranty for in-Box
                                Accessories
                            </li>
                        </ul>
                    </div>
                </section>

                <div className="flex flex-col gap-y-2">
                    {/* product amount details */}
                    <p className="font-bold text-2xl">
                        <CurrencyRupeeOutlinedIcon /> 64999
                    </p>
                    <p>
                        <del>795661</del> 18% off
                    </p>
                    <p>Free Delivery</p>
                    <p>100 pcs Available</p>
                </div>
            </div>

            <div className="border-2 border-gray-200"></div>

            {/* <ToastContainer /> */}

        </>
    );
}


// eslint-disable-next-line react/prop-types
export default function SpecificBrandMobilesList({brands}) {
    return (
        <>
            <div className="flex flex-col gap-y-14 ml-20">
                <h2 className="text-lg font-bold">POCO Brands </h2>
                {
                    [1, 2, 3, 4, 5, 7].map((ele) => {
                        return (
                            <ProductCart key={ele} />
                        )
                    })
                }
            </div>
        </>
    )
}

