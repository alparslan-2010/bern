import logo from './logo.svg';

import './App.css';
import Navbar from "./component/navbar"
import Main from "./component/main"
import Alert from "./component/alert"
import Card from "./component/card"
import Form from "./component/form"
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <Card/>
      <Form/>
      <Alert/>
      
    </div>
  );
}

export default App;
