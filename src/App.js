import React from 'react';
import styled from 'styled-components';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const mapStyles = {
  width: '100%',
  height: '100%',
};

const defaultCenter = {
  lat: 37.7749, // Update with your desired latitude
  lng: -122.4194, // Update with your desired longitude
};

function App() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyDncsXuVJGBuVoS-L9vyMtGa5PTRaYNGJ8">
      <MapContainer>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={10}
          center={defaultCenter}
        >
          <Marker position={defaultCenter} />
        </GoogleMap>
      </MapContainer>
    </LoadScript>
  );
}

export default App;