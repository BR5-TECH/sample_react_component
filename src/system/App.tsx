import React from 'react';
import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SampleComponent from "../components/SampleComponent";

function App() {
  return (
    <div className="App">
        <div>Sample App</div>
        <div>
            <SampleComponent messages={[]} />
        </div>
    </div>
  );
}

export default App;
