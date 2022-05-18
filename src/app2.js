const obj = {
    name :'noah',
    getName(){
        return this.name;
    }
};
const func = function(){
    console.log(this)
}
func()
// const getName = obj.getName.bind({name:'kevin'}) ; 綁定須使用陣列
const getName = obj.getName.bind(obj)
console.log(getName())

class IndecisionApp extends React.Component{
    constructor (props){
        super(props)
        this.state = {
            options:['Option one','Option two','Option three']
        };
        this.handleRemove = this.handleRemove.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.formSubmit = this.formSubmit.bind(this)
    }
    handleRemove(){
        this.setState(()=>{
            return{
                options : []
            };
        });
    }
    //Class 36 handlePick - pass to Action and setup onClick - bind here
    handleClick(){
        alert(this.state.options[Math.floor(Math.random()*this.state.options.length)])
    }
    formSubmit(option){
        if(!option){
            return "請輸入值";
        }else if(this.state.options.indexOf(option)>-1){
            return "此值已存在"
        }else{

        }
        this.setState((e)=>{
            return{
                options : e.options.concat([option])
                //concat可使原有陣列資料不受到破壞
            };
        })
    }
    render(){
        const title = 'indecision';
        const subtitle = 'FirstPractice For Component';
        // const options = ['Option one','Option two','Option three']
        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action handleClick={this.handleClick} hasOptions={this.state.options.length > 0 }/>
                <Options handleRemove={this.handleRemove} options={this.state.options}/>
                <AddOption formSubmit={this.formSubmit}/>
            </div>
        )
    }
}
class Header extends React.Component{
    render(){
        console.log(this.props)
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}
class Action extends React.Component{
    // handleClick(){
    //     // console.log("Click")
    //     alert('click')
    // }
    render(){
        return (
            <div>
                <button onClick={this.props.handleClick} disabled={!this.props.hasOptions}>What should I do?</button>
            </div>
        )
    }
}
//setup option prop render the length
//render new p tag for each option (set text , set key )
//Options -> Options components here

//    >>>>"Class29."<<<<<
//Add Remove All button
//Setup handleRemoveAll -> alert some message 
//setup onClick to fire the method 
class Options extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.RemoveAll = this.RemoveAll.bind(this);
    // }//使用constructor綁定就不需要在底下每次使用時都再次使用
    // RemoveAll(){
    //     // alert('Remove All Successful')
    //     console.log(this.props.options);
    // }
    render(){
        return(
            <div>
                <button onClick={this.props.handleRemove}>RemoveAll</button> {/*//使用bind(this)作法不好，是沒效率的*/}
                    {/* this.props.options.map((option)=><p key={option}>{option}</p>) */}
                { // 裡面可寫js語法 與 return 產生DOM物件有所不同
                    this.props.options.map((option)=><Option key={option} optionText={option}/>)
                }            
            </div>
        )
    }
}
//Option -> Option componet here
class Option extends React.Component{
    render(){
        return(
            <div>Option : {this.props.optionText}</div>
        )
    }
}
//AddOption -> AddOption component here

//>>>>>> Class 29.<<<<<<
//setup the form with text input and submit button
//Wire up onSubmit
//handelAddOption -> fetch value > if value then alert 
class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.formSubmit = this.formSubmit.bind(this);
        this.state={
            error:undefined
        };
    }
    formSubmit(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.formSubmit(option);;
        this.setState(()=>{
            return{error}
        });
        // if(option){
        //     this.props.formSubmit(option);
        // } 
        // else{
        //     alert("Success")
        //     e.target.elements.option.value = '';
        // }
    }
    render(){
        return(
            <div>
            {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.formSubmit}>
                    <input type="text" name="option"></input>
                    <button>add</button>
                </form>
            </div>
        )
    }
}
// const jsx = (
//     <div>
//         <h1>Title</h1>
//         <IndecisionApp/>
//     </div>
// )
ReactDOM.render(<IndecisionApp/>,document.getElementById('app'))