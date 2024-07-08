import style from "../css/grocerylist.module.css"

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

    const className = groceryItem.done === true ? style.item : "";
    return (
        <div className={style.listItem}>
            <span
                className={className}
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
            <hr className={style.base}/>
        </div>
    );
}