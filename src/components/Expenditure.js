import React, { Component } from 'react';
import { connect } from "react-redux";

import { Bar } from 'react-chartjs-2';
import * as expenditureData from '../resources/expenditure.json'

class Expenditure extends Component {
    renderChart() {
        if (this.props.mode === 'pincode') {
            let found = expenditureData.default.find((element) => {
                return element.pincode === this.props.selectedArea.pincode
            });
            if (found) {
                let chartObj = { ...found };
                delete chartObj.pincode;
                return (<Bar
                    data={{
                        labels: Object.keys(chartObj),
                        datasets: [
                            {
                                label: `Expenditure for ${this.props.selectedArea.pincode}`,
                                backgroundColor: 'rgba(95,167,216,0.9)',
                                data: Object.values(chartObj)
                            }
                        ]
                    }}
                    width={100}
                    height={300}
                    options={{
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [{
                                ticks: {
                                    max: 400,
                                    min: 0,
                                    stepSize: 50
                                }
                            }]
                        }
                    }}
                />
                )
            }
        }
        return (<div style={{textAlign: "center"}}>
            <div className="text largefont bluefont">
                No Data Available
            </div>
            <div className="text bluefont">
                {(this.props.selectedArea.pincode ? `Expenditure for ${this.props.selectedArea.pincode}` : 'Expenditure')}
            </div>
        </div>)
    }
    render() {
        return (
            <div>
                {this.renderChart()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { mode: state.mode, selectedArea: state.selectedArea }
}

export default connect(mapStateToProps)(Expenditure);
