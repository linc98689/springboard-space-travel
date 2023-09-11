import {Routes, Route, Navigate} from "react-router-dom";
import Home from "../pages/Home";
import Spacecrafts from "../pages/Spacecrafts";
import Spacecraft from "../pages/Spacecraft";
import SpacecraftBuild from "../pages/SpacecraftBuild";
import Planets from "../pages/Planets";

const AppRoute = () =>{
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/spacecrafts" element={<Spacecrafts />}  />
            <Route path="/spacecraft/:id" element={<Spacecraft />}  />
            <Route path="/spacecraft/build" element={<SpacecraftBuild />}  />
            <Route path="/planets" element={<Planets/>}  />

            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
    
};

export default AppRoute;