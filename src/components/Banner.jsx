import style from "../css/banner.module.css";
import propTypes from "prop-types";

export default function Banner({groceryList}) {
    const completedList = groceryList.filter((item) => item.done === true);
    return(
        <div className={`container-fluid ${style.banner}`}>
            <hr/>
            <div className={"container"}>
                <span>
                    <i className="bi bi-bag-check"></i> Completed: {completedList.length}
                </span>
                <span style={{float: "right"}}>
                    <i className="bi bi-list-ol"></i> Total items: {groceryList.length}
                </span>
            </div>
        </div>
    );
}

Banner.propTypes = {
    groceryList:propTypes.array.isRequired
}