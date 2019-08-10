import React, { Component } from 'react'

import Header from './Header';
import Demographics from './Demographics';
import Map from './Map';


class App extends Component {
    render() {
        return (
            <div className="mainFlexContainer">
                <Header />
                <div className="flexrow top-container">
                    <div className="details box1 flexcolumn">
                        details
                    </div>
                    <div className="map box2 flexcolumn">
                        <Map />
                    </div>
                </div>
                <Demographics />
                {/* <h3 className="flexrow">Demographics</h3>
                <div className="flexrow bottom-container">
                    <div className="details box3 flexcolumn">
                        Monthly Incode distribution
                    </div>
                    <div className="details box4 flexcolumn">
                        Expenditure
                    </div>
                </div> */}

            </div>
        )
    }
}

export default App;
