import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import ReactMapGL from "react-map-gl";
// import MapGLDraw, { EditorModes } from '@urbica/react-map-gl-draw';

// import ReactMapboxGl, { Layer, Feature, Popup } from 'react-mapbox-gl';

import * as pincodeJson from '../resources/pincode.json';
import * as localityJson from '../resources/locality.json';

import { connect } from "react-redux";
import { setViewPort, setSelectedArea } from "../actions";
import Popup from './Popup';

class Map extends Component {

    addPopupToMap(map, e) {
        const placeholder = document.createElement('div');
        ReactDOM.render(<Popup tableInfo={e.features[0].properties}/>, placeholder);
        new window.mapboxgl.Popup()
            .setDOMContent(placeholder)
            .setLngLat(e.lngLat)
            .setMaxWidth("300px")
            .addTo(map);
    }

    mapLoad(geoJson) {
        const map = new window.mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [77.52387740523227, 12.984278407920385],
            zoom: 10.5
        });

        map.on('load', () => {
            map.addLayer({
                'id': 'states-layer',
                'type': 'fill',
                'source': {
                    'type': 'geojson',
                    'data': geoJson
                },
                'paint': {
                    'fill-color': 'rgba(200, 100, 240, 0.4)',
                    'fill-outline-color': 'rgba(200, 100, 240, 1)'
                }
            });

            map.on('click', 'states-layer', (e) => {
                this.addPopupToMap(map, e);
                this.props.setSelectedArea(e.features[0].properties);
            });

            map.on('mouseenter', 'states-layer', function () {
                map.getCanvas().style.cursor = 'pointer';
            });

            map.on('mouseleave', 'states-layer', function () {
                map.getCanvas().style.cursor = '';
            });
        })
    }

    componentDidMount() {
        this.localityGeojson = this.jsonToGeojson(localityJson.default);
        this.pincodeGeoJson = this.jsonToGeojson(pincodeJson.default);
        window.mapboxgl.accessToken = 'pk.eyJ1IjoiYXR1bHBhdGlsZGJ6IiwiYSI6ImNqejU4cGFhOTAyOTYzb3VpcG1sZ3lzYWgifQ.cl1SEREE5MU7Vkh9V_qMRQ';

        this.mapLoad((this.props.mode === 'locality') ? this.localityGeojson : this.pincodeGeoJson);
    }

    componentDidUpdate() {
        this.mapLoad((this.props.mode === 'locality') ? this.localityGeojson : this.pincodeGeoJson);
    }

    //for converting given json to geojson which is supported by mapbox
    jsonToGeojson(jsonObj) {
        let geoJson = { ...jsonObj };
        geoJson['type'] = 'FeatureCollection';
        geoJson.features = jsonObj.features.map(feature => {
            feature['type'] = 'Feature';
            feature['properties'] = feature.attributes;
            delete feature.attributes;
            feature.geometry['type'] = 'Polygon';
            feature.geometry['coordinates'] = feature.geometry.rings;
            delete feature.geometry.rings;
            return feature;
        });
        return geoJson;
    }

    render() {
        return (
            <div id='map'>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        viewport: state.viewport,
        mode: state.mode
    }
};

export default connect(mapStateToProps, { setViewPort, setSelectedArea })(Map);
