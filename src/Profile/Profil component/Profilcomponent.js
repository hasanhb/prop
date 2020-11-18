import React, { Component } from "react"
import PropTypes from "prop-types";
export default class ProfilComponent extends Component{
    constructor(props){
        super(props);
        this.handlName=this.handlName.bind(this)
    }
    handlName(event){
event.preventDefault();
alert(event.props.name);
    }
    render(){
        return(
            <div>
                <img className="imag" src={this.props.myimg} alt="" onClick={this.handlName} />
            </div>
        )
    }
}
ProfilComponent.defaultProps = {
    name: "HBH",
  };
  ProfilComponent.propTypes = {
    name: PropTypes.string,
  };