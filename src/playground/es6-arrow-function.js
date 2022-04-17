const square = function (x){
    return x * x;
};

console.log(square(5))



// const squareArrow = (x) => {
//   return x = x ;  
// };
const squareArrow = (x) => x*x;
console.log(squareArrow(5))

const username = 'noah tseng';

const getName = (x) => x.split(' ')[0]

console.log(getName(username))
//挑戰 使用箭頭函式
//getFirstName('noah tseng') -> noah
//創建一般箭頭函式
