import React from 'react';


  const Form = props => {
    return (
      <div>
        <h2>{props.size}</h2>
      </div>
    );
  };


export default Form;







// <form onSubmit={this.handleSubmit}>
// <p className="title">Select a pizza size:</p>
//
// <ul>
// <li>
// <label>
// <input
// type="radio"
// value="small"
// checked={this.state.size === "small"}
// onChange={this.handleChange}
// />
// Small
// </label>
// </li>
//
// <li>
// <label>
// <input
// type="radio"
// value="medium"
// checked={this.state.size === "medium"}
// onChange={this.handleChange}
// />
// Medium
// </label>
// </li>
//
// <li>
// <label>
// <input
// type="radio"
// value="large"
// checked={this.state.size === "large"}
// onChange={this.handleChange}
// />
// Large
// </label>
// </li>
// </ul>
//
// <button type="submit" className="submit-button">Make your choice</button>
// </form>
