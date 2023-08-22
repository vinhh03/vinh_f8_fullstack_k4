var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];

function flat(arr) {
  return arr.reduce(function (prev, current) {
    if (Array.isArray(current)) {
      return prev.concat(flat(current));
    }
    return prev.concat(current);
  }, []);
}

console.log(flat(arr));
