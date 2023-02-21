import { useState, useEffect } from "react";
import { deleteSub, searchSub, insertSub } from "../Api";
import { SubscriberList } from "../components/SubscriberList";
import SearchBar from "../components/SearchBar";
import React, { Fragment } from "react";

const HomePage = () => {
  const [data, setData] = useState([]);

  const updateData = async (key) => {
    const responseData = await searchSub(key);
    console.log(responseData);
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

  useEffect(() => {
    updateData();
  }, []);

  const deleteSubscriber = async (id) => {
    const responseData = await deleteSub(id);
    setData(responseData);
    updateData();
  };
  return (
    <Fragment>
      <div className="container text-center bg-body-tertiary">
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

export default HomePage;
