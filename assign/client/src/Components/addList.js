import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddList = () => {
  const [item, setItem] = useState("");

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    if (item) {
      try {
        const response = await axios.post(
          "http://localhost:3001/items/addlist",
          {
            item,
          }
        );

        alert(response.data.message);

        console.log(response.data);
      } catch (error) {
        console.log("error while sending data");
      }
    } else {
      alert("Please add an item");
    }
  };
  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <h1>Add a new list</h1>
        <div className="form-control">
          <div className="item-form">
            <label htmlFor="listName">Item name:</label>
            <input
              type="text"
              id="listName"
              name="listName"
              value={item}
              onChange={(e) => setItem(e.target.value)}
              required
            />
          </div>
        </div>

        <button type="submit">Add</button>
      </form>

      <button onClick={() => navigate("/")}> See the list of items</button>
    </div>
  );
};

export default AddList;
