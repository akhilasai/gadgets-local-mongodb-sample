import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import GadgetCard from './GadgetCard'

export class GadgetDetails extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gadgetsData:[]
    }
  }

  /* Write Your Code Here */
  componentDidMount() {
    fetch(`${this.props.url}/api/gadget/${this.props.id}`)
      .then((res) => res.json())
      .then((data) => this.setState({ gadgetsData: data }))
      .catch((err) => console.log(err));
  }

  
  render() {
    console.log(this.state.gadgetsData);
    return (
      <div className='card gadget-item' style={{margin:"0rem 10rem"}}>
        <div className="card-body p-0">
        {/* Write Your Code Below */}
        {this.state.gadgetsData.map((item)=>(
          <div>
            <header data-testid="header" style={{textAlign:"center",backgroundColor:'#eee',fontSize:"larger"}}>{item.brandName} {item.itemName}</header>
            <div className='p-5' style={{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"10px",margin:"0rem 3rem"}}>
              <h3 data-testid="price">Price : {item.price}</h3>
              <h3 data-testid="units">Available Units : {item.units}</h3>
              <h3 data-testid="brand">Brand : {item.brandName}</h3>
              <h3 data-testid="category">Category : {item.itemName}</h3>
            </div>
            <div style={{textAlign:"center",backgroundColor:'#eee',fontSize:"larger"}}>
            <Link data-testid="goBackBtn" to={"/"}>back</Link>
            </div>
          </div>
        ))}
        </div>
      </div>
    )
  }

}

export default GadgetDetails