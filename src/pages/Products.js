import aos from 'aos';
import React, { useEffect, useState } from 'react';
import Cards from '../components/Cards';
import { Footer } from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import product from '../Products';

const Products = () => {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(6);
  const [page, setPage] = useState(1);

  useEffect(() => {
    aos.init({
      once: true,
    });
  }, []);

  return (
    <div>
      <Header />

      <div
        data-aos="fade-down"
        data-aos-duration="800"
        className="container mt-3"
      >
        <div className="row">
          <div className="col-md-3">
            <Sidebar data={data} setData={setData} product={product} />
          </div>

          <div className="col-md-9">
            <Cards
              data={data}
              setData={setData}
              page={page}
              setPage={setPage}
              limit={limit}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
