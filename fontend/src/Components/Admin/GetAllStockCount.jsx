/* eslint-disable no-unused-vars */


export default function GetAllStockCount() {
    function createData(name, availbale_pcs , available_models) {
        return { name, availbale_pcs , available_models };
    }

    const rows = [
        createData('Apple',  159 , 5),
        createData('Vivo', 50 , 6),
        createData('Oppo', 64 , 18),
        createData('Xaomi', 30 , 13),
        createData('Poco', 15 , 3),
    ];

    
    return (
        <div>
            <table className="border-2 border-gray-300 mt-10 w-[70%] text-center text-lg overflow-x-auto font-semibold">
                <thead className="bg-red-500 text-white">
                    <th className="py-3">Brand Name</th>
                    <th>Available Pcs</th>
                    <th>Available Models</th>
                    <th>View All</th>
                </thead>
                <tbody>
                    {rows.map(row => (
                        <tr className="border even:bg-gray-300 odd:bg-gray-200" key={row.name}>
                            <td className="py-3">{row.name}</td>
                            <td>{row.availbale_pcs}</td>
                            <td>{row.available_models}</td>
                            <td className="text-blue-500 "> <button className="bg-blue-600 px-2 py-1 rounded-md text-white text-sm">Click</button>  </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

