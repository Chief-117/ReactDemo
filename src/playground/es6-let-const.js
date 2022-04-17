var nameVar = 'noah';
var nameVar = 'noah2';
console.log('nameVar',nameVar)

let nameLet = 'Jen';
nameLet = 'Bob';
console.log('nameLet',nameLet);

const nameConst = "Frank";
console.log('nameConst',nameConst)

function getPetName(){
    let petName = 'Hal';
    return petName;
}
const petName = getPetName()
console.log(petName);

//Block  scoping 區域變數
var fullName = "Noah Tseng";
let firstName;
if(fullName){
    firstName = fullName.split(' ')[0] // 用空白切開
    console.log(firstName)
}
console.log(firstName)
// var template = (
//     <h1>This is Test</h1>
// );

// var Test = document.getElementById('app');

// ReactDOM.render(template,Test);