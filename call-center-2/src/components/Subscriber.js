import Image from "./img/images.jpg";
import { useEffect, useState } from "react";
import { CallPhoneList } from "./CallPhoneList";
import "./CssCustom/StyleCard.css";
import { BsFillTelephonePlusFill, BsFillTelephoneXFill } from "react-icons/bs";
import { insertPhonecall, getallPhonecalls } from "../Api";

// {
//   "start": "2022-02-01T00:40:30",
//   "end": "2022-02-01T01:40:30",
//   "rate": 0.2
// }

const Subscriber = ({ item, onDelete }) => {
  const [phonecalls, setPhonecalls] = useState([]);
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const handleDeleteSubscriber = () => {
    const answer = window.confirm("Confirm delete?");
    if (answer) onDelete(item.id);
  };

  const getAllPhoneCalls = async () => {
    const data = await getallPhonecalls();
    setPhonecalls(data);
    console.log(phonecalls);
  };

  const updatePhonecalls = async (id) => {
    const responseData = await insertPhonecall(id);
    if (responseData.ok) {
      const newPhoneCall = {
        start: start,
        end: end,
        rate: 0.4,
      };
      console.log(newPhoneCall);
      setPhonecalls(newPhoneCall);
    } else {
      window.alert("error");
    }
  };

  const startPhonecalls = () => {
    let startTemp = new Date();
    setStart(startTemp.toISOString());
    console.log(start);
  };
  const endPhonecalls = () => {
    let endTemp = new Date();
    setEnd(endTemp.toISOString());
    console.log(end);
  };

  // const timerCallphone = (start, end) => {
  //   const diffInMs = parseInt(Math.abs(new Date(start) - new Date(end)));
  //   console.log(diffInMs);
  //   const diffInSec = diffInMs / 1000;
  //   console.log(diffInSec);
  // };

  useEffect(() => {
    getAllPhoneCalls();
  }, []);

  return (
    <div
      className="card border border-0 shadow p-3 bg-body rounded "
      style={{ width: "18rem", height: "40rem" }}
    >
      <img src={Image} className="card-img-top circular-square" alt="Foto" />
      <div className="card-body  ">
        <h5 className="card-title">
          {item.firstname} {item.lastname}
        </h5>
        <ul className="list-group  ">
          <li className="list-group-item list-group-item-info">
            Id: {item.id}
          </li>

          <li className="list-group-item">Dob: {item.dob}</li>
          <li className="list-group-item">City: {item.cityofbirth}</li>
          <li className="list-group-item">Credito: {item.cretid}</li>
          <li className="list-group-item dropdown">
            <CallPhoneList data={item.phoneCallSet} />
          </li>
        </ul>
        <h6> Create a new call phone</h6>
        <div className="mt-3 d-flex justify-content-around">
          <button
            className="btn btn-outline-success btn-sm"
            onClick={startPhonecalls}
          >
            <BsFillTelephonePlusFill /> start
          </button>
          <button
            className="btn  btn-outline-danger btn-sm"
            onClick={endPhonecalls}
          >
            <BsFillTelephoneXFill /> end
          </button>
        </div>
        <button
          className="primary"
          onClick={() => {
            console.log(phonecalls);
            updatePhonecalls(item.id);
          }}
        >
          Add Phone Call
        </button>
        <div className="mt-3">
          <button
            className=" bg-secondary text-white "
            onClick={handleDeleteSubscriber}
          >
            Delete
            <i className="fa fa-trash ms-2" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
export { Subscriber };

// const [currentDateTime, setCurrentDateTime] = useState("");

//   const getCurrentDateTime = () => {
//     const currentDate = new Date();
//     setCurrentDateTime(currentDate.toLocaleString());
//   };

//   return (
//     <div>
//       <h1>Current Date and Time: {currentDateTime}</h1>
//       <button onClick={getCurrentDateTime}>Get Current Date and Time</button>
//     </div>
//   );
// }
