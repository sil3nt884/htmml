import './Login.css'
import {FormEvent} from "react";


const handleClick = (event: FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    window.location.href = "/contacts"
}


export const Login = () => {
    return <div className={"holder"}>
        <img src={"logo.webp"} style={{
            width: "171px",
            height: "163px",
            margin: "11px auto",
            display: "block",
            borderRadius: "25px",
            borderStyle: "double",
        }}/>
        <form className={"login"}>
            <label>E-mail address: </label>
            <input className={"loginInput"} type={"email"}/>
            <label>Password: </label>
            <input className={"loginInput"} type={"password"}/>
            <select>
                <option>Online</option>
                <option>Appear Offline</option>
                <option>Away</option>
            </select>
            <input  onClick={handleClick} type={"submit"} />
        </form>
    </div>
}
