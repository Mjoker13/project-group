import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getColorsApi } from "../Api";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import { Button } from "react-bootstrap";
import { insertLayoutApi } from "../Api";

export const Admin = ({ layout, setLayout }) => {
  const [colors, setColors] = useState([]);
  const [selectedValue, setSelectedValue] = useState([]);

  const getColors = async () => {
    const response = await getColorsApi();
    setColors(response);
    console.log(response);
  };

  const saveLayout = async () => {
    console.log("Sono il Valore da memo...", { selectedValue });
    const result = await insertLayoutApi(
      selectedValue.chiave,
      selectedValue
    );
    console.log("sono il result", result);
    return result;
  };

  useEffect(() => {
    getColors();
  }, []);

  const handleColor = (e, key) => {
    const updateLayout = layout.filter((el) => {
      if (el.chiave === key) {
        el.valore = e.target.value;
        setSelectedValue(el);
      }
    });

    setLayout(layout);

    return true;
  };



  return (
    <div>
      <select
        className="form-select"
        onChange={(e) => {
          handleColor(e, "navbar");
        }}
      >
        <option selected>Open this select menu</option>{" "}
        {colors.map((el) => {
          return (
            <option key={el.id} value={el.colorName}>
              {el.colorName},
            </option>
          );
        })}
      </select>
      <Button variant="success" onClick={saveLayout}>
        Save Layout
        <BsFillArrowUpSquareFill />
      </Button>
      <Link to="/">homepage</Link>
    </div>
  );
};
