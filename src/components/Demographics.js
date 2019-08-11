import React, { Component } from 'react';
import Expenditure from './Expenditure';
import MonthlyIncome from './MonthlyIncome';

class Demographics extends Component {
    render() {
        return (
            <>
                <h2 className="text bluefont" style={{'grid-column': 'span 2'}}>Demographics</h2>
                <div className="monthlyIncome">
                    <MonthlyIncome />
                </div>
                <div className="expenditure">
                    <Expenditure />
                </div>
            </>
        )
    }
}

export default Demographics;
