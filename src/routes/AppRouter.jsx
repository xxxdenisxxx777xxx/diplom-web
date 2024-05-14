import { Route, Routes } from "react-router-dom"
import BasePage from "../components/BasePage";
import Login from "../Login";
import HomePage from "../pages/HomePage";


const AppRouter = () => {
    return (

        <Routes>
            <Route path="/login" exact element={<Login />} />
            <Route path="/adminpanel" element={<BasePage />} />
            <Route path="/home" element={<HomePage />} />

        </Routes>
    )
}

export default AppRouter;