import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout";
import Login from "./pages/Login";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                  <Route path="/" element={<Layout/>}/>
                  <Route path="/Login" element={<Login/>}/>
                </Routes>
            </div>
        </BrowserRouter>

    );
}

export default App;
