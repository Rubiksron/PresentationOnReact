import React from 'react';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

const FormReact = props => {
  return (
    <RadioGroup
      name="size"
      value={props.size}
      onChange={props.handleChange}
    >
    <RadioButton value="small">Small</RadioButton>
    <RadioButton value="medium">Medium</RadioButton>
    <RadioButton value="large">Large</RadioButton>
    <button type="submit">Make your choice</button>
    </RadioGroup>
  );
};


export default FormReact;
