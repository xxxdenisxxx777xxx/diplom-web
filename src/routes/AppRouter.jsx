import { Route, Routes } from "react-router-dom"
import App from "../App";


const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" index element={<App />} />

        </Routes>
    )
}

export default AppRouter;