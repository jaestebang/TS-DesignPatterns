# PATRONES DE DISEÑO

```cmd
npm i
npm start
```

Por definición, un patrón de diseño es una solución a un problema de diseño cuya efectividad ha sido comprobada por haber sido empleada para resolver problemas similares en ocasiones anteriores. Otra característica fundamental es que deben ser reusables, lo que significa que sean aplicables a diferentes problemas de diseño en distintas circunstancias. 

Los patrones de diseño pretenden:

- Proporcionar catálogos de elementos reusables en el diseño de sistemas software.
- Evitar la reiteración en la búsqueda de soluciones a problemas ya conocidos y solucionados anteriormente.
- Formalizar un vocabulario común entre diseñadores.
- Estandarizar el modo en que se realiza el diseño. Facilitar el aprendizaje de las nuevas generaciones de diseñadores condensando conocimiento ya existente.

## Patrones creacionales

Proveen diferentes mecanismos para crear objetos. Definen cómo puede crearse un objeto. Habitualmente esto incluye aislar los detalles de la creación del objeto, de forma que su código no dependa de los tipos de objeto que hay y, por lo tanto, no deba se modificado al añadir un nuevo tipo de objeto.

- **Abstract Factory**
- **Builder:** Es usado para permitir la creación de una variedad de objetos complejos desde un objeto fuente.

    - Separa la creación de un objeto complejo de su estructura, de tal forma que el mismo proceso de construcción puede servir para crear representaciones diferentes.
    - JQuery lo usa para crear sus objetos.

- **Factory Method:** Se utiliza para crear objetos sin especificar la clase exacta de objeto que se creará.

    - Patrón de diseño factory Java - Spring Boot

        **Clase abstracta:** Factura implementa un método abstracto
        ```Java
        @Getter
        @Setter
        public abstract class Invoice {
            
            private int id;
            private double price;
            public abstract double getPriceWithTaxes();
        }
        ```

        **Clase extendida** Factura impuestos reducidos, extiende de clase abstracta e implementa el método
        ```Java
        public class InvoiceReducedTaxes extends Invoice {
            
            @Override
            public double getPriceWithTaxes() {
                // TODO Auto-generated method stub
                return getPrice() * 1;
            }
        }
        ```

        **Clase extendida** Factura con impuestos, extiende de clase abstracta e implementa el método
        ```Java
        public class InvoiceTaxes extends Invoice {
            
            @Override
            public double getPriceWithTaxes() {
                // TODO Auto-generated method stub
                return getPrice() * 1.07;
            }
        }
        ```

        **Factory component** Factoría de factura, crea una instancia y la retorna basado en condiciones
        ```Java
        @Component
        public class InvoiceFactory {

            public Invoice createBean(String type) {
                if ("iva".equals(type)) {
                    return new InvoiceTaxes();
                } else if ("".equals(type)) {
                    return new InvoiceReducedTaxes();
                }
                // Handle other cases or throw an exception for unknown types.
            }
        }
        ```

        **Inyección de dependencia** Inyecta el factory bean y lo utiliza
        ```Java
        @Service
        public class InvoiceService {

            @Autowired
            private final InvoiceFactory invoiceFactory;

            public void doSomething(String type) {
                Invoice invoiceBean = invoiceFactory.createBean(type);
                invoiceBean.getPriceWithTaxes();
                // Use the created bean as needed.
            }
        }
        ```        

- **Prototype:**
- **Singleton:** Es un patrón que te asegura que una clase solo tiene una instancia. Esta única instancia puede ser consumida por cualquier otro objeto.

    - Patrón de diseño singleton JavaScript - TypeScript
    ```JavaScript
    /**
    * Class SingletonIdPlayer: Patron de diseñon Singleton
    */
    export class SingletonIdPlayer {

        //Variables privadas
        private static instance: SingletonIdPlayer;
        public iterator: number = 0;

        /**
        * Constructor privado para impedir creaciones de clase
        */
        private constructor() {
        }

        /**
        * Retorna una única instancia
        * @returns Instancia
        */
        public static getInstance(): SingletonIdPlayer {
            if (!SingletonIdPlayer.instance)
                SingletonIdPlayer.instance = new SingletonIdPlayer();
            
            //Incrementa identificador
            SingletonIdPlayer.instance.iterator += 1;
            
            return SingletonIdPlayer.instance;
        }
    }
    ```

    - Patrón de diseño singleton Java - Spring Boot

        **Ámbito de Bean:**  De forma predeterminada, los beans de Spring son singletons. Esto significa que, por defecto, Spring crea y administra solo una instancia de un bean en el contenedor de Spring. Esta única instancia se comparte luego entre todos los componentes y servicios que la requieran. Este comportamiento asegura que los recursos se gestionen de manera efectiva y se evite la sobrecarga de crear múltiples instancias del mismo bean.

        **Contexto de Aplicación:** Spring Boot crea y mantiene un contexto de aplicación que administra el ciclo de vida de los beans. Cuando defines un bean en una aplicación Spring Boot, generalmente es un singleton de manera predeterminada, a menos que especifiques explícitamente un ámbito diferente.

        **Exploración de Componentes:** Spring Boot utiliza la exploración de componentes para descubrir y registrar automáticamente beans en tu aplicación. Los componentes anotados, como *@Service*, *@Repository* y *@Controller*, son, por defecto, singletons a menos que se especifique lo contrario.

        **Inyección de Dependencias:** Los beans singleton se inyectan en otros beans o componentes que dependen de ellos. Esto asegura que siempre se utilice la misma instancia de un bean en toda la aplicación.

## Patrones estructurales

Describen formas de componer objetos para formar estructuras flexibles y eficientes.

- Adapter
- Bridge
- Composite
- Decorator
- Facade
- Flyweight
- Proxy
		
## Patrones de comportamiento

- Chain of Responsability
- Command
- Interpreter
- Iterator
- Mediator
- Memento
- **Observer:** Este patrón define una dependencia del tipo uno-a-muchos entre objetos, de manera que cuando uno de los objetos cambia su estado, el Observador se encarga de notificar este cambio a resto de los objetos dependientes. El objetivo de este patrón es desacoplar la clase de los objetos clientes del objeto, aumentando la modularidad del lenguaje, así como evitar bucles de actualización. ***Revisar implementación: scr/ts/observer.ts***

- State
- Strategy
- Template Method
- Visitor