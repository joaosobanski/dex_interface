import { Routes, Route } from "react-router-dom";
import Assets from "../pages/assets";
import Swap from "../pages/swap";
import Farm from "../pages/farm";
import Marketplace from "../pages/marketplace";
import Launchpad from "../pages/launchpad";
import Trending from "../pages/trending";
import Pool from "../pages/pool";

const AppRoutes: React.FunctionComponent = () => {
    return (
        <Routes>
            <Route path="/assets" Component={Assets} />
            <Route path="/swap" Component={Swap} />
            <Route path="/pool" Component={Pool} />
            <Route path="/farm" Component={Farm} />
            <Route path="/marketplace" Component={Marketplace} />
            <Route path="/launchpad" Component={Launchpad} />
            <Route path="/trending" Component={Trending} />
            <Route />
        </Routes>
    )
}

export default AppRoutes;