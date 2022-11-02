import React, { useRef } from "react";
import { useMemo } from "react";
import { useState } from "react";
import InputBox from "./InputBox";
import _, { countBy } from "lodash";

const User = () => {
  // const [count, setCount] = useState(0);
  // const [item, setItem] = useState(10);

  // const multiCount = useMemo(() => {
  //   console.log("muliticpount");
  //   return count * 10;
  // }, [count]);

  // const multiCounter = () => {
  //   console.log("muliticpount");
  //   return count * 10;
  // };
  // Map, filter, filter- polyfills

  // const nums = [1, 2, 3, 4, 5, 6];

  // Array.prototype.myMap = function (cb) {
  //   let temp = [];
  //   for (let i = 0; i < this.length; i++) {
  //     temp.push(cb(this[i], i.this));
  //   }
  //   return temp;
  // };
  // Array.prototype.myFilter = function (cb) {
  //   let temp = [];
  //   for (let i = 0; i < this.length; i++) {
  //     if (cb(this[i], i, this)) temp.push(this[i]);
  //   }
  //   return temp;
  // };
  // Array.prototype.myReduce = function (cb, initialValue) {
  //   var accumulator = initialValue;
  //   for (let i = 0; i < this.length; i++) {
  //     accumulator = accumulator ? cb(accumulator, this[i], i.this) : this[i];
  //   }
  //   return accumulator;
  // };
  // const num1 = nums.myReduce((acc, curr) => (acc = acc + curr));
  // console.log(num1);

  // let students = [
  //   { name: "Adesh", rollNum: 31, marks: 80 },
  //   { name: "Ajay", rollNum: 35, marks: 61 },
  //   { name: "Amit", rollNum: 40, marks: 50 },
  //   { name: "ketan", rollNum: 45, marks: 30 },
  // ];

  // const totalMarks = students
  //   .map((data) => {
  //     if (data.marks < 60) {
  //       data.marks += 20;
  //     }
  //     return data;
  //   })
  //   .filter((data) => data.marks < 80)
  //   .reduce((acc, curr) => {
  //     return (acc += curr.marks);
  //   }, 0);
  // console.log("totalMarks", totalMarks);

  // debounce
  // let counter = 0;
  // const getData = () => {
  //   console.log("Fetching Data ..." + counter++);
  // };

  // const myDebounce = (cb, d) => {
  //   let timer;
  //   return function (...args) {
  //     if (timer) clearTimeout(timer);
  //     timer = setTimeout(() => {
  //       cb(...args);
  //     }, d);
  //   };
  // };

  // const myThrottling = (cb, d) => {
  //   let last = 0;
  //   return (...args) => {
  //     let now = new Date().getTime();
  //     if (now - last < d) return;
  //     last = now;
  //     return cb(...args);
  //   };
  // };

  // const betterFun = myThrottling(getData, 1000);

  //Infinite currying
  // function sum(a) {
  //   return function (b) {
  //     if (b) return sum(a + b);
  //     return a;
  //   };
  // }

  // console.log(sum(2)(6)(7)());

  // function updateHeader(id) {
  //   return function (content) {
  //     document.querySelector("#" + id).innerHTML = content;
  //   };
  // }

  // const changeHeader = updateHeader("heading");

  // object

  // const nums = {
  //   a: 200,
  //   b: 400,
  //   c: "Hello",
  // };

  // function multiply(obj) {
  //   for (const key in obj) {
  //     if (typeof obj[key] === "number") {
  //       obj[key] *= 3;
  //     }
  //   }
  // }
  // multiply(nums);
  // console.log(nums);

  //call, apply, bind
  // var obj = { name: "Adesh" };
  // function sayHello(age, prf) {
  //   return "Hello " + this.name + " is " + age + prf;
  // }
  // console.log(sayHello.call(obj, 24, " software engineer"));
  // console.log(sayHello.apply(obj, [24, " software engineer"]));

  // const myText = sayHello.bind(obj);
  // console.log(myText(24, " Youtuber"));

  // promise

  const api = "https://fakestoreapi.com/products";
  const products = fetch(api);
  products.then((data) => {
    console.log(data.json());
  });

  return (
    <>
      {/* <h2>count : {count}</h2>
      <h2>Item : {item}</h2>
      <h2>{multiCount}</h2>
      <button onClick={() => setCount(count + 1)}>Update COunt</button>
      <button onClick={() => setItem(item * 10)}>Update Item</button> */}

      {/* <input name="data" onChange={betterFun} /> */}
      {/* <h1 id="heading">Good Morning</h1>
      <button onClick={() => changeHeader("Good Evening")}>
        change Header
      </button> */}
    </>
  );
};

export default User;
