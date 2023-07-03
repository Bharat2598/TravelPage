import React from "react";
import GoogleMapReact from "google-map-react";
import { MdLocationOn } from "react-icons/md";

import mapStyles from "./mapStyles";

const Map = ({ setCoordinates, setBounds, coordinates, places}) => {
  const headerHeight = 150; 
  const isWideScreen = window.innerWidth >= 600;

  const windowHeight = window.innerHeight;
  const containerHeight = windowHeight - headerHeight;

  return (
    <div className="container mx-auto mt-4" style={{ height: containerHeight }}>
      <div className="h-full w-full">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={14}
          margin={[50, 50, 50, 50]}
          options={{  disableDefaultUI: true,
            zoomControl: true,
            styles: mapStyles,}}
          onChange={(e) => {
            setCoordinates({ lat: e.center.lat, lng: e.center.lng });
            setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
          }}
        >
          {places?.map((place,i)=>(
            <div
              className="container mx-auto mt-4"
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              key={i}
            >
              {
                !isWideScreen? (
                  <MdLocationOn className="text-primary text-2xl" />
                ) : (
                  <div className="p-1 w-20 h-20 bg-white border-4 border-black rounded-lg flex flex-col items-center">
                  <p className="text-subtitle2">{place.name}</p>
                  <div className="w-full flex justify-center cursor:pointer">
                      <img
                        className="w-10 h-10 object-cover"
                        src={
                          place.photo && place.photo.images.small
                            ? place.photo.images.large.url
                            : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                        }
                        alt={place.name}
                        />
                  </div>
                  </div>
                  
                )
              }
            </div>
          ))}
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;
