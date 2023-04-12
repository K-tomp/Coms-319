import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import Checkout from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// function getComponent(){
//   let component;
//   switch (this.state.currentComponent){
//       case 'compA' :
//           component = <CompA/>;
//           break;
//       case 'compB' :
//           component = <CompB/>;
//           break;
//       case 'compC' :
//           component = <CompC/>;
//           break;
//       case 'compD' :
//           component = <CompD/>;
//           break;
//   }
//   return component;
// }

function render(){
  return(
      <div>
          {this.getComponent()}
      </div>
  );
}





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
