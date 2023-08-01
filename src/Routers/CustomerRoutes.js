import { Route, Routes, useLocation } from "react-router-dom";
import {  ThemeProvider } from '@mui/material/styles';
import Navigation from "../customer/components/Navbar/Navigation"
import Homepage from "../pages/HomePage"
import Contact from "../pages/Contact"
import About from "../pages/About"
import PrivacyPolicy from "../pages/Privacy-policy"
import TearmsCondition from "../pages/TermandCondition"


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

                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
                    <Route path="/terms-conditions" element={<TearmsCondition />}></Route>

                    

                </Routes>
            </ThemeProvider>



        </div>
    )

}
export default CustomerRoutes;