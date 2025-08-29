import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css"


function App() {
  return (
    <>
      <Router> 
        <div className="container">
          <Header />
        <Routes>
           <Route path="/" element={<Dashboard/>} />
           <Route path="/login" element={<Login />} />
           <Route path="/register" element={<Register/>} />
        </Routes>
        </div> 
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
// npm i react-router-dom    npm i react-icons  npx create-react-app client --template redux --legacy-peer-deps ,
// npm init -y in root folder merngoalfoler then  npm i -D concurrently