import React from "react";
import "./logo.svg";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import BuisnessList from "../BuisnessList/BuisnessList";

const buisness = {
  imageSrc: "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
  name: "MarginOtto Pizzeria",
  address: "1010 Paddington Way",
  city: "Flavortown",
  state: "NY",
  zipCode: "10101",
  category: "Italian",
  rating: 4.5,
  reviewCount: 90,
};

const buisnesses = [buisness, buisness, buisness, buisness, buisness, buisness];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar />
        <BuisnessList buisnesses={buisnesses} />
      </div>
    );
  }
}

export default App;
