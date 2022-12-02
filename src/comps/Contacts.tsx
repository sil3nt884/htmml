import './Login.css'




type contact = {
    name: string
}




export const Contacts = ({contacts}: {contacts: contact[]}) => {
    const userData = {
        name : "Ricky",
        status: "Online",
        chatStatus: "",
        pic: "profile.webp"
    }

    return <div className={"contactsHolder"}>
        <div className={"profileText"}>
            <img className={"profile"} src={userData.pic}></img>
            <p className={"text"}>{userData.name}</p>
            <p className={"text"}>{userData.status}</p>
            <p>{userData.chatStatus}</p>
        </div>
        <nav style={{
            height: "367px"
        }}>
          <div className={"navBorder"}>
              <ul className={"navList"}>
                  <li><div className={"contactsButton"}></div></li>
              </ul>
          </div>


        </nav>
        {contacts.length ?
            <div className={"contactsList"} >
                <ul>
                    {
                        contacts.map(e =>  <li key={e.name} style={{
                            listStyle : "none",
                            margin: "-10px 0 0 0"

                        }}>
                            <div className={"contact"}>
                                <img className={"contact-status"} width={20}  height={20} src={"contact-39.svg"}></img>
                                <p>{e.name}</p>
                            </div>
                        </li>)
                    }

                </ul>
        </div>
          : <div> no contacts </div>}
    </div>
}

