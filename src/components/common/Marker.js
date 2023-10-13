import L from "leaflet";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import marker from "../../assets/icons/mapIcon.png";
import { useEffect } from "react";

function LocationMarker(props) {
  const map = useMapEvents({
    click(e) {
      props?.setFormData((state) => ({ ...state, latitude: e?.latlng?.lat }));
      props?.setFormData((state) => ({ ...state, longitude: e?.latlng?.lng }));
      props?.setPosition({ lat: e?.latlng?.lat, lng: e?.latlng?.lng });
      map.locate();
    },
    locationfound(e) {
      // setPosition(e.latlng)
      map.flyTo(props?.position, map.getZoom())
    },
  });

  useEffect(() => {
    map.setView(props?.position,16);
  }, [props?.position])

  const iconPerson = new L.Icon({
    iconUrl: marker,
    iconSize: [64, 64],
    iconAnchor: [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor: [-3, -76],
  });


  return props?.position === null ? null : (
    <Marker position={props?.position} icon={iconPerson}>
      {console.log('checkthis', props?.position)}
      <Popup>You are here</Popup>
    </Marker>
  );
}

export default LocationMarker;
