import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => (
    <div style={{
        color: 'white',
        background: 'grey',
        padding: '15px 10px',
        display: 'inline-flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '100%',
        transform: 'translate(-50%, -50%)'
    }}>
        {text}
    </div>
);

class SimpleMap extends React.Component {
    static defaultProps = {
        center: {
            lat: 53.9323123,
            lng: 27.50
        },
        zoom: 16
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100%', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyC9NWvMq1wKHF9SD_XkCvszNMmCMygVMVk' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={53.9323123}
                        lng={27.50}
                        text="Место игры"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;