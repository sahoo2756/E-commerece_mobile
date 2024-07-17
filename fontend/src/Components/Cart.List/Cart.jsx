/* eslint-disable no-unused-vars */
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';

function Un_Purchased_product() {
    const [orderCount, setOrderCount] = useState(1);

    const increaseOrder = () => {
        setOrderCount(prev => prev + 1);
    }
    const decreaseOrder = () => {
        setOrderCount(prev => {
            if (prev > 1) {
                console.log(prev)
                return prev - 1
            }
            return prev
        });
    }

    return (
        <section className='flex flex-col gap-y-10 border-b-2 py-10 px-10'>
            {/* un-purchased list */}
            <div className='flex gap-x-10'>

                <img className='max-w-36 max-h-36' src="https://rukminim2.flixcart.com/image/224/224/kw9krrk0/mouse/v/p/h/toad-13-portronics-original-imag8zbqqkgmb9d6.jpeg?q=90" alt="" />


                <div className='flex flex-col gap-y-2'>
                    <p>Portronics Toad 13, POR 1381, POR 1382 Wireless Optical</p>
                    <p >Seller : Amulya Trade</p>
                    <div>
                        <span className=''><CurrencyRupeeOutlinedIcon /><del>499</del></span>
                        <span className='font-bold'><CurrencyRupeeOutlinedIcon />299 </span>
                        <span className='text-green-600'>40% Off</span>
                        <button className='text-green-600'>3 offers applied</button>
                    </div>
                </div>

                <div className='flex flex-col justify-between'>
                    <p className='text-nowrap'>Delivery Within 7 Days</p>
                </div>

            </div>

            <div className='flex gap-x-20'>
                <div className='flex gap-x-4'>
                    <button className='bg-gray-300 p-1 rounded-full flex items-center ' onClick={decreaseOrder}> <RemoveIcon sx={{ fontSize: "1rem" }} /> </button>
                    <button className='border-2 border-black/30 px-3  font-semibold' > {orderCount} </button>
                    <button className='bg-gray-300 p-1 rounded-full flex items-center' onClick={increaseOrder}> <AddIcon sx={{ fontSize: "1rem" }} /> </button>
                </div>
                <button className='text-blue-600 font-semibold hover:font-bold'>Remove</button>
            </div>
        </section>
    )
}


function Purchased_Product() {
    return {

    }
}


function Cart() {


    const bilsCss = `flex justify-between items-center text-lg font-medium`

    return (
        <div className='bg-gray-200 '>

            {/* cart navbar */}
            <nav className='bg-[#5046E4] flex justify-between w-full py-3 '>
                <div className='flex justify-between m-auto w-[80%]'>
                    <div className='w-full flex items-center gap-4 bord pl-20'>
                        <p className='text-white font-bold text-lg'>Flipkart</p>
                        <form className="flex w-[50%] py-1 items-center justify-between  shadow-lg bg-white px-5 ">
                            <input type="text" className='w-full outline-none border-0 ' placeholder="Search for mobiles , brands and more" />
                            <button><SearchOutlinedIcon color='blue' className='text-blue-700' /></button>
                        </form>
                    </div>

                    <h1 className='text-white font-bold text-lg '>MyAccount</h1>

                </div>
            </nav>


            <section className='m-auto mt-5 border-4 gap-x-20 w-[80%] flex justify-between'>

                <div className='w-fit bg-white '>
                    {/*Un-Purchased products */}
                    <section className='flex flex-col '>
                        <Un_Purchased_product />
                        <Un_Purchased_product />
                        <Un_Purchased_product />
                        <Un_Purchased_product />

                        <div className='sticky bottom-0 bg-gray-100 shadow-xl  flex justify-end items-center h-24 pr-10'>
                            <button className='text-xl font-bold bg-blue-600 px-10 py-3 rounded-md  w-fit text-white'>Place Order</button>
                        </div>
                    </section>

                    <section className='border-t-2 '>
                        {/* Purchansed List */}
                        <h1 className='text-center text-2xl font-bold pt-10 pb-16'>Purchased Product</h1>
                        <div>
                            <Un_Purchased_product />
                        </div>
                    </section>
                </div>


                <div className='bg-white w-fit h-fit p-5 flex flex-col gap-y-5 px-10 shadow-lg'>
                    {/* total bills */}
                    <h1 className='text-center text-lg font-bold border-b-2 pb-3'>Price Details</h1>

                    <div className={`${bilsCss}`}>
                        <span>Price 3 items</span>
                        <span><CurrencyRupeeOutlinedIcon />1751</span>
                    </div>
                    <div className={`${bilsCss}`}>
                        <span>Discount</span>
                        <span>201</span>
                    </div>
                    <div className={`${bilsCss}`}>
                        <span>Delivery Charges</span>
                        <span><del>100</del> free</span>
                    </div>
                    <div className={`${bilsCss}`}>
                        <span>Total Amount</span>
                        <span>1900</span>
                    </div>
                    <p className='text-green-500 font-bold text-md'>You Will save 1241 on The above 3 Order</p>
                </div>
            </section>

        </div>
    )
}

export default Cart


