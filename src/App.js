import React, {useEffect, useState} from "react";

import { getPlacesData } from "./api";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

const App = () => {
  const [places, setPlaces] = useState([]);
  const [rating, setRating] = useState("");
  const [type, setType] = useState("restaurants");
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});

  useEffect(() => {
    if (places && places.length > 0) {
      const filteredPlaces = places.filter(
        (place) => Number(place.rating) >= rating
      );
      setFilteredPlaces(filteredPlaces);
    }
  }, [rating, places]);
  
  


  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(({coords:{latitude, longitude}})=>{
      setCoordinates({lat:latitude, lng:longitude});
    })
  },[]);

  useEffect(()=>{
    if(bounds){
    console.log(coordinates, bounds);

    getPlacesData(type, bounds.sw, bounds.ne)
      .then((data)=>{
        setFilteredPlaces([])
        console.log(data);
        setPlaces(data?.filter((place)=>place.name&&place.num_reviews >0));
      })
    }
  }, [type, coordinates, bounds]);

  return (
    <>
      <div className="min-h-screen bg-gray-100">
      <Header setCoordinates={setCoordinates} />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-8">
            <div className="md:col-span-4">
              <List places={filteredPlaces.length? filteredPlaces : places}
                type={type}
                rating={rating}
                setType={setType}
                setRating={setRating}
              />
            </div>
            <div className="md:col-span-8">
              <Map
              setCoordinates={setCoordinates}
              setBounds={setBounds}
              coordinates= {coordinates}
              places={filteredPlaces.length? filteredPlaces : places}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
  
};

export default App;
