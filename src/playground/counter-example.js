class Conunter extends React.Component{
    
    constructor(props){
        super(props);
        // this.AddOne = this.AddOne.bind(this);
        this.MinusOne = this.MinusOne.bind(this);
        this.Reset = this.Reset.bind(this);
        this.state = {
            count:0
        };
    }
    AddOne(){
        console.log('AddOne')
    }
    MinusOne(){
        console.log('MinusOne')
    }
    Reset(){
        console.log('Reset')
    }
    render(){
        return(
            <div>
                <h1>Count:{this.state.count}</h1>
                <button onClick={this.AddOne}>+1</button>
                <button onClick={this.MinusOne}>-1</button>
                <button onClick={this.Reset}>reset</button>
            </div>
        );
    }
}
ReactDOM.render(<Conunter/>,document.getElementById('app'))
// const appRoot = document.getElementById('app');
// let count = 0;
// const addOne = () => {
//     count++;
//     renderCountApp();
//     console.log('addOne',count)
// };
// const someId = 'myidhere';
// const minusOne = () => {
//     //練習減1
//     count--;
//     renderCountApp();
//     console.log('-1')
// }
// const reset = () => {
//     //練習重置
//     count = 0;
//     renderCountApp();
//     console.log('reset')
// }
// const renderCountApp = () => { // 因為每次數值變動都應該對應ReactDOM.render 並渲染到頁面上 因此不可以只打 某值++/-- 
//     //因此在這邊設一個方法創建出一個新的DOM來配合渲染畫面
//     const template2 = (
//         <div>
//             <h1>Count:{count}</h1>
//             <button id={someId} className="button" onClick={addOne}>+1</button>
//             <br></br>
//             <button onClick={minusOne}>-1</button>
//             <br></br>
//             <button onClick={reset}>reset</button>
//         </div>
//     );
//     ReactDOM.render(template2,appRoot);
// }


// renderCountApp();