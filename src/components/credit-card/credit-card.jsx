import React, {useState} from 'react';
import Cards from "react-credit-cards"
import 'react-credit-cards/es/styles-compiled.css';
import "./credit-card.scss"
const CreditCard = () => {
    const [name,setName]=useState("")
    const [cvc,setCvc]=useState("")
    const [number,setNumber]=useState("")
    const [expiry,setExpiry]=useState("")
    const [focus,setFocus]=useState("")
    return (
        <div className="credit-card">
            <Cards
                cvc={cvc}
                expiry={expiry}
                focused={focus}
                name={name}
                number={number}
            />
            <form className={"credit-card__form"}>
                <div className={"credit-card__row"}>
                    <div className={"credit-card__col"}>
                        <input
                            type="tel"
                            name="number"
                            placeholder="Card Number"
                            onChange={(ev) => setNumber(ev.target.value)}
                            onFocus={(ev) => setFocus(ev.target.name)}
                            className={"credit-card__input"}
                            required
                        />
                    </div>
                    <div className={"credit-card__col"}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name Surname"
                            onChange={(ev) => setName(ev.target.value)}
                            onFocus={(ev) => setFocus(ev.target.name)}
                            className={"credit-card__input"}
                            required
                        />
                    </div>
                    <div className={"credit-card__col"}>
                        <input
                            type="tel"
                            name="expiry"
                            placeholder="MM/YY Expiry"
                            onChange={(ev) => setExpiry(ev.target.value)}
                            onFocus={(ev) => setFocus(ev.target.name)}
                            className={"credit-card__input"}
                            required
                        /></div>
                    <div className={"credit-card__col"}>
                        <input
                            type="tel"
                            name="cvc"
                            placeholder="CVC"
                            onChange={(ev) => setCvc(ev.target.value)}
                            onFocus={(ev) => setFocus(ev.target.name)}
                            className={"credit-card__input"}
                            required
                        />
                </div>
                </div>
            </form>
        </div>
    );
};

export default CreditCard;