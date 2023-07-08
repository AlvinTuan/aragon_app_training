import { Outlet } from "react-router-dom";
import DaosDetailsHeader from "./DaosDetailsHeader";
import DaosDetailsFooter from "./DaosDetailsFooter";
const DaosDetails = () => {

    return (
        <>
            <DaosDetailsHeader></DaosDetailsHeader>
            <Outlet></Outlet>
            <DaosDetailsFooter></DaosDetailsFooter>
        </>
    )
}

export default DaosDetails