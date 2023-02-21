import { useState, useEffect } from "react";
import { deleteSub, searchSub } from "./Api";
import { SubscriberList } from "./components/SubscriberList";
import { SearchBar } from "./components/SearchBar";
import React, { Fragment } from "react";
import { insertSub } from "./Api";

const App = () => {
  const [data, setData] = useState([]);
   const [dateTime, setDateTime] = useState(new Date());

  const updateData = async (key) => {
    const responseData = await searchSub(key);
    setData(responseData);
  };

  const handleSeachBarSubmit = async (key) => {
    updateData(key);
  };

  const insertSubscriber = async (temp) => {
    const responseData = await insertSub(temp);
    setData(responseData);
    updateData();
  };
 const interval =()=>{
   setInterval(() => {
     setDateTime(new Date());
   }, 1000);
 }

  useEffect(() => {
    updateData();
   

    return () => clearInterval(interval);
  }, []);

  

  const deleteSubscriber = async (id) => {
    const responseData = await deleteSub(id);
    setData(responseData);
    updateData();
  };

  const handleStartCall=()=>{


  }
  return (
    <Fragment>
      <div className="container text-center bg-body-tertiary">
        <div>
          <p>{dateTime.toLocaleString()}</p>
        </div>
        <h1>Call Center</h1>
        <SearchBar
          callWhenSubmit={handleSeachBarSubmit}
          insert={insertSubscriber}
        />
        <SubscriberList data={data} onDelete={deleteSubscriber} />
      </div>
    </Fragment>
  );
};
export default App;
