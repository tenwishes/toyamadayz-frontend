import {Route, Routes} from "react-router-dom";
import {Layout} from "./layout/Layout.tsx";
import {Home, Killfeed, NotFound, Leaderboard, Shop, News, Profile} from "./pages";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>/
                    <Route path="/" element={<Home/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/shop" element={<Shop/>}/>
                    <Route path="/leaderboards" element={<Leaderboard/>}/>
                    <Route path="/killfeeds" element={<Killfeed/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </>

    )
}

export default App
