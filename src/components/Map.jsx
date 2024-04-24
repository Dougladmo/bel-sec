import React from 'react'
import Navbar from './Navbar';
import DangerImg from '../assets/RiskrArea.png'
import SafeImg from '../assets/SafeArea.png'
import MobileNav from './MobileNav';
import { useState, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const Map = () => {
  const [showDangerAreas, setShowDangerAreas] = useState(false)
  const [showSafeAreas, setShowSafeAreas] = useState(false)
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

  const userPosition = {
    lat: latitude,
    lng: longitude
  }

  const handleRisk = () => showDangerAreas ? setShowDangerAreas(false) : setShowDangerAreas(true)

  const handleAlert = () => console.log('alert')

  const handleSafe = () => showSafeAreas ? setShowSafeAreas(false) : setShowSafeAreas(true)

  const bairrosPerigosos = [
    { lat: -1.461833, lng: -48.476133 }, // Cremação
    { lat: -1.47085957841085, lng: -48.49369982467699 }, // Jurunas
    { lat: -1.4568755251092296, lng: -48.4493195088943 }, // Terra Firme
    { lat: -1.4641687633155573, lng: -48.46313824983713 }, // Guamá
    { lat: -1.425301325333717, lng: -48.48727578742115 }, // Telegrafo
    { lat: -1.4129909289274738, lng: -48.47486781278342 }, // Sacramenta
    { lat: -1.4080352949511352, lng: -48.43104259900274 }, // Castanheira
    { lat: -1.4006562769109736, lng: -48.450994974162725 }, // Marambaia
    { lat: -1.4514154961587022, lng: -48.47019666938953 }, // São bras
    { lat: -1.4137556808121712, lng: -48.48438217890174 }, // Barreiro
    { lat: -1.4721859682819338, lng: -48.47771394184128 }, // Condor
    { lat: -1.3421488162859372, lng: -48.46732842874412 }, // Tapaná
    { lat: -1.3569075995106787, lng: -48.404157041577264 }, // Cidade Nova
  ]

  const bairrosSeguros = [
    { lat: -1.4522936123402284, lng: -48.48368168742784 }, // Nazaré
    { lat: -1.4395679247097912, lng: -48.48443988209182 }, // Umarizal
    { lat: -1.4371166943936164, lng: -48.45822698209235 }, // Marco
    { lat: -1.4516949284243357, lng: -48.498813063035165 }, // Campina
    { lat: -1.425883376730245, lng: -48.47079334190852 }, // Pedreira
    { lat: -1.4153003932170682, lng: -48.4509063900267 }, // Souza
  ]

  return (
    <div className='w-screen h-full overflow-hidden md:h-full'>
      {
        isLoaded ? (
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%' }}
            center={userPosition}
            zoom={16}
            options={{
              zoomControl: false
            }}
          >
            <>
              <Marker position={userPosition} options={{
                label: {
                  text: 'Você está aqui!',
                  className: 'bg-white p-2 border-2 border-black rounded-md mb-16'
                }
              }}
              />
              {showDangerAreas && bairrosPerigosos.map((bairro, index) => {
                return <Marker
                  key={index}
                  position={bairro}
                  icon={{
                    url: DangerImg,
                    size: new window.google.maps.Size(100, 100),
                    scaledSize: new window.google.maps.Size(100, 100)
                  }}
                />
              })}
              {showSafeAreas && bairrosSeguros.map((bairro, index) => {
                return <Marker
                  key={index}
                  position={bairro}
                  icon={{
                    url: SafeImg,
                    size: new window.google.maps.Size(100, 100),
                    scaledSize: new window.google.maps.Size(100, 100)
                  }} />
              })}
            </>
            <Navbar handleOnClickAlert={handleAlert} handleOnClickSafe={handleSafe} handleOnClickRisk={handleRisk} />
            <MobileNav handleOnClickAlert={handleAlert} handleOnClickSafe={handleSafe} handleOnClickRisk={handleRisk} />
          </GoogleMap>
        ) : <></>
      }
    </div>
  )
}

export default Map