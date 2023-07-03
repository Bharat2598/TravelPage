import React, { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SiYourtraveldottv } from "react-icons/si";
import { Autocomplete } from "@react-google-maps/api";

const Header = ({ setCoordinates }) => {
  const [autocomplete, setAutoComplete] = useState(null);

  const onLoad = (autoC) => setAutoComplete(autoC);

  const onPlaceChanged = () => {
      const lat = autocomplete.getPlace().geometry.location.lat();
      const lng = autocomplete.getPlace().geometry.location.lng();
      setCoordinates({ lat, lng });
    };

  return (
    <header className="bg-blue-800 py-5">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <SiYourtraveldottv className="text-white text-4xl mr-4" />
          <h1 className="text-white text-2xl font-bold">Travel Advisor</h1>
        </div>
        <div className="flex items-center">
          <h2 className="text-white text-lg mr-4">Explore New Places</h2>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <HiOutlineSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="py-2 pl-10 pr-4 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-white-500 focus:ring-offset-2"
              />
            </div>
          </Autocomplete>
        </div>
      </div>
    </header>
  );
};

export default Header;
