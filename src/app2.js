class IndecisionApp extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <Action/>
                <Options/>
                <AddOption/>
            </div>
        )
    }
}
class Header extends React.Component{
    render(){
        return (
            <div>
                <h1>ReactDemo</h1>
                <h2>FirstPractice For Component</h2>
            </div>
        )
    }
}
class Action extends React.Component{
    render(){
        return (
            <div>
                <button>What should I do?</button>
            </div>
        )
    }
}
//Options -> Options components here
class Options extends React.Component{
    render(){
        return(
            <div>
            <br></br>
                Options components here
                <Option/>
            </div>
        )
    }
}
//AddOption -> AddOption component here
class AddOption extends React.Component{
    render(){
        return(
            <div>
                <br></br>
                AddOption component here
            </div>
        )
    }
}
//Option -> Option componet here
class Option extends React.Component{
    render(){
        return(
            <div>Option component here</div>
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