import Item from "./Item.jsx";
import style from "../css/grocerylist.module.css";
import propTypes from "prop-types";

export default function GroceryListDisplay({groceryItem, groceryList, setGroceryList}) {
    // console.log(groceryItem);
    const sortedGroceryList = groceryList.sort((a,b) => Number(a.done) - Number(b.done));
    return (
        <div className={`col-sm-12 col-lg-6 col-md-8 ${style.listContainer}`}>
            {
                groceryList.length === 0 ? (<div className={"text-center"}>
                    <span style={{fontSize:"2em"}} className={"pe-2"}>🧺</span>
                    Added items will appear here...
                </div>) : (<div>
                    {
                        sortedGroceryList.map((groceryItem) => (
                            <Item key={groceryItem.name} groceryItem={groceryItem}  groceryList={groceryList} setGroceryList={setGroceryList}/>
                        ))
                    }
                </div>)

            }
        </div>
    );
}
GroceryListDisplay.propTypes = {
    groceryItem:propTypes.object.isRequired,
    groceryList:propTypes.array.isRequired,
    setGroceryList:propTypes.func.isRequired,

}