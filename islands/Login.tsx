import { FunctionalComponent } from "preact";
import { Contact, AgendaType, DNI } from "../types.ts";
import { useEffect, useState } from "preact/hooks";
//import Agenda from "./Agenda.tsx";

type Props = {
    agenda: AgendaType;
    
}

const Login: FunctionalComponent<Props> = ({agenda}) => {

    const [dni, setDni] = useState<string>("");
    const [error, setError] = useState<string>("");

    const validateDNI = (miAgenda: AgendaType): boolean => {
        return miAgenda.dni.length === 9 &&
        miAgenda.dni.at(8) === "A";
    };

    const irAgenda = (miAgenda: AgendaType) => {
        if(!validateDNI(miAgenda)) {
            setError("DNI no válido")
        }
        else{
             
            console.log("HOLA");
               
        }
    }


    return (
        <div class="main-container">
            <div class="dni-input-container">
                <label for="dni">Introduce tu DNI:</label>
                <input type="text" placeholder="12345678A" value={dni} onInput={(e) => {
                    setError("");
                    setDni(e.currentTarget.value);
                }}></input>
                <button>Ir a mi agenda</button>
                {error && <p class="error">{error}</p>}
            </div>
            
        </div>
    )


}

export default Login;