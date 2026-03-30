# Proyecto Pizzería Mamma Mía! | Academia Desafío LATAM

Proyecto individual, separado por **Hitos**, para el módulo de **React** de la carrera **Desarrollador Front-End** de **Academia Desafío Latam**.

## Hito 1

### Instrucciones dadas:

A continuación, realizaremos un proyecto con React, el cual estará dividido en Hitos. A lo largo de las distintas unidades de contenido, estos hitos serán desarrollados.

Para esta etapa inicial, nos solicitan las siguientes implementaciones:

- Crear un nuevo proyecto de React con Vite.js
- Incorporar Bootstrap a nuestro proyecto. (Opcional o según preferencia)
- Se tendrán los siguientes componentes:

    - Navbar
    - Footer
    - Home
    - Header
    - CardPizza

### Requerimientos:

1. En el componente App.jsx se mostrarán los componentes Navbar, Home y Footer. (2 Puntos)

2. Crear un componente llamado Header.jsx. Este componente tiene que ser llamado al interior de Home.jsx y debe contener un título y una descripción. (1 Punto)

3. Crear el componente Navbar.jsx, este componente debe contener un menú de navegación con las siguientes opciones (2 Puntos)

- 🍕 Home
- 🔓 Profile
- 🔒 Logout
- 🔐 Login
- 🔐 Register
- 🛒 Total: $

Es importante considerar que este componente debe ser llamado en App.jsx. Además, debes incorporar dos variables al interior de este componente:

```javascript
    const Navbar = () => {
        const total = 25000;
        const token = false;
        return (
        ...
        );     
    };

    export default Navbar;
```

#### La variable token

El token es una variable booleana que nos indicará si el usuario está logueado o no, por ahora es solo una simulación.

Si el usuario está logueado, se mostrarán los botones de 🔓 Profile y 🔒 Logout, en caso contrario, se mostrarán los botones de 🔐 Login y 🔐 Register.

**Tip:** Recuerda que puedes utilizar el operador ternario para esto.

#### La variable total

La variable total es un número que representa el total de la compra (por ahora un valor fijo), este debe ser mostrado en el botón de 🛒 Total: $.

Además, debe estar formateado con el separador de miles, ej: 25.000.

**Tip:** Puedes utilizar la función toLocaleString para esto. Tip: Puedes llevar esto a una función en la carpeta utils o helpers para reutilizarlo en otros componentes.

4. Deberán existir los Botones Home y Total. Los botones de Home y Total no dependen del token, por lo que siempre deben ser mostrados, independiente si el token es true o false. (2 Puntos)

5. Componente CardPizza.jsx, este componente debe contener la información de una pizza, como el nombre, precio, imagen, etc. Para esta operación tendrás que llamar a tres componentes desde Home.jsx con los siguientes props: (2 Puntos)

```javascript

    <CardPizza
        name="Napolitana"
        price={5950}
        ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
        img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
    />
    <CardPizza
        name="Española"
        price={6950}
        ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
        img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
    />
    <CardPizza
        name="Pepperoni"
        price={6950}
        ingredients={["mozzarella", "pepperoni", "orégano"]}
        img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"
    />
```
**Nota:** Los botones de Ver más y Añadir no tienen funcionalidad por ahora.

6. El componente Footer.jsx debe contener (1 Punto):

    - © 2021 - Pizzería Mamma Mia! - Todos los derechos reservados
    - Deberá ser llamado en el App.jsx
    - Puedes agregar la información que consideres necesaria.

## Lenguajes utilizados

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![Javascript](https://shields.io/badge/JavaScript-F7DF1E?logo=JavaScript&logoColor=000&style=flat-square)](https://developer.mozilla.org/es/docs/Web/Javascript)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)

## Herramientas utilizadas

[![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/)
[![NPM](https://img.shields.io/badge/NPM-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

## 👨‍💻 Autor
Fernando González Díaz - Diseñador web / Desarrollador Front-End

---

*Proyecto desarrollado como parte del bootcamp Full Stack JavaScript de Desafío Latam - 2026*