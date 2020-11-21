import './App.css';
import { Router, Link } from '@reach/router';
import Main from './views/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import UpdateAuthor from './views/UpdateAuthor';
import NewAuthor from './components/NewAuthor';


function App() {
  return (
    <div className="App">
      <h1> Favorite Authors </h1>
      <Link to="/"><h5>Home</h5></Link>
      <Link to="/new"><h5>New Author</h5></Link>
      <Router>
        <Main path="/"/>
        <NewAuthor path="/new"/>
        <UpdateAuthor path="/authors/update/:_id"/>
      </Router>
    </div>
  );
}

export default App;
