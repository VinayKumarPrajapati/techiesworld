import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./bookingtechies/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import TopNav from "./components/TopNav";

function App() {
  return (
    <BrowserRouter>
      {TopNav}
      <Routes>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
