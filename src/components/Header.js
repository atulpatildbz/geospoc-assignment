import React, { Component } from 'react'
import reportSvg from '../resources/document.svg'

import { connect } from "react-redux";

import { setModePincode, setModeLocality } from "../actions";

class Header extends Component {

    handleClick = () => {
        if(this.props.mode === 'pincode') {
            this.props.setModeLocality();
        }
        if(this.props.mode === 'locality') {
            this.props.setModePincode();
        }
    }

    render() {
        return (
            <div className="Header">
                <h2>
                    <img src={reportSvg} style={{ width: 20, height: 20}} alt=""></img>
                    Report
                    <button style={{float: "right"}} onClick={this.handleClick}>{this.props.mode}</button></h2>
                <h6>Sub-header</h6>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {mode: state.mode}
}

export default connect(mapStateToProps, {setModePincode, setModeLocality})(Header);
