import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './bookingtechies/Home';
import Login from './auth/Login';
import Register from './auth/Register';
import TopNav from "./components/TopNav";

function App() {
  return (
   <Router>
    {TopNav}
     <Routes>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
     </Routes>
   </Router>
  );
}

export default App;
