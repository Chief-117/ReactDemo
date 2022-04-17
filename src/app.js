console.log('Success!')

//if 
//三元運算法
//logical and operator

// JSX = JaveScript XML
//create object title/subtitle
//use title/subtitle and in template 
//render template

//only render the subtitle (and p tag if subtitle exist - logical and operator)
//render new p tag - if options.length>0 "Here are the option , "No Option""
const books = {
    title : '最後一戰',
    subtitle : '起源',
    option:[]
};
function checkTitle(subtitle){
    if(subtitle){
        return <p>{books.subtitle}</p>;
    }else{
        return '';
    }
    
}
const formSubmit= (e) =>{
    e.preventDefault();//防止頁面刷新
    console.log('test')
    const option = e.target.elements.option.value;
    if(option){
        books.option.push(option);
        e.target.elements.option.value = '';
        test();
    }
    console.log(books.option)
}
// const template = (
//     <div>
//         <h1>{books.title}</h1>
//         {/* <p>{books.subtitle}</p> */}
//         {/* {checkTitle(books.subtitle)} */}
//         {(books.subtitle && <p>{books.subtitle}</p>)}
//         <p>{(books.option.length > 0 ? 'Here are the options' : "no option")}</p>
//         <p>{books.option.length}</p>
//         {/* 創建function */}
//         <ol>
//             <li>最後一戰</li>
//             <li>最後一戰2</li>  
//         </ol>

//         <form onSubmit={formSubmit}>
//             <input type="text" name="option"></input><button>add</button>
//         </form>
//     </div>
// );


// 這裡是練習>>>>>>>>>>>>>>>>>>>>>>>>>>>>創建一個刪除全部的按鈕在ol列表上方<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// 刪除所有選項 當點下之後 陣列必須為0 --->也就是清空的意思 --> 重新渲染
const resetValue = ()=>{
    console.log('已清空')
    books.option=[];
    test();//已經有共用的渲染物件所以不需要再額外複製到另個方法內
}

const appRoot = document.getElementById('app');
const numbers = [55,101,1001]
const onMakeDecision = () =>{
    const randomNum = Math.floor(Math.random() *  books.option.length);
    const option = books.option[randomNum];
    alert(option)
    console.log(randomNum)
}

const test = () =>{
    const template = (
        <div>
            <h1>{books.title}</h1>
            {/* <p>{books.subtitle}</p> */}
            {/* {checkTitle(books.subtitle)} */}
            {(books.subtitle && <p>{books.subtitle}</p>)}
            <p>{(books.option.length > 0 ? 'Here are the options' : "no option")}</p>
            <button disabled={books.option.length === 0} onClick={onMakeDecision}>what shound i do</button>
            {/* 創建function */}
            <button onClick={resetValue}>deleteAll</button>
            {
                numbers.map((number)=>{
                    return <p key={number}>Number:{number}</p>;
                })
            }
            <ol>
                {/* map over app.options getting back an array of lis (set key and text)*/}
                {/* <li>最後一戰</li>
                <li>最後一戰2</li>   */}
                {
                    books.option.map((option)=>{
                        return <li key={option}>{option}</li>;
                    })
                }
            </ol>
    
            <form onSubmit={formSubmit}>
                <input type="text" name="option"></input><button>add</button>
            </form>
        </div>
    );
    ReactDOM.render(template,appRoot);
}
test();


// const appRoot = document.getElementById('app');
// ReactDOM.render(template,appRoot);
//練習
//make button '-1' - 建立minusOne方法跟註冊onClick 並console出'minusOne'
//make reset button "reset" - setup reset function 並console出'reset'
// console.log(template2)
//練習創建template var JSX expression
//div
//h1 放上自己的姓名
//p 放上自己的年紀
//p 住址:
//renderTwo instead of template
// var userName ='noah';
// var userAge = 26;
// var userLocation = 'TW'
// function getLoc(location){
//     if(location){
//         return <p>location : {location} </p>;
//     }
// }
// const user = {
//     name:'Noah',
//     age:18
//     ,
//     location:'TAIWAN'
// };
// const template2 = (
//     <div>
//         <h1>{user.name?user.name:'not assist'}</h1>
//         {/* <p>Age : {user.age}</p> */}
//         {(user.age && user.age >= 18) && <p>Age:{user.age}</p>}
//         {/* <p>Location: {getLoc(user.location)}</p> */}
//         {getLoc(user.location)}
//     </div>
// );


