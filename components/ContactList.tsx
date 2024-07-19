import { FunctionalComponent } from "preact";
import { Contact, AgendaType } from "../types.ts";
import { useEffect, useState } from "preact/hooks";

type Props = {
    agenda: AgendaType;
    contact: Contact;
}

const ContactList: FunctionalComponent<Props> = ({agenda, contact}) => {

    return (
        <div class="main-container">
            <div class="contacts-container">
                <h1>Contactos de {agenda.dni}</h1>
                    <ul>
                        {agenda.contacts.map((contact, index) => (
                            <li key = {index}>
                                <div>{contact.name}</div>
                                <div>{contact.email}</div>
                            </li>
                        ))}
                    </ul>
            </div>
        </div>
    )
}

export default ContactList;