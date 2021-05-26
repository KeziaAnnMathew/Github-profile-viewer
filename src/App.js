import  { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import SearchPage from './Components/SearchPage';
import ProfilePage from './Components/ProfilePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={SearchPage} />
        <Route path="/:id" component={ProfilePage} />
      </Router>
    </div>
  );
}

export default App;
