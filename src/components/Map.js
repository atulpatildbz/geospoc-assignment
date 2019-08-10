import React, { Component } from 'react'
import ReactMapGL from "react-map-gl";
import MapGLDraw, { EditorModes } from '@urbica/react-map-gl-draw';

import ReactMapboxGl, { Layer, Feature, Popup } from 'react-mapbox-gl';

import { connect } from "react-redux";
import { setViewPort } from "../actions";


const Mapbox = ReactMapboxGl({
    accessToken: 'pk.eyJ1IjoiYXR1bHBhdGlsZGJ6IiwiYSI6ImNqejU4cGFhOTAyOTYzb3VpcG1sZ3lzYWgifQ.cl1SEREE5MU7Vkh9V_qMRQ'
});

const polygonPaint = {
    'fill-color': '#6F788A',
    'fill-opacity': 0.7
};

const AllShapesPolygonCoords = [
    [
        [
            77.600297999999995,
            12.992649
        ],
        [
            77.600109000000003,
            12.992255
        ],
        [
            77.599965999999995,
            12.991903000000001
        ],
        [
            77.599922000000007,
            12.991785
        ],
        [
            77.599874,
            12.991655
        ],
        [
            77.599531999999996,
            12.990551
        ],
        [
            77.599519000000001,
            12.990504
        ],
    ]
];

// <Layer type="fill" paint={polygonPaint}>
//                             <Feature coordinates={AllShapesPolygonCoords} />
//                         </Layer>

class Map extends Component {
    render() {
        return (
            <>
                <ReactMapGL {...this.props.viewport} onViewportChange={
                    (viewport) => this.props.setViewPort(viewport)
                }
                    mapboxApiAccessToken={'pk.eyJ1IjoiYXR1bHBhdGlsZGJ6IiwiYSI6ImNqejU4cGFhOTAyOTYzb3VpcG1sZ3lzYWgifQ.cl1SEREE5MU7Vkh9V_qMRQ'} />

                {/* <Mapbox containerStyle={{height:"100vh", width:"100vw"}} zoom={[10]}/> */}
            </>
        )
    }
};

const mapStateToProps = (state) => {
    return { viewport: state.viewport }
};

export default connect(mapStateToProps, { setViewPort })(Map);
