import React, {useState, useSelector} from 'react';
import "./shop-cart-order-form.scss"

const ShopCartOrderForm = () => {
    const [formData, setFormData] = useState({})
    // const {orderedItemsData}=useSelector(state=>state.cart)
    const handleBlur = () => {
        console.log(formData)
    }
    return (
        <div className={"shop-cart-order-form"}>
            <form>
                <div className="shop-cart-order-form__wrapper">
                <div className={"shop-cart-order-form__row"}>
                    <div className="shop-cart-order-form__col">
                        <label className={"shop-cart-order-form__label"}>Name</label>
                        <input onChange={(ev) =>
                            setFormData({...formData, name: ev.target.value})}
                               value={formData?.name}
                               type="text"
                               placeholder={"Name"}
                               className={"shop-cart-order-form__input"}
                               onBlur={handleBlur}
                        />

                    </div>
                    <div className="shop-cart-order-form__col">
                        <label className={"shop-cart-order-form__label"}>Surname</label>
                        <input onChange={(ev) =>
                            setFormData({...formData, surName: ev.target.value})}
                               value={formData?.surName}
                               type="text"
                               placeholder={"SurName"}
                               className={"shop-cart-order-form__input"}
                               onBlur={handleBlur}
                        />
                    </div>
                    <div className="shop-cart-order-form__col">
                        <label className={"shop-cart-order-form__label"}>Phone</label>
                        <input type="tel"
                               placeholder={"Phone"}
                               onChange={(ev)=>setFormData({...formData, phone: ev.target.value})}
                               className={"shop-cart-order-form__input"}
                               onBlur={handleBlur}
                        />

                    </div>
                    <div className="shop-cart-order-form__col">
                        <label className={"shop-cart-order-form__label"}>Email</label>
                        <input type="text"
                               placeholder={"Email"}
                               className={"shop-cart-order-form__input"}
                               onChange={(ev) => setFormData({...formData, email: ev.target.value})}
                               onBlur={handleBlur}
                        />
                    </div>
                    <div className="shop-cart-order-form__col">
                        <label className={"shop-cart-order-form__label"}>Region</label>
                        <select name="Region"
                                className={"shop-cart-order-form__select"}

                                onChange={(ev) =>
                                    setFormData({...formData, region: ev.target.value})}>
                            <option value="" className={"shop-cart-order-form__option"}>--Select Region--</option>
                            <option value="Region 1" className={"shop-cart-order-form__option"}>Region 1</option>
                            <option value="Region 2" className={"shop-cart-order-form__option"}>Region 2</option>
                            <option value="Region 3" className={"shop-cart-order-form__option"}>Region 3</option>
                            <option value="Region 4" className={"shop-cart-order-form__option"}>Region 4</option>
                            <option value="Region 5" className={"shop-cart-order-form__option"}>Region 5</option>
                            <option value="Region 6" className={"shop-cart-order-form__option"}>Region 6</option>
                            <option value="Region 7" className={"shop-cart-order-form__option"}>Region 7</option>
                        </select>
                    </div>
                    <div className="shop-cart-order-form__col">
                        <label className={"shop-cart-order-form__label"}>City</label>
                        <select name="City" className={"shop-cart-order-form__select"}
                                onChange={(ev) => setFormData({...formData, city: ev.target.value})}>
                            <option value="" className={"shop-cart-order-form__option"}>--Select City--</option>
                            <option value="City 1" className={"shop-cart-order-form__option"}>City 1</option>
                            <option value="City 2" className={"shop-cart-order-form__option"}>City 2</option>
                            <option value="City 3" className={"shop-cart-order-form__option"}>City 3</option>
                            <option value="City 4" className={"shop-cart-order-form__option"}>City 4</option>
                            <option value="City 5" className={"shop-cart-order-form__option"}>City 5</option>
                            <option value="City 6" className={"shop-cart-order-form__option"}>City 6</option>
                            <option value="City 7" className={"shop-cart-order-form__option"}>City 7</option>
                        </select>
                    </div>
                    <div className="shop-cart-order-form__row">
                        <div className="shop-cart-order-form__address shop-cart-order-form__col">
                            <label className={"shop-cart-order-form__label"}>Address</label>
                            <input type="text"
                                   placeholder={"Address"}
                                   className={"shop-cart-order-form__input"}
                                   onChange={(ev) => setFormData({...formData, address: ev.target.value})}
                                   onBlur={handleBlur}
                            />
                        </div>
                        <div className={"shop-cart-order-form__col"}>
                            <label className={"shop-cart-order-form__label"}>
                                Notes
                            </label>
                            <textarea
                                onChange={(ev) => setFormData({...formData, notes: ev.target.value})}
                                onBlur={handleBlur}
                                className={"shop-cart-order-form__textarea"}
                                required
                            ></textarea>
                        </div>
                    </div>
                </div>
                </div>
            </form>
        </div>
    );
};

export default ShopCartOrderForm;