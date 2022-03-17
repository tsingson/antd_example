import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import Forms from './pages/Forms';

class App extends React.Component {
  render() {
    return <Forms />;
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
