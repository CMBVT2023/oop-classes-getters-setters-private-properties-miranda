const rectObj = {
    name: 'Rectangle 1',
    width: 10,
    height: 10,
};

Object.seal(rectObj)

let descriptors = Object.getOwnPropertyDescriptors(rectObj);

// console.log(rectObj)

const circleObj = {
    name: 'circle 1',
    radius: 30
};

Object.freeze(circleObj);

descriptors = Object.getOwnPropertyDescriptors(circleObj);

console.log(circleObj)

console.log('rectObj is sealed?', Object.isSealed(rectObj))
console.log('circleObj is sealed?', Object.isSealed(circleObj))