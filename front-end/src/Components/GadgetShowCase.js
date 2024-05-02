import React, { Component } from "react";
import GadgetCard from "./GadgetCard";
import axios from "axios";
import { Link } from "react-router-dom";
import { Navigate } from 'react-router-dom';

export class GadgetShowCase extends Component {
    
  constructor(props) {
    super(props);

    this.state = {
      gadgetsData: [],
      id:0,
      clickable:false
    };
  }
  /* Write Your Code Here */
  componentDidMount() {
    fetch(`${this.props.url}/api/gadgets`)
      .then((res) => res.json())
      .then((data) => this.setState({ gadgetsData: data }))
      .catch((err) => console.log(err));
  }

   handleClick = (id)=>{
    this.setState({id:id,clickable:true})
  }
  render() {

    console.log(this.state.gadgetsData);
    return (
      <div>
        <div className="container">
          <div className="row m-3" style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)"}}>
            {/* Write Your Code Here */}
            {this.state.gadgetsData.map((item) => (
                <div  onClick={()=>this.handleClick(item._id)}>
                <GadgetCard item={item} />
                </div>
            ))}
          </div>
        </div>
        {
          this.state.clickable &&
          <Navigate to={`/gadgets/${this.state.id}`} replace={true}>
          </Navigate>  
        }
      </div>
    );
  }
}

export default GadgetShowCase;
