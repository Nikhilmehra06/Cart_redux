import React, { useState, useEffect } from 'react';

const Sidebar = ({ setData, product }) => {
  const filterListData = [
    "men's clothing",
    'jewelery',
    'electronics',
    "women's clothing",
  ];
  const [filterArray, setFilterArray] = useState([]);

  useEffect(() => {
    const filteredData = product.filter((item) =>
      filterArray.includes(item.category)
    );
    setData(filteredData);
  }, [filterArray, product, setData]);

  const onchangeHandler = (e) => {
    let value = e.target.value;

    if (filterArray.includes(value)) {
      let arr = filterArray.filter((arr) => value !== arr);
      setFilterArray(arr);
    } else {
      setFilterArray((arr) => [...arr, e.target.value]);
    }
  };

  return (
    <>
      {filterListData.map((item, id) => {
        return (
          <div className="form-check " key={id}>
            <input
              className="form-check-input"
              type="checkbox"
              name={item}
              onChange={onchangeHandler}
              value={item}
            />
            <label className="form-check-label">{item}</label>
          </div>
        );
      })}
    </>
  );
};

export default Sidebar;
