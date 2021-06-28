import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SampleComponent from "../components/SampleComponent";
import {featured} from "../classes/FeaturedMessage";

function App() {
  return (
    <div className="App">
        <div>Sample App</div>
        <hr/>
        <div>
            <SampleComponent messages={[featured("title 1", "message 1"), featured("title 2", "message 2")]} />
        </div>
    </div>
  );
}

export default App;
