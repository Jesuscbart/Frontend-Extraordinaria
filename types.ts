export type Contact = {
    name: string;
    email:string;
};

export type AgendaType = {
    dni: string;
    contacts: Contact[];
};
