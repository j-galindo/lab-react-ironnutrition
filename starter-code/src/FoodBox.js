import React, { Component } from 'react'

export default class FoodBox extends Component {
  render() {
    return (
      <div>
          <div className="media-left">
    <figure className="image is-64x64">
      <img src={this.props.image} />
    </figure>
    </div>
    <div className="media-content">
    <div className="content">
      <p>
        <strong>{this.props.name}</strong> <br />
    <small>{this.props.calories}</small>
  </p>
</div>
</div>
<div className="media-right">
<div className="field has-addons">
  <div className="control">
    <input
      className="input"
      type="number" 
      value="1"
    />
  </div>
  <div className="control">
    <button className="button is-info">
    +
    </button>
  </div>
</div>
</div>

</div>
    
    )
  }
}
