'use strict';

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
var Value = {
    option: [],
    showOrHide: 'show'
};
var func2 = function func2() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'HideAndShowTest ! !'
        ),
        React.createElement(
            'button',
            { onClick: func },
            Value.showOrHide
        ),
        React.createElement(
            'p',
            null,
            Value.option
        )
    );
    ReactDOM.render(template, document.getElementById('app'));
};
var func = function func() {
    if (Value.showOrHide == 'show') {
        Value.option.push('Hey~');
        Value.showOrHide = 'hide';
    } else {
        Value.option = [];
        Value.showOrHide = 'show';
    }
    func2();
};
func2();
