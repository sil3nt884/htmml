import logo from '../img/logo.webp'
import './Login.css'
import {FormEvent, useState} from "react";



type contact = {
    name: string
}




export const Contacts = ({contacts}: {contacts: contact[]}) => {

    return <div className={"contactsHolder"}>
        {contacts.length ? contacts.map(e => <div key={e.name}> contacts </div>) : <div> no contacts </div>}
    </div>
}
