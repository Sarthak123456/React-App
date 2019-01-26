import React from "react";
// import namor from "namor";
import "./index.css";

const range = len => {
  const arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(i);
  }
  return arr;
};

const newData = () => {
//   const statusChance = Math.random();
  return {
    deviceId: '',
    temperature:'',
    Last_Connected_Time:'',
    Sim_No:'',
    IMEI:'',
    battery:'',

  };
};

export function makeData(len = 10) {
  return range(len).map(d => {
    return {
      ...newData(),
    //   children: range(1).map(newData)
    };
  });
}

export const Logo = () =>
  <div style={{ margin: '1rem auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
    
  </div>;

export const Tips = () =>
  <div style={{ textAlign: "center" }}>
    <em></em>
  </div>;
