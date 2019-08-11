import React, { Component } from 'react'
import { connect } from "react-redux";

import { Pie } from 'react-chartjs-2';
import * as incomeData from '../resources/income.json';

class MonthlyIncome extends Component {
    renderChart() {
        if (this.props.mode === 'locality') {
            let found = incomeData.default.find((element) => {
                return element.locality === this.props.selectedArea.locality
            });
            if (found) {
                let chartObj = {...found};
                return (
                    <>
                <Pie
                    data={{
                        labels: [chartObj.locality],
                        datasets: [
                            {
                                data: [chartObj.income],
                                backgroundColor: 'rgba(95,167,216,0.9)'
                            }
                        ]
                    }}
                    options={{
                        maintainAspectRatio: false
                    }}
                />
                <div className="text bluefont">
                    {chartObj.income}
                </div>
                </>
                )
            }
        }
        return (<div style={{textAlign: "center"}}>
            <div className="text largefont bluefont">
                No Data Available
            </div>
            <div className="text bluefont">
                Monthly Income Distribution
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

export default connect(mapStateToProps)(MonthlyIncome);
