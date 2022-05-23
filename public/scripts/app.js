'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var obj = {
    name: 'noah',
    getName: function getName() {
        return this.name;
    }
};
var func = function func() {
    console.log(this);
};
func();
// const getName = obj.getName.bind({name:'kevin'}) ; 綁定須使用陣列
var getName = obj.getName.bind(obj);
console.log(getName());

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.state = {
            options: props.options
        };
        _this.handleRemove = _this.handleRemove.bind(_this);
        _this.handleClick = _this.handleClick.bind(_this);
        _this.formSubmit = _this.formSubmit.bind(_this);
        _this.handleRemoveIndex = _this.handleRemoveIndex.bind(_this);
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'handleRemove',
        value: function handleRemove() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'handleRemoveIndex',
        value: function handleRemoveIndex(option) {
            console.log('test', option);
        }
        //Class 36 handlePick - pass to Action and setup onClick - bind here

    }, {
        key: 'handleClick',
        value: function handleClick() {
            alert(this.state.options[Math.floor(Math.random() * this.state.options.length)]);
        }
    }, {
        key: 'formSubmit',
        value: function formSubmit(option) {
            if (!option) {
                return "請輸入值";
            } else if (this.state.options.indexOf(option) > -1) {
                return "此值已存在";
            } else {}
            this.setState(function (e) {
                return {
                    options: e.options.concat(option)
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var title = 'indecision';
            var subtitle = 'FirstPractice For Component';
            // const options = ['Option one','Option two','Option three']
            return React.createElement(
                'div',
                null,
                React.createElement(Header, null),
                React.createElement(Action, { handleClick: this.handleClick, hasOptions: this.state.options.length > 0 }),
                React.createElement(Options, { handleRemove: this.handleRemove, options: this.state.options, handleRemoveIndex: this.handleRemoveIndex }),
                React.createElement(AddOption, { formSubmit: this.formSubmit })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
    options: []
};
var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        React.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};
Header.defaultProps = {
    title: 'defalut value'
};
// class Header extends React.Component{
//     render(){
//         console.log(this.props)
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         )
//     }
// }
//Class40 轉換為function component
var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handleClick,
                disabled: !props.hasOptions
            },
            'What should I do?'
        )
    );
};
// class Action extends React.Component{
//     // handleClick(){
//     //     // console.log("Click")
//     //     alert('click')
//     // }
//     render(){
//         return (
//             <div>
//                 <button onClick={this.props.handleClick} disabled={!this.props.hasOptions}>What should I do?</button>
//             </div>
//         )
//     }
// }


//setup option prop render the length
//render new p tag for each option (set text , set key )
//Options -> Options components here

//    >>>>"Class29."<<<<<
//Add Remove All button
//Setup handleRemoveAll -> alert some message 
//setup onClick to fire the method 
// class Options extends React.Component{
//     // constructor(props){
//     //     super(props);
//     //     this.RemoveAll = this.RemoveAll.bind(this);
//     // }//使用constructor綁定就不需要在底下每次使用時都再次使用
//     // RemoveAll(){
//     //     // alert('Remove All Successful')
//     //     console.log(this.props.options);
//     // }
//     render(){
//         return(
//             <div>
//                 <button onClick={this.props.handleRemove}>RemoveAll</button> {/*//使用bind(this)作法不好，是沒效率的*/}
//                     {/* this.props.options.map((option)=><p key={option}>{option}</p>) */}
//                 { // 裡面可寫js語法 與 return 產生DOM物件有所不同
//                     this.props.options.map((option)=><Option key={option} optionText={option}/>)
//                 }            
//             </div>
//         )
//     }
// }
//40 -->轉換為function component
var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handleRemove },
            'RemoveAll'
        ),
        props.options.map(function (option) {
            return React.createElement(Option, { key: option,
                optionText: option,
                handleRemoveIndex: props.handleRemoveIndex
            });
        })
    );
};
//Option -> Option componet here
var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        'Option:',
        props.optionText,
        React.createElement(
            'button',
            { onClick: props.handleRemoveIndex },
            'remove'
        )
    );
};
// class Option extends React.Component{
//     render(){
//         return(
//             <div>Option : {this.props.optionText}</div>
//         )
//     }
// }
//AddOption -> AddOption component here

//>>>>>> Class 29.<<<<<<
//setup the form with text input and submit button
//Wire up onSubmit
//handelAddOption -> fetch value > if value then alert 

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.formSubmit = _this2.formSubmit.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: 'formSubmit',
        value: function formSubmit(e) {
            e.preventDefault();
            var option = e.target.elements.option.value.trim();
            var error = this.props.formSubmit(option);;
            this.setState(function () {
                return { error: error };
            });
            // this.setState(()=>{
            //     return{error}
            // });
            // if(option){
            //     this.props.formSubmit(option);
            // } 
            // else{
            //     alert("Success")
            //     e.target.elements.option.value = '';
            // }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.formSubmit },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'add'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);
// const jsx = (
//     <div>
//         <h1>Title</h1>
//         <IndecisionApp/>
//     </div>
// )


var User = function User(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'p',
            null,
            'Name: ',
            props.name
        ),
        React.createElement(
            'p',
            null,
            'Age: ',
            props.age
        )
    );
};
//Class40. ReactDOM.render(<User name="noah" age={26}/>,document.getElementById('app'))
ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
