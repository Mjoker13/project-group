import Image from "./img/images.jpg";
import { CallPhoneList } from "./CallPhoneList";
import "./CssCustom/StyleCard.css";
import { BsFillTelephonePlusFill, BsFillTelephoneXFill } from "react-icons/bs";

const Subscriber = ({ item, onDelete }) => {
  const handleDeleteSubscriber = () => {
    const answer = window.confirm("Confirm delete?");
    if (answer) onDelete(item.id);
  };

  const startCallPhone = () => {
    return <>const start= Date.now console.log(start);</>;
  };

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
            onClick={startCallPhone}
          >
            <BsFillTelephonePlusFill /> start
          </button>
          <button
            className="btn  btn-outline-danger btn-sm"
            //onClick={endCallPhone}
          >
            <BsFillTelephoneXFill /> end
          </button>
        </div>
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
