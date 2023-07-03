import React from "react";
import { FaAddressCard } from "react-icons/fa";
import { AiOutlinePhone } from "react-icons/ai";
import { FaStar } from "react-icons/fa";

const PlaceDetails = ({place}) =>{

  return(
    <div className="bg-white shadow-lg rounded-lg mb-4">
    <div className="h-52">
      <img
        src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
        alt={place.name}
        className="h-full w-full object-cover rounded-t-lg"
      />
    </div>
    <div className="p-4">
      <h5 className="text-xl font-bold mb-4">{place.name}</h5>
      <div className="flex justify-between items-center my-2">
        <div className="flex items-center">
          <FaStar className="text-yellow-500 mr-1" />
          <p className="text-sm font-semibold"> {place.rating} out of {place.num_reviews} reviews </p>
        </div>
      </div>
      <div className="flex justify-between">
        <p className="text-sm font-semibold">Status</p>
        <p className="text-sm">{place.open_now_text}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-sm font-semibold">Price</p>
        <p className="text-sm">{place.price_level}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-sm font-semibold">Ranking</p>
        <p className="text-sm">{place.ranking}</p>
      </div>
      {place?.awards?.map((award) => (
        <div key={award.display_name} className="flex justify-between items-center my-1">
          <img src={award.images.small} alt={award.display_name} className="w-6 h-6" />
          <p className="text-xs text-gray-500">{award.display_name}</p>
        </div>
      ))}
      <div className="flex flex-wrap mt-2">
        {place?.cuisine?.map(({ name }) => (
          <span key={name} className="inline-block px-2 py-1 text-xs font-semibold bg-gray-200 text-gray-600 rounded-full mt-1 mr-1">
            {name}
          </span>
        ))}
      </div>
      {place.address && (
        <div className="flex justify-between mt-2">
          <FaAddressCard className="text-lg text-gray-500 mr-1" />
          <p className="text-s text-gray-500">{place.address}</p>
        </div>
      )}
      {place.phone && (
        <div className="flex justify-between mt-1">
          <AiOutlinePhone className="text-lg text-gray-500 mr-1" />
          <p className="text-s text-gray-500">{place.phone}</p>
        </div>
      )}
    </div>
    <div className="p-4 flex justify-between">
      <button
        className="px-3 py-2 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
        onClick={() => window.open(place.web_url, '_blank')}
      >
        Trip Advisor
      </button>
      <button
        className="px-3 py-2 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
        onClick={() => window.open(place.website, '_blank')}
      >
        Website
      </button>
    </div>
  </div>
);
};

export default PlaceDetails;