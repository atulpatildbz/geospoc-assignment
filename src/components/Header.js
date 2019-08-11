import React, { Component } from 'react'
import reportSvg from '../resources/document.svg'
import reportpng from '../resources/report.png'

import { connect } from "react-redux";

import { setMode } from "../actions";

class Header extends Component {

    handleClick = () => {
        if (this.props.mode === 'pincode') {
            this.props.setMode('locality');
        }
        if (this.props.mode === 'locality') {
            this.props.setMode('pincode');
        }
    }

    renderSubHeader() {
        let str = '';
        if (this.props.mode === 'pincode') {
            str = 'Individual pin code report';
            if (this.props.selectedArea.pincode) {
                str = str + ` for ${this.props.selectedArea.pincode}`
            }
        }
        if (this.props.mode === 'locality') {
            str = 'Locality Report';
            if (this.props.selectedArea.locality_i) {
                str = `Locality ID ${this.props.selectedArea.locality_i}`
            }
        }
        return str;
    }

    render() {
        return (
            <div className="Header">
                <h2 style={{ margin: 0, display: 'inline-block' }} className="text">
                    <img src={reportpng} style={{ width: 20, height: 20 }}
                    alt=""></img>
                    Report
                </h2>
                <button style={{ float: "right"}} onClick={this.handleClick}>{(this.props.mode === 'pincode') ? 'LOCALITY' : 'PINCODE'}</button>

                <h5 className="text">{this.renderSubHeader()}</h5>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mode: state.mode,
        selectedArea: state.selectedArea
    }
}

export default connect(mapStateToProps, { setMode })(Header);
