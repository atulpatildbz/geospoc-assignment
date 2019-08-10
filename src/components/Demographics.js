import React, { Component } from 'react'

class Demographics extends Component {
    render() {
        return (
            <div className="demographics">
                <h2>Demographics</h2>
                <div className="flexrow" >
                    <div className="details box3 flexcolumn">
                        Monthly Incode distribution
                    </div>
                    <div className="details box4 flexcolumn">
                        Expenditure
                    </div>
                </div>
            </div>
        )
    }
}

export default Demographics;
