const user = [
  {
    name: "Max",
    age: 23,
    isadmin: true,
  },
  {
    name: "Alex",
    age: 44,
    isadmin: false,
  },
  {
    name: "Alex",
    age: 1551,
    isadmin: false,
  },
  {
    name: "Alex",
    age: 24,
    isadmin: false,
  },
  {
    name: "Alex",
    age: 11,
    isadmin: false,
  },
  {
    name: "Alex",
    age: 8,
    isadmin: true,
  },
  {
    name: "Alex",
    age: 444,
    isadmin: true,
  },
];

function numberusers(array) {
  result = array.sort(function (a, b) {
    return a.age - b.age;
  });

  return result;
}
console.log(numberusers(user));
