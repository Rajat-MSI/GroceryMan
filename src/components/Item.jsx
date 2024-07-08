import style from "../css/grocerylist.module.css"
import propTypes from "prop-types";

export default function Item({groceryItem,groceryList,setGroceryList}) {

    function handleDelete(name)
    {
        const removedItemList = groceryList.filter((item) => item.name !== name);
        setGroceryList(removedItemList);
    }

    function handleClick(name)
    {
        setGroceryList(
            groceryList.map((item) => item.name === name ? {...item,done:!item.done} : item)
        );
    }

    const checkItem = groceryItem.done === true ? style.item : "";
    return (
        <div className={style.listItem}>
            <span
                className={checkItem}
                onClick={() => handleClick(groceryItem.name)}
            >
                {groceryItem.name}
            </span>
            <button
                className={`${style.deleteItem} btn btn-primary`}
                onClick={() => handleDelete(groceryItem.name)}
            >
                <i className={"bi bi-patch-minus"}></i> Remove
            </button>
            <hr style={checkItem ? {border:"1px solid lightgreen"} : {border:"1px solid red"}}/>
        </div>
    );
}

Item.propTypes = {
    groceryItem:propTypes.object.isRequired,
    groceryList:propTypes.array.isRequired,
    setGroceryList:propTypes.func.isRequired,

}