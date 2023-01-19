import {BrowserRouter as Router, Route, Routes as Switch} from 'react-router-dom';
import NavBar from './NavBar';
import NotFound from './NotFound';
import Home from "./Home";
import Packages from "./Packages";
import BookTicket from "./BookTicket";
import "./App.css";
import Footer from './Footer';

function App() {
  document.title = "Travello";
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/packages" element={<Packages/>}/>
        <Route exact path="/book" element={<BookTicket/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
