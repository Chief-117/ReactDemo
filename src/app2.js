class IndecisionApp extends React.Component{
    render(){
        const title = 'indecision';
        const subtitle = 'FirstPractice For Component';
        const options = ['Option one','Option two','Option three']
        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action/>
                <Options options={options}/>
                <AddOption/>
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
    handleClick(){
        console.log("Click")
    }
    render(){
        return (
            <div>
                <button onClick={this.handleClick}>What should I do?</button>
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
    RemoveAll(){
        // alert('Remove All Successful')
        console.log(this.props.optoins)
    }
    render(){
        return(
            <div>
                <button onClick={this.RemoveAll}>RemoveAll</button>
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
    formSubmit(e){
        e.preventDefault();
        const option = e.target.elements.option.value;
        if(option.trim()){
            alert("emptyValue")
        }
        // else{
        //     alert("Success")
        //     e.target.elements.option.value = '';
        // }
    }
    render(){
        return(
            <div>
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