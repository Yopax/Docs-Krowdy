---
sidebar_position: 1
---

# Web Scraping

El scraping puede realizarse tanto en el lado del servidor **(server-side)** como en el lado del cliente **(client-side)**, cada uno con sus particularidades y aplicaciones específicas.

## Server Side

Este enfoque ejecuta el scraping directamente en el servidor, sin interacción directa con el navegador del usuario. Los scripts en server-side, generalmente escritos en lenguajes como Python, Node.js o PHP, envían solicitudes HTTP a las páginas, obtienen el HTML, y luego analizan el contenido.

### Flujo de trabajo
```mermaid
    A[Inicio del Script] --> B[Enviar solicitud HTTP al sitio web]
    B --> C[Recibir HTML de la página]
    C --> D[Analizar el HTML con librerías (ej. Cheerio, BeautifulSoup)]
    D --> E[Extraer datos específicos]
    E --> F[Almacenar datos en la base de datos o archivo]
    F --> G[Usar o procesar datos obtenidos]
```
### Herramientas

- Puppeteer o Selenium-Zalenium:
  - En pocas palabras son herramientas que nos permiten controlar el navegador, Ademas las cosas que pueden hacer ambos son muy parecidas , obvio con sus respectivas diferencias, no hay una herramienta mejor que otra, todo va a depender de tus necesidades o las del proyecto donde te encuentres trabajando.

  - Tal vez el soporte a diferentes navegadores sea muy importante para ti, entonces lo mejor será selenium, pero si tu aplicación sólo ofrece soporte para chrome y te preocupa la velocidad de ejecución de las pruebas , entonces con puppeteer estas mas que cubierto con los navegadores con base chromium (chrome, opera, edge) ya que si bien no puedes controlar en específico estos navegadores, muchas veces lo que corre en chrome o chromium correrá en estos navegadores sin problemas. **(Platzi, 2021).**

- Scrapy
  - De acuerdo ala documentacion oficial Scrapy "es  un marco colaborativo y de código abierto para extraer los datos que se necesita de los sitios web." **(Docs Scrapy, 2024).**

- Cypress:
  - Es un potente marco de pruebas de extremo a extremo, pero también se puede utilizar para tareas de extracción de datos web.

### Planeamiento

Para la planificación, se debe tener en cuenta si el navegador al que se planea scrapear es SPA o no, ya que un navegador **SPA(Single Page Applications)** **carga contenido dinámicamente** mediante JavaScript, lo que requiere herramientas como Selenium o Puppeteer para ejecutar el JavaScript y extraer los datos correctamente. 

En cambio, en sitios **sin SPA (Multi Page Applications), el contenido se carga de forma estática** en cada solicitud de página, lo que permite usar herramientas más simples como BeautifulSoup o Scrapy, ya que no necesitan ejecutar JavaScript. 

La estrategia de scraping depende del tipo de aplicación: en SPAs, necesitas esperar a que el contenido cargue dinámicamente, mientras que en sitios sin SPA, puedes acceder directamente al HTML estático.

## Client Side

Hacer scraping client-side mediante Chrome extensions es una técnica efectiva cuando el scraping necesita ejecutarse directamente en el navegador del usuario, permitiendo interacciones en tiempo real y aprovechando las capacidades del navegador. Este método es útil cuando el contenido de una página es dinámico y depende de la interacción del usuario o de la carga de JavaScript.

### Conceptos Basicos
- JavaScript: El Lenguaje del Navegador
  - Es el lenguaje de programación principal para el desarrollo web, usado para agregar interactividad y dinamismo a las páginas web. En el contexto de scraping, JavaScript permite manipular el DOM (Document Object Model), que es la representación estructurada del contenido de una página en el navegador. Gracias a su integración en los navegadores, JavaScript es clave para obtener y manipular datos directamente desde las páginas web, estas son algunas de las características importantes de JavaScript para scraping:

    - **Manipulación del DOM:** JavaScript te permite acceder y modificar los elementos HTML de una página web. Por ejemplo, puedes seleccionar un elemento con document.querySelector() y cambiar su contenido.
    - **Asincronía con Promesas y async/await:** Con JavaScript, puedes manejar peticiones de red asíncronas, lo cual es útil para trabajar con contenido cargado dinámicamente en una página web.
    - **Compatibilidad con Herramientas de Scraping:** Herramientas de scraping como Puppeteer o Chrome Extensions pueden ejecutar scripts en JavaScript para interactuar con el navegador y realizar tareas automatizadas.

