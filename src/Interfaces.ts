// Interface Deklarierung
interface Contact {
    firstname: string;
    lastname: string;
    fullName: () => string;
    age?: number;
}

// Interface Verwendung in Objekt
const contact: Contact = {
    firstname: 'Max',
    lastname: 'Mustermann',
    fullName: () => 'Max Mux'
}
console.log(contact.fullName())

// Interface Verwendung in Klasse
class PowerContact implements Contact {
    firstname = 'Max';
    lastname = 'Mustermann';

    fullName() {
        return `${this.firstname} ${this.lastname}`
    }
}

const powerContact = new PowerContact()
console.log(powerContact.fullName())