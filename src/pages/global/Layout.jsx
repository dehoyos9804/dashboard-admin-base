import { useState } from "react";
import SidePanel from "./SidePanel"
import Topbar from "./Topbar"
import { Outlet } from 'react-router-dom';

const Layout = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [toggled, setToggled] = useState(false);
    const [broken, setBroken] = useState(false);

    const handleIsCollapsed = (value) => {
        setIsCollapsed(value)
    }

    const handleToggleSidebar = (value) => {
        setToggled(value);
    };

    const handleBroken = (value) => {
        setBroken(value);
    };
    
    return (
        <div className="app">
            <SidePanel
                isCollapsed={isCollapsed}
                handleIsCollapsed={handleIsCollapsed}
                toggled={toggled}
                handleToggleSidebar={handleToggleSidebar}
                broken={broken}
                handleBroken={handleBroken}
            />
            <main className="content">
                <Topbar
                    toggled={toggled}
                    handleToggleSidebar={handleToggleSidebar}
                    broken={broken}
                    handleBroken={handleBroken}
                />
                <Outlet/>
            </main>
        </div>
    )
}

export default Layout;