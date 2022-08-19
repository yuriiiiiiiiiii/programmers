function solution(operations) {
  let maxHeap = [];
  let minHeap = [];

  const insertNumMax = (num) => {
    maxHeap.push(num);
    let current = maxHeap.length - 1;
    let parent = Math.floor(current / 2);
    while (Number(maxHeap[current]) > Number(maxHeap[parent])) {
      let temp = maxHeap[parent];
      maxHeap[parent] = maxHeap[current];
      maxHeap[current] = temp;
      current = parent;
      parent = Math.floor(current / 2);
    }
  };

  const insertNumMin = (num) => {
    minHeap.push(num);
    let current = minHeap.length - 1;
    let parent = Math.floor(current / 2);
    while (Number(minHeap[current]) < Number(minHeap[parent])) {
      let temp = minHeap[parent];
      minHeap[parent] = minHeap[current];
      minHeap[current] = temp;
      current = parent;
      parent = Math.floor(current / 2);
    }
  };

  const deleteMax = () => {
    let max = maxHeap.shift();
    minHeap = minHeap.filter((e) => e !== max);
  };

  const deleteMin = () => {
    let min = minHeap.shift();
    maxHeap = maxHeap.filter((e) => e !== min);
  };

  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === "D 1") deleteMax();
    else if (operations[i] === "D -1") deleteMin();
    else {
      insertNumMax(operations[i].split(" ")[1]);
      insertNumMin(operations[i].split(" ")[1]);
    }
  }
  console.log(maxHeap);
  console.log(minHeap);

  if (maxHeap.length === 0) return [0, 0];
  else return [Number(maxHeap[0]), Number(minHeap[0])];
}
