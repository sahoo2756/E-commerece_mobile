/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


// show specific 
// stock product 
// available in 
// go-down

import { useState } from "react";
import singleProduct_Images from "../../../public/SingleProduct_Images"
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import mobiles from "../../../public/mobileImage";

const ProductCart = ({ productObj }) => {

    console.log("DJ = ", productObj)
    const [selectedImageUrl, setSelectedImageUrl] = useState(productObj.url || "");


    return (
        <div className="flex gap-x-24 border-b-2 pb-10">
            <div className="w-fit rounded-lg py-5 flex items-start gap-x-7">
                <div className="relative flex justify-center">
                    {/* small images showcase */}
                    <div className={`relative flex flex-col gap-y-3 h-[300px] overflow-y-auto border p-2 custom-scrollbar`}>
                        {singleProduct_Images.map((elem, idx) => (
                            <div key={idx} className="w-16 h-16">
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
                <div className="max-w-32 max-h-32 mt-5">
                    {/* single image */}
                    <img className="high-quality pixelated relative w-full " src={selectedImageUrl} alt="" />
                </div>
            </div>

            <div>
                {/* Product Attributes */}
                <div>

                    {Object.keys(productObj).map((key, idx) => {
                        if (key === "url" || productObj[key] === "") {
                            return;
                        }
                        return (<p key={idx} className="font-semibold"> <span className="font-bold text-lg mr-3">{key} : </span> {productObj[key]} </p>)
                    })}
                </div>
            </div>
        </div>
    )
}


import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
export default function GetAllStockOn_Specific_Brand({ brand }) {

    brand = "samsung"
    let isBrandExit = Boolean(mobiles[brand])

    if (isBrandExit === false) {
        return (
            <div className="h-screen">
                <div className="mb-10">
                    <p className="w-fit font-bold text-lg border-2 rounded-md border-blue-600 px-2 py-1 ">Total Product : 0 </p>
                </div>

                <div className="flex justify-center items-center w-full h-[80%]">

                <p className="text-2xl font-bold text-red-600 "><ErrorOutlineIcon className="text-2xl" sx={{fontSize : "3rem"}}/> Technical Issue</p>
                </div>

            </div>

        )
    }

    return (
        <div>
            <div className="mb-10">
                <p className="w-fit font-bold text-lg border-2 rounded-md border-blue-600 px-2 py-1 ">Total Product : {mobiles[brand].length}</p>
            </div>
            {mobiles[brand].map((productObj, idx) => (
                <ProductCart key={idx} productObj={productObj} />
            ))}
        </div>
    )
}

