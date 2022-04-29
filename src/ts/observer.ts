/**
 * Interfaz Subject
 */
interface Subject {
    subscribe: (obs: Observer) => void,
    unsubscribe: (obs: Observer) => void
}

/**
 * Interfaz Observer
 */
interface Observer {
    update: (data: any) => void
}

/**
 * Clase BitcoinPrice: Implementa Subject
 */
class BitcoinPrice implements Subject {

    //Variables privadas
    observers: Observer[] = [];

    /**
     * Constructor de la clase
     */
    constructor() {

        //Elemento HTMLInputElement
        const el: HTMLInputElement = document.querySelector('#value');

        //Agreamos evento input y notificamos el valor
        el.addEventListener('input', () => this.notify(el.value));
    }

    /**
     * Suscribe al subject
     * @param obs Observer
     */
    subscribe(obs: Observer) {

        //Adiciona a la lista de Observer
        this.observers.push(obs);
    }

    /**
     * Desubscribe del subject
     * @param obs Observer
     */
    unsubscribe(obs: Observer) {

        //Elimina de la lista de Observer
        this.observers.splice(this.observers.findIndex(o => o === obs), 1);
    }

    /**
     * Notifica a los observadores que el valor ha cambiado
     * @param data Precio
     */
    notify(data: any) {
        this.observers.forEach(obs => obs.update(data))
    }
}

/**
 * Clase PriceDisplay: Implementa Observer
 */
class PriceDisplay implements Observer {
    private price: HTMLElement[];
    constructor(private el: HTMLElement[]) {
        this.price = this.el;
    }

    /**
     * Actualizamos el precio cada vez que cambie
     * @param data Precio
     */
    update(data: any) {
        this.price.forEach(el => el.innerText = data);
    }
}

//Prices
const em: HTMLElement[] = Array.from(document.querySelectorAll('em'));
const label: HTMLElement[] = Array.from(document.querySelectorAll('label'));

//Instanciamos PriceDisplay (Observador)
const display = new PriceDisplay(em);
const displayLabel = new PriceDisplay(label);

//Instanciamos BitcoinPrice (Subject)
const value = new BitcoinPrice();

//Subscribimos el display al cambio de valores
value.subscribe(display);
value.subscribe(displayLabel);

//Botones
const btn_susbscribe: HTMLButtonElement = document.querySelector('#btn_susbscribe');
const btn_unsusbscribe: HTMLButtonElement = document.querySelector('#btn_unsusbscribe');

/**
 * Desubscribe el último display
 * @param ev MouseEvent
 */
btn_unsusbscribe.onclick = (ev: MouseEvent) => {
    value.unsubscribe(displayLabel);
    btn_unsusbscribe.disabled = true;
}

/**
 * Subscribe el display
 * @param ev MouseEvent
 */
btn_susbscribe.onclick = (ev: MouseEvent) => {
    value.subscribe(display);
    value.subscribe(displayLabel);
    btn_susbscribe.disabled = true;
    btn_unsusbscribe.disabled = false;
}