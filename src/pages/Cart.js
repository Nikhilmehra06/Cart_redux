import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { connect } from 'react-redux';
import { IconContext } from 'react-icons/lib';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { decQyt } from '../redux/Cart/Cart.action';
import { incQyt } from '../redux/Cart/Cart.action';
import { deletingFromCart } from '../redux/Cart/Cart.action';

const Cart = ({ cartItem, deletingFromCart, decQyt, incQyt }) => {
  const Navigate = useNavigate();
  const sucessHandler = () => {
    Navigate('/submit');
  };
  const grandTotal = () => {
    let total = 0;
    for (let Item of cartItem) {
      total += Item.price * Item.quantity;
    }
    return Math.floor(total);
  };

  return (
    <>
      <Header />
      <div>
        {cartItem.length > 0 ? (
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-9">
                <div className="row">
                  {cartItem.map((product, index) => {
                    return (
                      <div className="col-md-4" key={index}>
                        <div className="card  shadow-lg mb-3 rounded ">
                          <img
                            src={product.image}
                            className="card-img-top"
                            alt="img"
                            height="200px"
                          />

                          <div className="card-body">
                            <h6 className="card-title fw-light">
                              {product.title.substring(0, 12)}
                            </h6>
                            <p className="card-text">
                              <i className="fa fa-inr me-1"> </i>
                              {product.price}
                            </p>
                            <p>
                              <IconContext.Provider
                                value={{
                                  padding: '1rem',
                                  border: '1px solid black',
                                }}
                              >
                                <FaMinus onClick={() => decQyt(product)} />
                                <span>{product.quantity}</span>
                                <FaPlus onClick={() => incQyt(product)} />
                              </IconContext.Provider>
                            </p>

                            <button
                              className="btn btn-sm btn-outline-dark"
                              onClick={() => deletingFromCart(product.id)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-md-3">
                <div>
                  <h5>Grand Total: {grandTotal()}</h5>
                  <button
                    onClick={() => sucessHandler()}
                    className="btn btn-outline-dark btn-sm"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <h1 className="display-2 text-center mt-5">No Items in Your Cart</h1>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItem: state.cartReducer.cartItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletingFromCart: (id) => dispatch(deletingFromCart(id)),
    incQyt: (id) => dispatch(incQyt(id)),
    decQyt: (id) => dispatch(decQyt(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
