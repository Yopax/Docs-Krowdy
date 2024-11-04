---
sidebar_position: 2
---

# Chrome Extensions

Las extensiones de Chrome mejoran la experiencia de navegación mediante la personalización de la interfaz de usuario, la observación de eventos del navegador y la modificación de la Web. Visita Chrome Web Store para ver más ejemplos de lo que pueden hacer las extensiones.

## Arquitectura

la arquitectura básica de una extensión de Chrome y muestra cómo los diferentes archivos interactúan entre sí, lo cual es relevante para tareas de scraping web. Aquí está la explicación de cada componente:

- **background.js**: Este archivo corre en segundo plano y gestiona eventos persistentes. Puede realizar operaciones constantes mientras la extensión está activa, como mantener conexiones abiertas, enviar solicitudes, y escuchar eventos del navegador. En el contexto de scraping, podría encargarse de manejar las solicitudes de datos o coordinar la comunicación entre las otras partes de la extensión.
- **popup.html:** Este archivo define la interfaz de usuario de la extensión cuando se abre (haciendo clic en el icono de la extensión). Aquí puedes agregar botones o inputs para configurar opciones de scraping, como URL o parámetros de búsqueda.
- **popup.js:** Controla el comportamiento y las interacciones en el popup.html. Desde aquí, podrías activar scripts de scraping o iniciar la comunicación con otros componentes de la extensión (por ejemplo, background.js o contentScript.js).
- **contentScript.js:** Este script se inyecta en las páginas web y tiene acceso directo al DOM de esas páginas, lo cual es esencial para realizar scraping. Aquí puedes seleccionar y extraer datos de la página (por ejemplo, elementos como h4, div, etc.). Los datos extraídos pueden enviarse a background.js o popup.js para procesarlos o mostrarlos.

## Manifest

```
{
  "manifest_version": 3,
  "name": "Hello Extensions",
  "description": "Base Level Extension",
  "version": "1.0",
  "action": {
    "default_popup": "hello.html",
    "default_icon": "hello_extensions.png"
  }
}
```
