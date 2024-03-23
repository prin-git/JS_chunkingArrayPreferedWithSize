function chunkArray(arr, size) {
  let parentArr = [];
  for (let i = 0; i < arr.length; i++) {
    let child = parentArr[parentArr.length - 1];
    if (!child || child.length === size) {
      parentArr.push([arr[i]]);
    } else {
      child.push(arr[i]);
    }
  }

  return parentArr;
}

let a = chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5);

const ran = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};
console.log(ran(2, 15));
