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
  });
}

function PrintDeveloperbyForEach() {
   arr.forEach(function (e) {
    if(e.profession === "developer"){
      console.log(e);
    }
   });
}

function addData() {
 arr.push({id:4,name:"susan",age:"20",profession:"intern"});
 console.log(arr);

}

function removeAdmin() {
  //Write your code here
 let removeAdmin = arr.filter((arr) => arr.profession!== "admin");
 console.log(removeAdmin);
}

let NewArray = [{id:5,name:"riya",age:"20",profession:"marketing manager"},{id:6, name:"lucy",age:"25", profession:"bank po"},{id:7, name:"indra", age:"35",profession:"pilot"}]
function concatenateArray() {
 let ans = arr.concat(NewArray);
 console.log(ans);
 
}
