import { Route, Routes, useLocation } from "react-router-dom";
import {  ThemeProvider } from '@mui/material/styles';
import Navigation from "../customer/components/Navbar/Navigation"
import Homepage from "../pages/HomePage"
import {  customerTheme } from "../Admin/Theme/customtheme";

const CustomerRoutes = () => {
    const location = useLocation();

    const showNavigation = location.pathname !== "*";

    return (

        <div>
            <ThemeProvider theme={customerTheme}>

                {showNavigation && <Navigation />}

                <Routes>

                    <Route path="/login" element={<Homepage />}></Route>
                    <Route path="/register" element={<Homepage />}></Route>
                    <Route path="/" element={<Homepage />}></Route>
                    <Route path="/home" element={<Homepage />}></Route>

                </Routes>
            </ThemeProvider>



        </div>
    )

}
export default CustomerRoutes;