'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Conunter = function (_React$Component) {
    _inherits(Conunter, _React$Component);

    function Conunter(props) {
        _classCallCheck(this, Conunter);

        var _this = _possibleConstructorReturn(this, (Conunter.__proto__ || Object.getPrototypeOf(Conunter)).call(this, props));

        _this.AddOne = _this.AddOne.bind(_this);
        _this.MinusOne = _this.MinusOne.bind(_this);
        _this.Reset = _this.Reset.bind(_this);
        _this.state = {
            count: 0
        };
        return _this;
    }

    _createClass(Conunter, [{
        key: 'AddOne',
        value: function AddOne() {
            this.setState(function (e) {
                return {
                    count: e.count + 1
                };
            });
        }
    }, {
        key: 'MinusOne',
        value: function MinusOne() {
            this.setState(function (e) {
                return {
                    count: e.count - 1
                };
            });
        }
    }, {
        key: 'Reset',
        value: function Reset() {
            this.setState(function () {
                return {
                    count: 0
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
                    'Count:',
                    this.state.count
                ),
                React.createElement(
                    'button',
                    { onClick: this.AddOne },
                    '+1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.MinusOne },
                    '-1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.Reset },
                    'reset'
                )
            );
        }
    }]);

    return Conunter;
}(React.Component);

ReactDOM.render(React.createElement(Conunter, null), document.getElementById('app'));
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
