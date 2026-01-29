import { FaRegHeart } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";


const BuyProduct = ({ fvtItem, totalPrice, handleDelete }) => {
console.log("hellow",handleDelete);

    return (
        <div className="mb-12">
            <div className="bg-gray-500 h-full rounded-3xl p-5">
                <div className="divider"></div>
                <div className="flex justify-center items-center gap-2 p-2">
                    <FaRegHeart className='text-xl' />
                    <h2 className="text-2xl">Favorites Items</h2>
                </div>
                <div className="divider"></div>
                
                <div>
                    {
                        fvtItem.map(item => <div>

                            <div className="border-2 border-gray-400 m-3 p-4 rounded-xl flex items-center justify-between">
                                <div className="">
                                    <div className="w-20 h-20 overflow-hidden rounded-xl">
                                        <img
                                            src={item.img}
                                            alt={item.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <h5 className="font-bold">{item.name}</h5>
                                    <p>$ {item.price}</p>
                                    <p>{item.time}</p>
                                </div>
                                <div>
                                    <MdOutlineCancel onClick={() => handleDelete(item.id)} className="text-2xl hover:text-red-500"/>

                                </div>
                            </div>


                        </div>)
                    }
                </div>
                
                <div className="divider"></div>

                <div className="flex gap-30 items-center">
                    <div>
                        <h1 className="text-2xl font-bold">Total Bids Amount : </h1>
                    </div>
                    <div className="text-2xl font-bold text-white">
                       $ {totalPrice}.00
                    </div>
                </div>
            </div>

          

        </div>
    );
};

export default BuyProduct;