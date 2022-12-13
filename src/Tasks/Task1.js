import React, { useState } from "react";
export const Task1 = () => {
  const [position, setPosition] = useState("");
  const [type, setType] = useState("");
  const [available, setAvailable] = useState("");
  const [Employee, setEmployee] = useState({});
  const [empKey, setempKey] = useState("");
  const [EmpVal, setEmpVal] = useState("");
  // taking array for placing keys object and value object
  const [MainArr, setMAinArr] = useState([]);
  const PositionHandler = (e) => {
    setPosition(e.target.value);
  };
  const TypeHandler = (e) => {
    setType(e.target.value);
  };
  const AvailableHandler = (e) => {
    setAvailable(e.target.value);
  };
  var emp = {
    position: position,
    type: type,
    available: available,
  };

  //   food item object

  var FoodItem = {
    snacks: "sandwitch",
    breackFast: "bread Butter",
  };
  //   here i am merging object
  var mergeObj = Object.assign(FoodItem, emp);
  const ShowHandler = () => {
    if(position==="" ||type==="" || available===""){
      alert("please fill all the box")
    }
    else{
      setEmployee(Object.create(emp));
      setempKey(Object.keys(emp));
      setEmpVal(Object.values(emp));
      // making one array of key and value
      const KeyVal = Object.entries(emp);
      setMAinArr(KeyVal);
      // Here I AM prevent the objevct from updation...
      Object.freeze(Employee);
    }
    
  };

  return (
    <div>
      <h2>Create an object</h2>
      <div>
        <select name="" id="" onChange={PositionHandler}>
          <option value="">Position</option>
          <option value="Cashier">Cashier</option>
          <option value="Manager">Manager</option>
        </select>
      </div>
      <div>
        <select name="" id="" onChange={TypeHandler}>
          <option value="">Type</option>
          <option value="hourly">hourly</option>
          <option value="Monthly">Monthly</option>
          <option value="Daily">Daily</option>
        </select>
      </div>
      <div>
        <select name="" id="" onChange={AvailableHandler}>
          <option value="">Available</option>
          <option value="true">true</option>
          <option value="false">false</option>
        </select>
      </div>
      <button onClick={ShowHandler}>Show</button>
      <div>
        <hr />
        <h2>Values</h2>
        <p>{Employee.position}</p>
        <p>{Employee.type}</p>
        <p>{Employee.available}</p>
        <hr />
        <h2>Key</h2>
        <p>{empKey.toLocaleString()} </p>
        <hr />
        <h2>Keys of Merge Object</h2>
        {Object.keys(mergeObj).toLocaleString()}
        <hr />
        <h2>Nested Array</h2>
        <h3>Value and keys</h3>
        {MainArr.map((item) => item.map((val) => <p  key={Math.random()}>{val}</p>))}
      </div>
    </div>
  );
};
