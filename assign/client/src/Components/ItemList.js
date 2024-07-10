import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ItemList = () => {
  const navigate = useNavigate();
  const [items, setItems] = React.useState([]);

  useEffect(() => {
    const getList = async () => {
      try {
        const response = await axios.get("http://localhost:3001/items/getlist");
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getList();
  }, []);

  return (
    <div className="container">
      <div className="items ">
        {items.map((items, idx) => (
          <h4 key={idx}>{items}</h4>
        ))}
      </div>
      <button onClick={() => navigate("/addlist")}>add a item</button>
    </div>
  );
};

export default ItemList;
