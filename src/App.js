import React from "react";
import Card from "./components/Card";
import "./css/index.css";
import Data from "./data.json";
import Card2 from "./components/Card2";

export default function App() {
  //let items = [];
  /*for (let x = 0; x < Data.length; x++) {
    items.push(<Card titleText={Data[x].title} descText={Data[x].desc} />);
  }*/
  /*items = Data.map((item) => (
    <Card titleText={item.title} descText={item.desc} />
  ));*/
  return (
    <div>
      <h1 className="headingStyle">Todo App</h1>
      {
        /*items*/
        Data.map((item, index) => (
          <Card key={index} titleText={item.title} descText={item.desc} />
        ))
      }
      <Card2 name="Shifat" desc="Good boy" />
      <Card2 name="Urmi" desc="Fazil" />
    </div>
  );
}
