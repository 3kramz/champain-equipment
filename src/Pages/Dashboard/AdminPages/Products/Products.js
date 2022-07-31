import React from 'react';
import { useSelector } from 'react-redux';
import Product from './Product';

const Products = () => {
const tools = useSelector(state => state.tools);


    return (
        <div>
            <div>
            <div className='border-b-2 border-slate-100 mb-4'>
                <h1 className='text-2xl mt-5 font-bold font-serif text-center'>My Order's</h1>
            </div>
            <div className=" overflow-x-auto rounded-md">
                <table className="w-full text-sm text-left">
                    <thead className=" bg-[#F5F5F5]">
                        <tr>
                            <th className="px-6 py-4"> 
                                Photo
                            </th>

                            <th className="px-6 py-4">
                                Name
                            </th>

                            <th className="px-6 py-4">
                                Price
                            </th>
                            <th className="px-6 py-4">
                                Sold
                            </th> 
                            <th className="px-6 py-4 text-warning">
                                Action
                            </th> 
                        </tr>
                    </thead>
                    <tbody>
                     {tools.map(tool => <Product key={tool._id} tool={tool} />)}
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
};

export default Products;