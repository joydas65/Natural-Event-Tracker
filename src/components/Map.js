import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);

  //let stormMarkers = "";

  const markers = eventData.map((ev, index) => {
    if (ev.categories[0].id === 8 || ev.categories[0].id === 12) {
      return !isNaN(ev.geometries[0].coordinates[1]) &&
        !isNaN(ev.geometries[0].coordinates[0]) ? (
        <LocationMarker
          key={index}
          eventId={ev.categories[0].id}
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
        />
      ) : null;
    } else if (ev.categories[0].id === 10) {
      return ev.geometries.map((item, ind) => {
        return (
          <LocationMarker
            key={ind}
            eventId={10}
            lat={item.coordinates[1]}
            lng={item.coordinates[0]}
            onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
          />
        );
      });
    }
    return null;
  });

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 6,
};

export default Map;
