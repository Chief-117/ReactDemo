// let visibility = false;
// const toggleVisibility = () =>{
//     visibility = !visibility;
//     render()
// }
// const render = () => {
//     const jsx =(
//         <div>
//             <h1>UdemyDemo</h1>
//             <button onClick={toggleVisibility}>
//                 {visibility?'Hide':'Show'}
//             </button>
//             {visibility && (
//                 <div>
//                     <p>Hey~</p>
//                 </div>
//             )}
//         </div>
//     )
//     ReactDOM.render(jsx,document.getElementById('app'))
// }
// render()
const Value = {
    option:[],
    showOrHide:'show'
}
const func2 = () =>{
    const template = (
        <div>
            <h1>HideAndShowTest ! !</h1>
            <button onClick={func}>{Value.showOrHide}</button>
            <p>{Value.option}</p>
        </div>
    ) 
    ReactDOM.render(template,document.getElementById('app'));
}
const func = () => {
    if(Value.showOrHide == 'show' ){
        Value.option.push('Hey~')
        Value.showOrHide = 'hide'
    }else{
        Value.option = []
        Value.showOrHide = 'show'
    }
    func2()
}
func2()