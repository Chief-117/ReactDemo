class Conunter extends React.Component{
    
    constructor(props){
        super(props);
        this.AddOne = this.AddOne.bind(this);
        this.MinusOne = this.MinusOne.bind(this);
        this.Reset = this.Reset.bind(this);
        this.state = {
            count:props.count
        };
    }
    AddOne(){
        this.setState((e)=>{
            return{
                count:e.count +1
            };
        });
    }
    MinusOne(){
         this.setState((e)=>{
            return{
                count:e.count-1
            };
        });
    }
    Reset(){
        this.setState(()=>{
            return{
                count : 0
            };
        });
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
Conunter.defaultProps={
    count:0
}
ReactDOM.render(<Conunter />,document.getElementById('app'))
// 講解是否有在function("e")內傳e值所帶來影響
// 如果有給值則會先抓取方法內的值 也就是count 
// 來做+1 而不是抓取前一筆資料來做+1的動作
// this.setState((e)=>{
//     console.log(e)
//     return{
//         count:e.count+1
//     }
// });
// 講解是否有在function()內傳值所帶來影響
// this.setState({
//     count:0
// });
// this.setState({
//     count:this.state.count +1
// });




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