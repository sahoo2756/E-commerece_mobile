/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import "./style.css"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useEffect, useRef, useState } from 'react';





function createData(name, order_count) {
    return { name, order_count };
}

const rows = [
    createData('Apple', 159),
    createData('Vivo', 50),
    createData('Oppo', 64),
    createData('Xaomi', 30),
    createData('Poco', 15),
];

const OrderProduct_List = () => {
    const [isTableContentShow, setIsTableContentShow] = useState(false);

    const basicCss = `border-4 border-black rounded-md p-4 text-xl text-center font-bold`;

    return (
        <div>
            <div className="flex gap-x-10 items-center  mb-10">
                <div className={`${basicCss}`}>
                    <p className="lato-bold">Total Order</p>
                    <p className="text-blue-700">56 <span className="text-sm font-semibold">pcs</span></p>
                </div>

                <div className={`${basicCss}`}>
                    <p className="lato-bold">Mixed brands</p>
                    <p className="text-blue-700">6</p>
                </div>

                <button className="bg-purple-600 hover:bg-purple-500 px-5 py-3 rounded-md text-white">All Order Status</button>
            </div>

            <div className="w-full">
                <div className="bg-orange-600 w-[70%] flex justify-between text-xl text-white font-semibold px-2 py-2 items-center rounded-md">
                    <p>Order List</p>
                    <button onClick={() => setIsTableContentShow(!isTableContentShow)}>
                        <KeyboardArrowDownIcon
                            sx={{ fontWeight: "bold", fontSize: "40px" }}
                            className={`${isTableContentShow && 'rotate-180'}`}
                        />
                    </button>
                </div>

                {isTableContentShow && (
                    <table className="table-enter  border-2 border-gray-300 mt-10 w-[70%] text-center text-lg overflow-x-auto font-semibold">
                        <thead className="bg-red-500 text-white">
                            <tr>
                                <th className="py-3">Brand Name</th>
                                <th>Order-Count</th>
                                <th>View Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map(row => (
                                <tr className="border even:bg-gray-300 odd:bg-gray-200" key={row.name}>
                                    <td className="py-3">{row.name}</td>
                                    <td>{row.order_count} <span className="text-sm font-normal">pcs</span></td>
                                    <td className="text-blue-600 cursor-pointer hover:scale-105 text-sm">View all Models</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};



import CheckOrderDeatils_BY_Order_Id from "./CheckOrderDetails_By_Order_Id";
import GetAllOrderCart from "./GetAllOrderCart";
import GetAllStockCount from "./GetAllStockCount";
import GetAllStockOn_Specific_Brand from "./GetAllStockOn_Specific_Brand";



import FolderCopyOutlinedIcon from '@mui/icons-material/FolderCopyOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import KeyboardCommandKeyOutlinedIcon from '@mui/icons-material/KeyboardCommandKeyOutlined';

const LeftNavogation = () => {
    const [showStockSubCategory, setShowStockSubCategory] = useState(false);
    

    const CreateSubCategory = ({domain}) => {
        return  (
            <button className="hover:text-green-500 flex items-center gap-x-1"><KeyboardCommandKeyOutlinedIcon  sx={{fontSize: "0.7rem" , color : "gray"}} /> {domain} </button>
        )
    }

    return (
        <div className="left-navigation flex flex-col items-start gap-y-5 group">
            {/* left navigation */}
            <button className="hover:text-green-500 ml-4 border-b-2 pb-2 border-red-500">Order</button>
            <button className="hover:text-green-500 ml-4">Check Order Details By Id</button>
            <div>

                <div className="flex " onClick={e => setShowStockSubCategory(prev => !prev)}>
                    <button className="mr-1 text-gray-400"><ArrowForwardIosOutlinedIcon className={`${showStockSubCategory && "rotate-90"} opacity-0 group-hover:opacity-100`} sx={{ fontSize: ".8rem" }} /></button>
                    {/* <button className="mr-2 text-gray-400"> <FolderCopyOutlinedIcon sx={{ fontSize: '1rem' }} /> </button> */}
                    <button className="">Stock</button>
                </div>
                {showStockSubCategory && (
                    <div className="flex flex-col gap-y-2 ml-10 mt-2 items-start text-sm text-gray-100 button-hover:text-green-500">
                        <CreateSubCategory domain={"Total Stock"} />
                        <CreateSubCategory domain={"Search Stock By Brand"} />
                    </div>
                )}
            </div>
        </div>
    )
}


function LandingPage() {
    return (
        <main className="flex justify-between">
            <section className="sticky left-0 top-0 w-[25%] h-screen bg-black text-white">
                {/* left navigation bar */}
                <div className="text-center flex flex-col gap-y-1 border-b-2 border-white/30 pb-10 mt-5">
                    <img className="m-auto w-32 h-32 rounded-full" src="https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg" alt="" />
                    <p className="text-sm text-gray-300">Manas Sahoo</p>
                    <p className="text-xs text-gray-300">sahoo15820004@gmail.com</p>
                </div>

                <div className="mt-5 pl-5">
                    <LeftNavogation />
                </div>


            </section>

            {/* right side UX pages */}
            <section className="bg-white px-10 py-5 w-[75%] h-full">
                <OrderProduct_List />
                {/* <GetAllOrderCart /> */}
                {/* <CheckOrderDeatils_BY_Order_Id /> */}
                {/* <GetAllStockCount /> */}
                {/* <GetAllStockOn_Specific_Brand /> */}
            </section>
        </main>
    );
}

export default LandingPage;
