import React from "react";
//import State from "./components/State";
import CONDTIONAL_RENDERING from "./components/ConditonalRendering/CONDTIONAL_RENDERING";
import EventClass from "./components/EventHandlerClass/EventClass";
import EventBinding from "./components/EVENT_BINDING/EventBinding";
import Use_State from "./components/HOOKS/USE_STATE/Use_State";
import Form from "./components/FORM/Form";
import Form2 from "./components/FORM/Form2";
import Child from "./components/STATE_LIFTING/Child";
import Home from "./components/STATE_LIFTING/Home";
import UseEffect from "./components/HOOKS/USE_EFFECT/UseEffect";
import DataFetch from "./components/HOOKS/USE_EFFECT/DataFetch";
import CustomHooks from "./components/HOOKS/CUSTOM_HOOKS/CustomHooks";
import ClickCounter from "./components/HOC/ClickCounter";
import HoverCounter from "./components/HOC/HoverCounter";
import ClickCounterTwo from "./components/RENDER_PROPS/ClickCounterTwo";
import HoverCounterTwo from "./components/RENDER_PROPS/HoverCounterTwo";
import Render_Props from "./components/RENDER_PROPS/Render_Props";
import Counter from "./components/RENDER_PROPS/Counter";
import ComponentC from "./components/Context/ComponentC";
import ContextHook from "./components/HOOKS/Use_Context_Hooks/ContextHook";
import HomeNew from "./projectTodo/HomeNew";
import UseReducer from "./components/HOOKS/UseReducer_Hook/UseReducer";
import Practice from "./practice/Practice";
export default function App2() {
  /*let data = "I am from Parent component";
  const handleChildData = (childData) => {
    console.log(childData);
  };*/
  return (
    <div>
      {/* <State /> */}
      {/* <CONDTIONAL_RENDERING /> */}
      {/* <EventClass /> */}
      {/* <EventBinding /> */}
      {/* <Use_State /> */}
      {/* <Form /> */}
      {/* <Form2 /> */}
      {/* <Child data2={data} onChildData={handleChildData} /> */}
      {/* <Home /> */}
      {/* <UseEffect /> */}
      {/*<DataFetch />*/}
      {/*<CustomHooks />*/}
      {/* <ClickCounter name="Hossain" /> */}
      {/* <HoverCounter name="Shifat" /> */}
      {/*<ClickCounterTwo />
      <HoverCounterTwo />
      <Render_Props
        render={(isLoggedIn) => (isLoggedIn ? "Shifat" : "Guest")}
  />*/}
      {/* <Counter
        render={(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      /> */}
      {/* <Counter>
        {(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </Counter> */}
      {/* <Counter>
        {(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </Counter> */}
      {/* <ComponentC /> */}
      {/* <ContextHook /> */}
      <HomeNew />
      {/*<UseReducer />*/}
      {/* <Practice /> */}
    </div>
  );
}
