/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import AccessAlarmOutlinedIcon from '@mui/icons-material/AccessAlarmOutlined';

const steps = [
    'Order Placed',
    'Order Confirmed',
    'Shipped',
    'Out For Delivery',
    'Delivered'
];



function Order_Product_Status({ className }) {
    const bilsCss = `flex gap-x-10 justify-between items-center text-lg font-medium`

    return (
        <div className={`${className}`}>

            <section className=' roboto-medium m-auto mt-5 gap-x-20 w-[80%] flex justify-between'>
                {/* product Details */}

                <div className='flex gap-x-10 gap-y-10 py-10 px-10 '>
                    <img className='max-w-36 max-h-36' src="https://rukminim2.flixcart.com/image/224/224/kw9krrk0/mouse/v/p/h/toad-13-portronics-original-imag8zbqqkgmb9d6.jpeg?q=90" alt="" />

                    <div className='flex flex-col gap-y-2 '>
                        <p>Portronics Toad 13, POR 1381, POR 1382 Wireless Optical</p>
                        <p><span className="font-bold">Brand : </span>POCO</p>
                        <p className="roboto-medium"> <span className="font-bold">Seller </span>: Amulya Trade</p>
                        <div>
                            <span className=''><CurrencyRupeeOutlinedIcon sx={{ fontSize: "1rem" }} /><del>499</del></span>
                            <span className='font-bold'><CurrencyRupeeOutlinedIcon sx={{ fontSize: "1rem" }} />299 </span>
                            <span className='text-green-600 opacity-50'>40% off</span>
                            <button className='text-green-600 px-2'>3 offers applied</button>
                        </div>

                        <div className="flex flex-col gap-y-5 mt-10">
                            {/* address */}
                            <div>
                                <p className="font-bold text-lg">Delivery Address</p>
                                <p>Odisha , Khordha , Balipatna , Banamalipur , Post Office.</p>
                                <p><span className="font-semibold">Pin Code</span> : 752103</p>
                            </div>
                            <div>
                                <p className="font-bold text-lg">Mobile No</p>
                                <p>6370982093</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bg-white w-fit h-fit p-5 flex flex-col gap-y-5 px-10'>
                    {/* total bills */}
                    <h1 className='text-center text-lg font-bold border-b-2 pb-3'>Delivery Details</h1>

                    <div className={`${bilsCss}`}>
                        <span>Delivery Date</span>
                        <span>15 jun 2024</span>
                    </div>
                    <div className={`${bilsCss}`}>
                        <span>Payment</span>
                        <span>201</span>
                    </div>
                    <div className={`${bilsCss}`}>
                        <span>Delivery Boy Mobile No</span>
                        <span>6370982093</span>
                    </div>


                    <p className='text-black font-bold text-md border-t-2 pt-5'><span className="text-green-500">Custmor Care No</span> 1800 2154 5462</p>
                </div>
            </section>


            <section>
                {/* product reaching status by status bar UI */}
                <Box sx={{ width: '100%' }}>
                    <Stepper activeStep={2} alternativeLabel={true}>
                        {steps.map((label) => (
                            <Step  key={label}>
                                <StepLabel >{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Box>
            </section>
        </div>
    )
}

export default Order_Product_Status