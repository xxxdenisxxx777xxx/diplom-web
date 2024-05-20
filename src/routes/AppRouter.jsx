import { Route, Routes } from "react-router-dom"
import BasePage from "../components/DropCourse";
import Login from "../Login";
import HomePage from "../pages/HomePage";
import GroupsPage from "../pages/GroupsPage";
import ChatPage from "../pages/ChatPage";
import StudentPage from "../pages/StudentPage";
import ScheduleComponents from "../components/ScheduleComponents";
import TeacherPage from "../pages/TeacherPage";


const AppRouter = () => {
    return (

        <Routes>
            <Route path="/login" exact element={<Login />} />
            <Route path="/groups" element={<GroupsPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/students" element={<StudentPage />} />
            <Route path="/schedule" element={<ScheduleComponents />} />
            <Route path="/teachers" element={<TeacherPage />} />
        </Routes>
    )
}

export default AppRouter;