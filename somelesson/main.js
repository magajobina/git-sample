const obj = {
  a: {
    b: {
      c: {
        e: 1
      }
    },
    u: 2,
    l: 3,
  },
  j: 4,
  o: 5
}

console.log(flatten(obj)) // {e: 1, u: 2, l: 3, j: 4, o: 5}