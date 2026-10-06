import { useState } from "react";
import DrinkList from "./DrinkList";

const Drinks = () => {

    // 입력값 초기화
    const [value, setValue] = useState("");

    const[drinks, setDrinks] = useState([]);

    const handleInputValue = (e) => {
        setValue(e. target.value);
    }

    const addDrink = () => {
        
        const newDrink = value;
        if(newDrink === ""){
            alert("음료를 입력해주세요");
            return
        }
        // spread 연산자 - 배열 복사
        setDrinks([...drinks, newDrink])
        setValue(""); //입력 필드 초기화
    }

    return(
        <div>
            <h2>음료 리스트</h2>
            <input 
                type="text"
                placeholder="음료를 입력하세요"
                value={value}
                onChange={handleInputValue}
                onKeyDown={(e) => {if (e.key === "Enter") {addDrink();}}}
            />
            {/* <p>입력된 음료 : {value}</p> */}
            <button onClick={addDrink}>음료추가</button>
            {/* 음료 목록 */}
            <DrinkList

                drinklist={drinks}
            />
            {/* <ul className="ugly">
                {drinks.map((drink, index) => (
                    <li key={index}>{drink}</li>
                ))}
            </ul> */}
        </div>
    )
}

export default Drinks;