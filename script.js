/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  //Write your code here
  arr.map(function (e) {
    if(e.profession === "developer"){
      console.log(e);
    }
  
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here
}

function addData() {
  //Write your code here
}

function removeAdmin() {
  //Write your code here
}

function concatenateArray() {
  //Write your code here
}
