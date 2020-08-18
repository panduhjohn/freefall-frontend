import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Marker,
    InfoWindow,
} from 'react-google-maps';

import dropzoneData from '../data/dropzoneData';
import mapStyles from '../data/mapStyles';

import './DropzoneMap.css';

const Maps = () => {
    const [selectedDZ, setSelectedDZ] = useState(null);

    return (
        <GoogleMap
            defaultZoom={5.2}
            defaultCenter={{ lat: 39.8283, lng: -98.5795 }}
            defaultOptions={{ styles: mapStyles }}
        >
            {dropzoneData.map((item) => (
                <Marker
                    key={item.phone}
                    position={{
                        lat: item.coords.lat,
                        lng: item.coords.lng,
                    }}
                    onClick={() => {
                        setSelectedDZ(item);
                    }}
                    icon={{
                        url: '/images/marker.png',
                        // url: '/images/parachute.svg',
                        scaledSize: new window.google.maps.Size(25, 25),
                    }}
                />
            ))}

            {selectedDZ && (
                <InfoWindow
                    position={{
                        lat: selectedDZ.coords.lat,
                        lng: selectedDZ.coords.lng,
                    }}
                    onCloseClick={() => {
                        setSelectedDZ(null);
                    }}
                >
                    <div>
                        <h2>{selectedDZ.name}</h2>
                        <p>Email: {selectedDZ.email}</p>
                        <a href={selectedDZ.url}>{selectedDZ.name} Website</a>
                    </div>
                </InfoWindow>
            )}
        </GoogleMap>
    );
};

const WrappedMap = withScriptjs(withGoogleMap(Maps));

export class DropzoneMap extends Component {
    render() {
        return (
            <>
                {/* <h1>Dropzone in the United States</h1> */}

                {/* <div style={{ mapStyle }}> */}
                <div className='mapContainer'>
                    <WrappedMap
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_API_KEY}`}
                        loadingElement={<div style={{ height: '800px' }} />}
                        containerElement={<div style={{ height: '600px' }} />}
                        mapElement={<div style={{ height: '900px' }} />}
                    />
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DropzoneMap);
