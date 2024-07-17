/* eslint-disable no-unused-vars */

import singleProduct_Images from "../../../public/SingleProduct_Images";


export default function GetAllOrderCart  () {

  

    return (
        <div className="">
            {singleProduct_Images.map(product => (
                <div key={product.url} className="border-b-2 py-7">
                    <div className="flex items-start gap-x-10">
                        <img src={product.url} className="w-32 h-32" alt="" />
                        <div className="flex flex-col gap-y-5 ">
                            <p className="flex items-center gap-x-2"><span className="font-bold text-lg">Order_ID : </span> agd56dcs6d4cs561dc56cds </p>
                            <p className="flex items-center gap-x-2"><span className="font-bold text-lg">Brand : </span> Vivo </p>
                            <p className="flex items-center gap-x-2"><span className="font-bold text-lg">Date Of Order : </span> {Date.now()} </p>
                            <button className="w-fit text-blue-600 hover:text-blue-700 font-semibold">View Full Details</button>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-10">
                    <button className="w-fit font-semibold hover:bg-cyan-600 px-3 py-2 rounded-md shadow-lg bg-cyan-500 text-white">Update Status</button>
                    <button className="w-fit text-red-500 hover:text-red-700 text-lg font-semibold text-right ">Cancel-Order</button>

                    </div>
                </div>
            ))}
        </div>
    )
}


