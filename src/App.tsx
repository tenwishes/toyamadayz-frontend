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
                    <Route path="/leaderboard" element={<Leaderboard/>}/>
                    <Route path="/killfeed" element={<Killfeed/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </>

    )
}

export default App
