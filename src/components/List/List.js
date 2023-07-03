import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

const List = ({ places, type, setType, rating, setRating }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="text-xl font-bold">
        Food, Hotels, and Attractions around you
      </div>
      {isLoading ? (
        <div className="mt-8">
          <Loader />
        </div>
      ) : (
        <>
          <div className="flex mt-2">
            <form className="mr-2">
              <label htmlFor="type">Type</label>
              <select
                id="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="border border-gray-300 px-2 py-1 rounded"
              >
                <option value="restaurants">Restaurants</option>
                <option value="hotels">Hotels</option>
                <option value="attractions">Attractions</option>
              </select>
            </form>
            <form>
              <label htmlFor="rating">Rating</label>
              <select
                id="rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className="border border-gray-300 px-2 py-1 rounded"
              >
                <option value="">All</option>
                <option value="3">Above 3.0</option>
                <option value="4">Above 4.0</option>
                <option value="4.5">Above 4.5</option>
              </select>
            </form>
          </div>
          <div className="mt-3 h-96 overflow-y-auto">
            {places?.map((place, i) => (
              <div key={i} className="w-full">
                <PlaceDetails
                  place={place}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default List;
