'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//5/16 23:37 Class 35 改寫由Component組成
var Visible = function (_React$Component) {
    _inherits(Visible, _React$Component);

    function Visible(props) {
        _classCallCheck(this, Visible);

        var _this = _possibleConstructorReturn(this, (Visible.__proto__ || Object.getPrototypeOf(Visible)).call(this, props));

        _this.toggleVisibility = _this.toggleVisibility.bind(_this);
        _this.state = {
            visibility: false
        };
        return _this;
    }

    _createClass(Visible, [{
        key: 'toggleVisibility',
        value: function toggleVisibility() {
            this.setState(function (e) {
                return {
                    visibility: !e.visibility
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'UdemyDemo'
                ),
                React.createElement(
                    'button',
                    { onClick: this.toggleVisibility },
                    this.state.visibility ? 'Hide' : 'Show'
                ),
                this.state.visibility && React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'p',
                        null,
                        'Hey~'
                    )
                )
            );
        }
    }]);

    return Visible;
}(React.Component);

ReactDOM.render(React.createElement(Visible, null), document.getElementById('app'));
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
