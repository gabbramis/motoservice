"use client";

import { GoogleMap, useJsApiLoader, Polygon } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};
const coverageArea = [
  { lat: -34.847597, lng: -55.936696 }, // Peaje El Pinar
  { lat: -34.79, lng: -56.35056 }, // Santiago Vázquez
  { lat: -34.7554, lng: -56.2205 }, // Puente Colón
  { lat: -34.7616, lng: -56.2233 }, // La Paz
  { lat: -34.716, lng: -55.9583 }, // Pando
  { lat: -34.919864, lng: -56.160107 }, // Centro de Montevideo (ejemplo)
  { lat: -34.945897, lng: -56.208428 }, // Costa de Montevideo
  { lat: -34.908056, lng: -56.173889 }, // Ubicación de tu negocio
  { lat: -34.847597, lng: -55.936696 }, // Peaje El Pinar (se repite para cerrar)
];

const motoserviceLocation = {
  lat: -34.904791,
  lng: -56.177209,
};

const options = {
  fillColor: "lightblue",
  fillOpacity: 0.5,
  strokeColor: "blue",
  strokeOpacity: 0.8,
  strokeWeight: 2,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
};
export function CoberturaMap() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

  if (!apiKey) {
    return <div>Error: No se encontró la clave de la API de Google Maps.</div>;
  }

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: apiKey,
    libraries: ["places"],
  });

  if (loadError) {
    return <div>Error cargando el mapa.</div>;
  }

  if (!isLoaded) {
    return <div>Cargando...</div>;
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={motoserviceLocation}
      zoom={11}
    >
      <Marker position={motoserviceLocation} />
      <Polygon paths={coverageArea} options={options} />
    </GoogleMap>
  );
}
