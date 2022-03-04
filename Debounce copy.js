import React, { useState, useEffect, useCallback } from "react";
import debounce from "lodash.debounce";
const Debounce = () => {
  //   useEffect(() => {
  //     console.log("asdf");
  //   });
  const debouncedFun = useCallback(
    debounce((event) => setDbValue(event.target.value), 300),
    []
  );
  const [value, setValue] = useState("");
  const [dbValue, setDbValue] = useState("");
  const changeHandler = (event) => {
    setValue(event.target.value);
    debouncedFun(event);
  };
  return (
    <div>
      <input onChange={changeHandler} value={value}></input>
      <div>
        <h3>Value is </h3> <div>{value}</div>
      </div>
      <div>
        <h3>DB Value</h3>
        <div>{dbValue}</div>
      </div>
    </div>
  );
};

export default Debounce;
