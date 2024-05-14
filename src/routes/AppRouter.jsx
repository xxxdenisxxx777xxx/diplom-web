import { Route, Routes } from "react-router-dom"
import BasePage from "../components/DropGroups";
import Login from "../Login";
import HomePage from "../pages/HomePage";
import GroupsPage from "../pages/GroupsPage";
import ChatPage from "../pages/ChatPage";


const AppRouter = () => {
    return (

        <Routes>
            <Route path="/login" exact element={<Login />} />
            <Route path="/groups" element={<GroupsPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/chat" element={<ChatPage />} />

        </Routes>
    )
}

export default AppRouter;