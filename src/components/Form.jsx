import style from "../css/form.module.css";
import propTypes from "prop-types";
import Swal from "sweetalert2";

export default function Form({groceryItem, setGroceryItem, groceryList, setGroceryList}) {

    const itemNames = groceryList.map((item) => item.name.toUpperCase())
    console.log(itemNames)
    let itemValue = "";
    return (
        <>
            <div className={`${style.formContainer}`}>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        itemValue += groceryItem.name;
                        if (itemNames.includes(itemValue.toUpperCase())) {
                            Swal.fire({
                                title: 'Error!',
                                text: 'Item already added in your list',
                                icon: 'error',
                                confirmButtonText: 'OK',
                                confirmButtonColor: '#0d6efd'
                            })
                            setGroceryItem({name: "", done: false});
                        } else {
                            setGroceryList([...groceryList, groceryItem]);
                            setGroceryItem({name: "", done: false});
                        }
                    }}
                >
                    <div className={"input-group"}>
                        <input
                            className={`form-control ${style.formInput}`}
                            type="text"
                            value={groceryItem.name}
                            placeholder="Enter item here 🥕..."
                            onChange={(e) => {
                                setGroceryItem({name: e.target.value, done: false})
                            }}
                            required={true}
                            maxLength={45}
                        />
                        <div className={"input-group-append"}>
                            <button
                                className={"btn btn-primary"}
                            >
                                <i className={"bi bi-patch-plus"}></i> Add Item
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>

    );
}
Form.propTypes = {
    groceryItem: propTypes.object.isRequired,
    groceryList: propTypes.array.isRequired,
    setGroceryList: propTypes.func.isRequired,
    setGroceryItem: propTypes.func.isRequired,
}