# Shortly-Next

![Shortly-Next Demo Image](https://github.com/bryamjesus/shortly-next/blob/main/public/shortly.png?raw=true)
_(Considera reemplazar este placeholder con una captura de pantalla real de tu aplicación funcionando)_

## Descripción del Proyecto

**Shortly-Next** es una moderna y eficiente aplicación de acortamiento de URLs, diseñada para transformar enlaces largos y difíciles de recordar en URLs cortas y fáciles de compartir. Construida con un stack de tecnologías robusto y popular, esta aplicación no solo acorta enlaces, sino que también ofrece una interfaz de usuario intuitiva para gestionar tus URLs creadas.

El proyecto está diseñado para ser escalable, fácil de mantener y extensible, aprovechando al máximo las capacidades de Next.js para un renderizado eficiente tanto en el cliente como en el servidor, y Redux Toolkit para una gestión de estado predecible.

## Características Principales

- **Acortamiento de URLs:** Convierte rápidamente URLs largas en enlaces cortos y personalizados.
- **Historial de URLs:** Visualiza y gestiona todas las URLs que has acortado en una lista organizada.
- **Copia al Portapapeles:** Copia con un solo clic las URLs acortadas directamente al portapapeles.
- **Persistencia de Datos:** Las URLs acortadas se almacenan de forma persistente en una base de datos MongoDB.
- **Diseño Responsivo:** Interfaz de usuario adaptable que funciona a la perfección en dispositivos móviles y de escritorio.
- **Validación de URLs:** Asegura que solo se acorten URLs válidas.
- **Manejo de Errores:** Retroalimentación clara al usuario en caso de errores en la API o validación.

## Tecnologías Utilizadas

Este proyecto se ha construido utilizando un stack de tecnologías moderno y de alto rendimiento:

- **Frontend:**
  - [Next.js](https://nextjs.org/) (App Router): Framework de React para aplicaciones web robustas y optimizadas.
  - [React.js](https://react.dev/): Biblioteca de JavaScript para construir interfaces de usuario.
  - [TypeScript](https://www.typescriptlang.org/): Lenguaje que añade tipado estático a JavaScript para un código más robusto.
  - [Redux Toolkit](https://redux-toolkit.js.org/): Conjunto de herramientas oficial para un desarrollo Redux eficiente.
  - [Tailwind CSS](https://tailwindcss.com/): Framework CSS de primera utilidad para un diseño rápido y responsivo.
- **Backend:**
  - [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/api-routes): Para manejar las operaciones de la API (acortar URL, almacenar en DB).
  - [Node.js](https://nodejs.org/): Entorno de ejecución de JavaScript.
- **Base de Datos:**
  - [MongoDB](https://www.mongodb.com/): Base de datos NoSQL flexible y escalable.

## Cómo Empezar

Sigue estas instrucciones para configurar y ejecutar el proyecto en tu entorno local.

### Prerrequisitos

Asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/en/download/) (versión 18 o superior recomendada)
- [npm](https://www.npmjs.com/get-npm) (normalmente viene con Node.js) o [Yarn](https://yarnpkg.com/lang/en/docs/install/)

### Instalación

1.  **Clona el repositorio:**

    ```bash
    git clone [https://github.com/bryamjesus/shortly-next.git](https://github.com/bryamjesus/shortly-next.git)
    cd shortly-next
    ```

2.  **Instala las dependencias:**
    ```bash
    npm install
    # o si usas yarn
    # yarn install
    ```
