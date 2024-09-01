import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

// Adjuk hozzá ezt a típusdeklarációt
declare global {
  interface Window {
    google: any;
  }
}

const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  margin-top: 2rem;
`;

interface GoogleMapProps {
  apiKey: string;
  lat: number;
  lng: number;
}

const GoogleMap: React.FC<GoogleMapProps> = ({ apiKey, lat, lng }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    script.onload = () => {
      if (mapRef.current) {
        const map = new window.google.maps.Map(mapRef.current, {
          center: { lat, lng },
          zoom: 15,
        });

        new window.google.maps.Marker({
          position: { lat, lng },
          map: map,
          title: 'Edzőterem',
        });
      }
    };

    return () => {
      document.head.removeChild(script);
    };
  }, [apiKey, lat, lng]);

  return <MapContainer ref={mapRef} />;
};

export default GoogleMap;