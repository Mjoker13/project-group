import { useState, useEffect } from "react";
import { deleteSub, searchSub, insertSub } from "../Api";
import { SubscriberList } from "../components/SubscriberList";
import SearchBar from "../components/SearchBar";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const HomePage = ({layout}) => {
  const [data, setData] = useState([]);
  const [color, setColor] = useState([]);

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
    console.log("helloo",layout)
    updateData();
  }, []);

  const deleteSubscriber = async (id) => {
    const responseData = await deleteSub(id);
    setData(responseData);
    updateData();
  };
  const getColorNavbar = () => {
    const elNavbar = layout.filter((el) => {
      return  el.chiave === "navbar"
    });
   
   
    return elNavbar[0].valore;
  };
  return (
    <Fragment>
      <div className="container text-center bg-body-tertiary">
        <h1>Call Center</h1>
        <SearchBar
          callWhenSubmit={handleSeachBarSubmit}
          insert={insertSubscriber}
          layout={getColorNavbar()}
        />
        <SubscriberList data={data} onDelete={deleteSubscriber} />
      </div>
      <Link to="admin">Admin</Link>
    </Fragment>
  );
};

export default HomePage;
