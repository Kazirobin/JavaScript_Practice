// For select all
let list = document.querySelectorAll(".list");
list.forEach(function (item) {
  item.style.color = "purple";
});

// For select odd
// let listOdd = document.querySelectorAll('.list:nth-child(odd)');
// listOdd.forEach(function(item){item.style.backgroundColor = '#000';});

// For select even
let list3n = document.querySelectorAll(".list:nth-child(3n+1)");
list3n.forEach(function (item) {
  item.style.backgroundColor = "#ff0000";
});
let list4n = document.querySelectorAll(".list:nth-child(4n+2)");
list4n.forEach(function (item) {
  item.style.backgroundColor = "lightblue";
});
let list5n = document.querySelectorAll(".list:nth-child(5n+3)");
list5n.forEach(function (item) {
  item.style.backgroundColor = "orange";
});
