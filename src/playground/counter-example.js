const appRoot = document.getElementById('app');
let count = 0;
const addOne = () => {
    count++;
    renderCountApp();
    console.log('addOne',count)
};
const someId = 'myidhere';
const minusOne = () => {
    //練習減1
    count--;
    renderCountApp();
    console.log('-1')
}
const reset = () => {
    //練習重置
    count = 0;
    renderCountApp();
    console.log('reset')
}
const renderCountApp = () => { // 因為每次數值變動都應該對應ReactDOM.render 並渲染到頁面上 因此不可以只打 某值++/-- 
    //因此在這邊設一個方法創建出一個新的DOM來配合渲染畫面
    const template2 = (
        <div>
            <h1>Count:{count}</h1>
            <button id={someId} className="button" onClick={addOne}>+1</button>
            <br></br>
            <button onClick={minusOne}>-1</button>
            <br></br>
            <button onClick={reset}>reset</button>
        </div>
    );
    ReactDOM.render(template2,appRoot);
}


renderCountApp();