import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './index';
import App from './App';
import reportWebVitals from './reportWebVitals';

class loginButton extends React.Component {
  promptInput() {
    alert("AHHH");
  }
  render(){
    return(
      <button onClick={this.promptInput}>WARGH!</button>
    );
  }
}
ReactDOM.render(<loginButton />, document.getElementById('root'));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
