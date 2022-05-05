import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import {AuthRoute} from "@/components/AuthRoute";
import Home from "@/pages/Home";
import Publish from "@/pages/Publish";
import Article from "@/pages/Article";
import {history, HistoryRouter} from './utils/history'

function App() {
    return (
        <HistoryRouter history={history}>
            <BrowserRouter>
                <Routes>
                    {/* 需要鉴权的路由 */}
                    <Route path="/" element={
                        <AuthRoute>
                            <Layout/>
                        </AuthRoute>
                    }>
                        {/* 二级路由默认页面 */}
                        <Route index element={<Home/>}/>
                        <Route path="article" element={<Article/>}/>
                        <Route path="publish" element={<Publish/>}/>
                    </Route>
                    {/* 不需要鉴权的路由 */}
                    <Route path='/login' element={<Login/>}/>
                </Routes>
            </BrowserRouter>
        </HistoryRouter>
    )
}

export default App;
