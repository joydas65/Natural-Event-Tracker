import React from "react";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/fire-alert";
import stormIcon from "@iconify/icons-mdi/weather-lightning-rainy";
import pineTreeFire from "@iconify/icons-mdi/pine-tree-fire";

const LocationMarker = ({ eventId, lat, lng, onClick }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      {eventId === 8 ? (
        <Icon icon={locationIcon} className="location-icon" />
      ) : eventId === 10 ? (
        <Icon icon={stormIcon} className="storm-icon" />
      ) : (
        <Icon icon={pineTreeFire} className="volcano-icon" />
      )}
    </div>
  );
};

export default LocationMarker;
