import React from 'react'
import { useState, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const Map = () => {
    const [latitude, setLatitude] = useState(-1.458558);
    const [longitude, setLongitude] = useState(-48.486620);

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDrczC83Gc2EuOJDyCF8nwVwzajUHWt0dc"
    })

    useEffect(() => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            position => {
              setLatitude(position.coords.latitude);
              setLongitude(position.coords.longitude);
            },
            error => {
              console.error('Error getting geolocation:', error);
            }
          );
        } else {
          console.error('Geolocation is not supported by this browser.');
        }
      }, [latitude, longitude])

    const position = {
        lat: latitude,
        lng: longitude
    }

    return (
        <div className='w-screen h-screen overflow-hidden'>
            {
                isLoaded ? (
                    <GoogleMap
                        mapContainerStyle={{ width: '100%', height: '100%' }}
                        center={position}
                        zoom={18}
                    >
                        { /* Child components, such as markers, info windows, etc. */}
                        <>
                        <Marker position={position} options={{
                            label: {
                                text: 'Você está aqui!',
                                className: 'bg-white p-2 border-2 border-black rounded-md mb-16'
                            }
                        }} />
                        </>
                    </GoogleMap>
                ) : <></>
            }
        </div>
    )
}

export default Map