import React from 'react';


const Form = props => {
  return (
    <form onSubmit={props.onSubmit}>
    <ul>
      <li>
        <label>
          <input
          type="radio"
          value="small"
          checked={props.size === "small"}
          onChange={props.onChange}
          />
        Small
        </label>
      </li>

      <li>
        <label>
          <input
          type="radio"
          value="medium"
          checked={props.size === "medium"}
          onChange={props.onChange}
          />
        Medium
        </label>
      </li>

      <li>
        <label>
          <input
          type="radio"
          value="large"
          checked={props.size === "large"}
          onChange={props.onChange}
          />
        Large
        </label>
      </li>
    </ul>

    <button type="submit" className="submit-button">Make your choice</button>
    </form>
  );
};


export default Form;
