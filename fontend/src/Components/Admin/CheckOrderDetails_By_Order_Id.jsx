/* eslint-disable no-unused-vars */

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';


import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import { useState } from 'react';


import singleProduct_Images from "../../../public/SingleProduct_Images";



export default function CheckOrderDeatils_BY_Order_Id () {
    const steps = [
        'Order Placed',
        'Order Confirmed',
        'Shipped',
        'Out For Delivery',
        'Delivered'
    ];

  const  product = {
        url: "https://exstatic-in.vivo.com/Oz84QB3Wo0uns8j1/in/1710999704108/c017ab843092b285e62963a9824de5f9.png.webp",

    }

    const [selectedImageUrl, setSelectedImageUrl] = useState(product?.url || "");


    return (
        <div>
            <div className="m-auto flex w-1/2 min-w-96 justify-between items-center border-4 font-semibold text-lg tracking-widest px-5  py-3 rounded-full ">
                <input type="text" className="w-full" placeholder="Enter Product Order_Id" />
                <button><SearchSharpIcon /></button>
            </div>

            <section className="mt-10">

                <div className="border-2 rounded-lg py-5  flex gap-x-20 ">
                    <div className='flex *:'>
                        <div className="relative flex justify-center">
                            {/* small images showcase */}
                            <div className={`relative flex flex-col gap-y-3 h-[500px] overflow-y-auto border p-2 custom-scrollbar`}>
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
                        <div className="max-w-72 max-h-72 mt-5">
                            {/* single image */}
                            <img className="high-quality pixelated relative w-full " src={selectedImageUrl} alt="" />
                        </div>
                    </div>

                    <div className="flex flex-col justify-start items-start">
                        {/* product attributes */}
                        <h1 className='font-semibold'> <span className='font-bold mr-3'>Order_id :</span> skfnsd4654fsd6f4df </h1>
                        <h1 className='font-semibold'> <span className='font-bold mr-3'>Brand :</span>  Vivo </h1>
                        <h1 className='font-semibold'> <span className='font-bold mr-3'>Product Name :</span>  Vivo 15 Pro Max , 4GB Ram , 16GB ROM </h1>
                        <h1 className='font-semibold'> <span className='font-bold mr-3'>Price :</span>  {15468} </h1>
                        <h1 className='font-semibold'> <span className='font-bold mr-3'>Date Of Order :</span>  {Date.now()} </h1>
                        <h1 className='font-semibold'> <span className='font-bold mr-3'>Payment Mode :</span>  Cash On Delivery </h1>

                        <div className="mt-10">
                            <p className="text-xl font-bold">Delivery Address</p>
                            <p className="font-semibold"> <span className="font-bold">Delivery to : </span> Odisha , Khordha , Balipatna , Banamalipur , Post-Office </p>
                            <p className="font-semibold"> <span className="font-bold">Pin Code : </span> 752103 </p>
                            <h1 className="font-bold"> Phone No :  <span className="text-sm font-semibold">6370982093</span> </h1>

                            <Box sx={{ width: '100%' }} className="mt-10 text-nowrap">
                                <Stepper activeStep={2} alternativeLabel>
                                    {steps.map((label) => (
                                        <Step key={label}>
                                            <StepLabel>{label}</StepLabel>
                                        </Step>
                                    ))}
                                </Stepper>
                            </Box>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center mt-5">
                    {/* bottom info button */}
                    <button className="w-fit font-semibold hover:bg-cyan-600 px-3 py-2 rounded-md shadow-lg bg-cyan-500 text-white">Update Status</button>
                    <button className="w-fit text-red-500 hover:text-red-700 text-lg font-semibold text-right ">Cancel-Order</button>
                </div>
            </section>

        </div>
    )
}