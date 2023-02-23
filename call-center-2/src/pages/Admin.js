import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getColorsApi } from "../Api";

export const Admin = ({ layout, setLayout }) => {
  const [colors, setColors] = useState([]);

  

  const getColors = async () => {
    const response = await getColorsApi();
    setColors(response);
    console.log(response);
  };

  useEffect(() => {
    getColors();
  }, []);

  console.log("i colori che  vengono da DB:", { colors });

  const handleColor = (e, key) => {
  const updateLayout=  layout.filter((el) => {
      if (el.key === key) {
        el.value = e.target.value;
      }
    });
    console.log("Sono il  layout modificato",updateLayout)
    setLayout(layout)
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
        <option selected>Open this select menu</option>
        {colors.map((el) => {
          return (
            <option key={el.id} value={el.colorName}>
              {el.colorName}
            </option>
          );
        })}
      </select>
      <Link to="/">homepage</Link>
    </div>
  );
};
