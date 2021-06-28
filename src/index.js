import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>SPRINT 5. Storage(local/session), Web workers, Service workers, Web socket</h1>
<div>
Quiz. WebStorage 
Practical tasks. WebStorageQuiz
Quiz. WebWorkers
Quiz. ServiceWorker
Quiz. WebSocket.
</div>
`;

console.log("=======================    Question 1   =======================");

// localStorage.setItem("login", "Tom12!");
// localStorage.setItem("token", "QhuR56Rw");
// console.log(localStorage.getItem("login")); //Tom12!
// console.log(localStorage.getItem("token")); //QhuR56Rw

// const object = { name: "Tom", age: 25 };
// localStorage.setItem("user", JSON.stringify(object)); //object to string
// console.log(localStorage.getItem("user")); //string {"name":"Tom","age":25}

// const data2 = JSON.parse(localStorage.getItem("user")); //string to object
// console.log(data2); //object {"name":"Tom","age":25}

// localStorage.removeItem("name");
// console.log(localStorage.getItem("name"));

// localStorage.clear();

console.log("=======================    Question 2   =======================");

// const w = new Worker("worker.js");
// w.addEventListener("message", (e) => {
//   console.log("Main <- Worker:", e.data);
// });
// w.postMessage("Hello Worker!");
// setTimeout(() => w.postMessage(console.log("Hello World!")), 1000);
// console.log(setTimeout(() => w.postMessage(console.log("stop")), 2000)); 

console.log("=======================    Question 3   =======================");
//
console.log("hello world");