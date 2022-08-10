function solution(bridge_length, weight, truck_weights) {
  let before = truck_weights.slice(1, truck_weights.length);
  let middle = [truck_weights[0]];
  let after = [];
  let time = 1;

  let middleWeights = truck_weights[0];
  while (after.length !== truck_weights.length && middle.length !== 0) {
    if (middle.length === bridge_length) {
      if (middle[0] !== 0) {
        middleWeights -= middle[0];
        after.push(middle.shift());
      } else middle.shift();
    }

    if (middleWeights + before[0] <= weight) {
      middleWeights += before[0];
      middle.push(before.shift());
    } else {
      middle.push(0);
    }

    time++;
  }

  return time;
}
