
const Banner = () => {
    return (
        <section className="Banner__section">
            <div className="container py-5">
                <div className="row gy-5">
                    <div className="col-md-6">
                        <img className="img-fluid" src="/images/banner.png" alt="banner-img" />
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                        <h1 className="display-6 fs-3 fw-bold">Test yourself with  <br /> our Quizo App. Let's have fun with <br /> our amazing quiz playground 💥 </h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;