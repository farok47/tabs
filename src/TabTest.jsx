import React from "react";
import TAbs from "./TAbs";

function RandomComponent() {
  return   <div>this is a random component</div>;
}

function TabTest() {
  const tabs = [
    {
      label: "tab 1",
      content: <div>this is the tab 1</div>,
    },
    {
      label: "tab2",
      content: <div>this is the tab 2</div>,
    },
    {
      label: "tab 3",
      content: <RandomComponent />,
    },
  ];
  function handlechange(currentindex) {
    console.log(currentindex);
  }
  return <TAbs tabscontent={tabs} onChange={handlechange} />;
}

export default TabTest;
