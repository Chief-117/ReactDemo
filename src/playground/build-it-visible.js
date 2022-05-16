//5/16 23:37 Class 35 改寫由Component組成
class Visible extends React.Component{
    constructor(props){
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state={
            visibility:false,
        };
    }
    toggleVisibility(){
        this.setState((e)=>{
            return{
                visibility : !e.visibility
            }
        });
    }
    render(){
        return(
            <div>
                <h1>UdemyDemo</h1>
                <button onClick={this.toggleVisibility}>{this.state.visibility?'Hide':'Show'}</button>
                {this.state.visibility && (
                    <div>
                        <p>Hey~</p>
                    </div>
                )}
        </div>
        )
    }
}
ReactDOM.render(<Visible/>,document.getElementById('app'))
// class Visible extends React.Component{
//     constructor(props){
//         super(props);
//         this.func = this.func.bind(this);
//         this.state={
//             showOrHide:'show',
//             OptionValue:[]
//         };
//     }
//     func(){
//         console.log('ok')
//         if(this.state.showOrHide == 'show'){           
//             this.setState((e)=>{
//                 return{        
//                     OptionValue : e.OptionValue = ['HelloWorld'],
//                     showOrHide : e.showOrHide = 'Hide'
//                 };
//             });
//         }else{
//             this.setState((e)=>{
//                 return{        
//                     OptionValue : e.OptionValue = [],
//                     showOrHide : e.showOrHide = 'show'
//                 };
//             });
//         }
//     }
//     render(){
//         return(
//             <div>
//                 <h1>HideAndShowTest</h1>
//                 <button onClick={this.func}>{this.state.showOrHide}</button>
//                 <p>{this.state.OptionValue}</p>
//             </div>
//         )
//     }
// }
// ReactDOM.render(<Visible/>,document.getElementById('app'))



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


// Class 35 VisibilityToggle - render,constructor,handelToggleVisibility
//visibility -> ture/false 之間變動




// const Value = {
//     option:[],
//     showOrHide:'show'
// }
// const func2 = () =>{
//     const template = (
//         <div>
//             <h1>HideAndShowTest ! !</h1>
//             <button onClick={func}>{Value.showOrHide}</button>
//             <p>{Value.option}</p>
//         </div>
//     ) 
//     ReactDOM.render(template,document.getElementById('app'));
// }
// const func = () => {
//     if(Value.showOrHide == 'show' ){
//         Value.option.push('Hey~')
//         Value.showOrHide = 'hide'
//     }else{
//         Value.option = []
//         Value.showOrHide = 'show'
//     }
//     func2()
// }
// func2()