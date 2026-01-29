

const Banner = () => {
    return (
        <div>

            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage:
                        "url(https://i.ibb.co.com/Rk7Kvs0Q/Banner-min.jpg)",
                }}
            >
                <div className="hero-overlay"></div>
                <div className=" text-white mr-96">
                    <div className="">
                        <h1 className="mb-5 pb-3 text-5xl font-bold">Bid On uniqe Items From<br/> Around the World</h1>
                        <p className="mb-5 pb-3">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem<br/>
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;