- CSS Selectors: Navegando en el DOM de Forma Eficiente
  - Los selectores CSS son una herramienta fundamental en el scraping porque nos permiten acceder a los elementos específicos dentro del DOM de la página. Son las reglas que definen qué elementos HTML se seleccionarán para aplicar estilos o manipular contenido. Usar selectores CSS es la forma más eficiente de extraer información específica de una página web.

    - **Selector de Clase (.class-name):** Selecciona todos los elementos con una clase específica.
    - **Selector de ID (#id-name):** Selecciona un elemento único con un ID específico.
    - **Selector de Elemento (tag-name)** Selecciona todos los elementos de un tipo específico, como div, p, a, etc.
    - **Selectores Anidados (element element):** Selecciona elementos que están anidados dentro de otros elementos, como div p para seleccionar todos los p dentro de div. Ejemplo: Para obtener el texto de todos los elementos h1 en una página, puedes usar document.querySelectorAll("h1") en JavaScript.

- HTML: La Estructura de las Páginas Web
  - HTML (HyperText Markup Language) es el lenguaje de marcado utilizado para estructurar el contenido de una página web. Con HTML, definimos los títulos, párrafos, enlaces, imágenes, y mucho más, lo cual hace que sea el núcleo de la mayoría de las páginas web. Entender HTML es fundamental para scraping, ya que necesitas conocer cómo están organizados los datos que deseas extraer.

    - **Etiquetas:** Son la base del HTML, como &lt;div&gt;, &lt;p&gt;, &lt;a&gt;, &lt;h1&gt;, etc.
    - **Atributos:** Proporcionan información adicional a las etiquetas. Por ejemplo, class, id, y data-* son atributos comunes que facilitan la selección de elementos en el scraping.
    - **Estructura Jerárquica:** HTML organiza el contenido en una estructura de árbol, lo cual permite navegar a través de los elementos anidados utilizando selectores CSS y JavaScript. Ejemplo: Para extraer el contenido de un párrafo con id="description", puedes usar document.querySelector("#description").textContent.

- Lenguaje de Programación: El Motor detrás de los Scripts de Scraping
  - Un lenguaje de programación proporciona las instrucciones para ejecutar tareas de manera estructurada, como la extracción y manipulación de datos. Aunque JavaScript es el lenguaje predominante en el navegador, existen otros lenguajes como Python que se usan frecuentemente para el scraping en el lado del servidor.
    - **Integración con el Navegador:** JavaScript está optimizado para manipular el DOM y ejecutar funciones específicas del navegador.
    - **Interactividad en Tiempo Real:** JavaScript permite ejecutar código en el mismo entorno en el que se carga la página, lo cual es ideal para interactuar con elementos dinámicos.
    - **Compatibilidad con Extensiones y Herramientas de Scraping:** Muchas extensiones de Chrome y herramientas como Puppeteer están basadas en JavaScript, lo que facilita la automatización y extracción de datos.


### Flujo de trabajo
```mermaid
    A[Inicio del Script] --> B[Enviar solicitud HTTP al sitio web]
    B --> C[Recibir HTML de la página]
    C --> D[Analizar el HTML con librerías (ej. Cheerio, BeautifulSoup)]
    D --> E[Extraer datos específicos]
    E --> F[Almacenar datos en la base de datos o archivo]
    F --> G[Usar o procesar datos obtenidos] **(por modificasr)**
```

### Planeamiento

**por modificar** - ....fgsadasd