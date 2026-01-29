import React from 'react';
import { FaRegHeart } from 'react-icons/fa';

const Product = ({ item, handleFvt }) => {
    const { name, img, price, time } = item;

    return (
        <tr>
           

            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img src={img} alt={name} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                      
                    </div>
                </div>
            </td>

            <td>
                ${price}
                <br />
                
            </td>

            <td>{time}</td>

            <th>
                <FaRegHeart onClick={() =>handleFvt(item)} className='text-xl'/>
            </th>
        </tr>
    );
};

export default Product;
