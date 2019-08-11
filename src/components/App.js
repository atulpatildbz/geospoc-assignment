import React, { Component } from 'react'

import Header from './Header';
import Demographics from './Demographics';
import Map from './Map';
import Details from './Details';


class App extends Component {
    render() {
        return (
            <>
                <Header />
                <div className="mainGridContainer">
                    <div className="details">
                        <Details />
                    </div>
                    <div className="map">
                        <Map />
                    </div>
                    <Demographics />

                </div>
            </>
        )
    }
}

export default App;
