import { Route, Routes } from "react-router-dom"
import BasePage from "../components/BasePage";
import Login from "../Login";


const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" index element={<Login />} />
            <Route path="/adminpanel" element={<BasePage />} />

        </Routes>
    )
}

export default AppRouter;