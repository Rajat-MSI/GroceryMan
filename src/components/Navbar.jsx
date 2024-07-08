import style from "../css/header.module.css";
import Banner from "./Banner.jsx";
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