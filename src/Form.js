import React from 'react';


const Form = props => {
  return (
    <form onSubmit={props.onSubmit}>
    Shirt Size:
    <ul>
      <li>
        <input
          id="input-id-small"
          type="radio"
          value="small"
          checked={props.size === "small"}
          onChange={props.onChange}
        />
        <label htmlFor="input-id-small">
          Small
        </label>
      </li>

      <li>
        <input
          id="input-id-medium"
          type="radio"
          value="medium"
          checked={props.size === "medium"}
          onChange={props.onChange}
        />
        <label htmlFor="input-id-medium">
          Medium
        </label>
      </li>

      <li>
        <input
          id="input-id-large"
          type="radio"
          value="large"
          checked={props.size === "large"}
          onChange={props.onChange}
        />
        <label htmlFor="input-id-large">
          Large
        </label>
      </li>
    </ul>

    <button type="submit">Make your choice</button>
    </form>
  );
};


export default Form;
