import Product from "./Product";

const Blogs = ({ product, handleFvt }) => {
    return (
        <div className="p-20">
            <h1 className="text-3xl font-bold">Active Action</h1>
            <p>Discover And bid on extraordinary Product</p>

            <div className="overflow-x-auto mt-6 bg-gray-700 text-white">
                <table className="table ">
                    <thead>
                        <tr className="text-white ">
                            <th>
                                <p className="text-white">Item</p>
                            </th>
                            <th>Current bid</th>
                            <th>Time Left</th>
                            <th>Bid Now</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            product.map(item => (
                                <Product key={item.id} item={item} handleFvt={handleFvt}/>
                            ))
                        }
                    </tbody>

                    
                </table>
            </div>
        </div>
    );
};

export default Blogs;
