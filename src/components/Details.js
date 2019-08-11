import React, { Component } from 'react'
import { connect } from "react-redux";

class Details extends Component {

    renderPlace(label, value) {
        return (
            <>
                <span>{label}</span>
                <span style={{ fontWeight: 'bold' }}>{value}</span>
            </>
        )
    }

    renderDetails() {
        if (this.props.selectedArea.FID) {
            //if area is selected
            return (<>
                <div className='text numbers largefont bluefont'>
                    {this.props.selectedArea.population}
                </div>
                <div className='text numbers largefont bluefont'>
                    {this.props.selectedArea.households}
                </div>
                <div className="text">
                    Population
                    </div>
                <div className="text">
                    Households
                    </div>
                <div className="text bluefont">
                    {
                        (this.props.mode === 'pincode') ?
                            this.renderPlace('District: ', this.props.selectedArea.district_n) :
                            this.renderPlace('Locality: ', this.props.selectedArea.locality_i)}
                </div>
                <div className="text bluefont">
                    {
                        (this.props.mode === 'pincode') ?
                            this.renderPlace('State: ', this.props.selectedArea.state_name) :
                            this.renderPlace('City: ', this.props.selectedArea.city)}
                </div>

            </>)
        }
    }

    render() {
        return (
            <div className='details details-grid-wrapper centralizeDiv'>
                {this.renderDetails()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { mode: state.mode, selectedArea: state.selectedArea }
}

export default connect(mapStateToProps)(Details);
