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

- **Factory Method:**
- **Prototype:**
- **Singleton:** Es un patrón que te asegura que una clase solo tiene una instancia. Esta única instancia puede ser consumida por cualquier otro objeto.

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