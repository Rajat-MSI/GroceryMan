import style from "../css/header.module.css";
import Banner from "./Banner.jsx";
import propTypes from "prop-types";
export default function Navbar({appName, groceryList}) {
    return (
        <div>
            <nav className={`${style.header} fixed-top customNavbar`}>
                <div className="container-fluid text-center">
                    <div className={`${style.brand} text-center`}>
                        <span>{appName}</span>
                    </div>
                </div>
                <Banner groceryList={groceryList}/>
            </nav>
        </div>
    );
}
Navbar.propTypes = {
    appName:propTypes.string.isRequired,
    groceryList:propTypes.array.isRequired,
}