import React from 'react'
//React module convert the jsx code into html code

// function Test() {
//   return (
//     <div className='App'>
//         <h1>This is a Test</h1>
//         </div>
//   );
// //   return React.createElement('div', {className: "App"} , React.createElement('h1',null,"This is test file"));
// }
let Test = (props) => {
    console.log(props);
    return(
        <div className="App">
            {/* <h1>This is using Arrow function {Math.random()}</h1> */}
            {/* <h1>Name: {props.name} and Age: {props.age}</h1>
            <h1>New data : {props.children}</h1> */}
            <h1>Hello there!!!!!</h1>
        </div>
    )
}
export default Test;