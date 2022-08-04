import Account from "../components/pages/Account";
import Home from "../components/pages/Home";
import Joblistingjobs from "../components/pages/Joblistingjobs";

export const routes = [
    {
        path: "/",
        exact: true,
        main: <Home/>
    },
    {
        path: "/jobs",
        exact: true,
        main: <Joblistingjobs/>
    },
    {
        path: "/SISU",
        exact: true,
        main:<Account/>
    }   
]