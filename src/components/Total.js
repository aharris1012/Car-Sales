import React from 'react';
import {useSelector} from "react-redux";
import {connect} from "react-redux";



const Total = props => {
  const car =useSelector (state = state.car);
  const additonalPrice =useSelector(state => state.additonalPrice);



  return (
    <div className="content">
      <h4>Total Amount: ${car.price + car.additionalPrice}</h4>
    </div>
  );
};

export default Total;
