import React from 'react';
import Products from '../Products';
import Pagination from './Pagination';
import { connect } from 'react-redux';
import { addingToCart } from '../redux/Cart/Cart.action';

const Cards = ({ data, setData, limit, page, setPage, addToCart }) => {
  let productList = data.length
    ? data.slice(limit * (page - 1), limit * page)
    : Products.slice(limit * (page - 1), limit * page);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 d-flex flex-column align-start"></div>
          <div className="col-md-12">
            <div className="row">
              {productList.map((product, id) => {
                return (
                  <div className="col-md-6 col-sm-6 col-lg-4 p-3" key={id}>
                    <div className="card cards shadow-lg mb-3 rounded">
                      <img
                        src={product.image}
                        className="card-img-top shadow"
                        alt="img"
                        height="200px"
                      />
                      <div className="card-body">
                        <h6 className="card-title fw-light">
                          {product.title.substring(0, 12)}
                        </h6>
                        <h6 className="card-text">
                          <i className="fa fa-inr me-1"> </i>
                          {product.price}
                        </h6>
                        <button
                          className="btn btn-sm const btn-outline-dark"
                          onClick={() => addToCart(product)}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="text-center">
            <Pagination
              pages={Math.ceil(
                data.length ? data.length / limit : Products.length / limit
              )}
              page={page}
              data={data}
              onChange={setPage}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (products) => dispatch(addingToCart(products)),
  };
};

export default connect(null, mapDispatchToProps)(Cards);
