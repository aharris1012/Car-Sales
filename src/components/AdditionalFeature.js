import React from 'react';
import {useDispatch} from "react-redux";
import {addFeature} from "../actions/carActions";

const AdditionalFeature = props => {
  const dispatch =useDispatch();

  const hanldeAddFeature = ()=>{
    dispatch(addFeature(props.feature));
  }
  
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button"onClick={(hanldeAddFeature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
