# Proyecto Pizzería Mamma Mía! | Academia Desafío LATAM

Proyecto individual, separado por **Hitos**, para el módulo de **React** de la carrera **Desarrollador Front-End** de **Academia Desafío Latam**.

## Hito 7

En este Hito validaremos nuestros conocimientos de React Router II. Para lograrlo, necesitarás aplicar los conocimientos adquiridos hasta el momento.

Lee todo el documento antes de comenzar el desarrollo individual, para asegurarte de tener el máximo de puntaje y enfocar bien los esfuerzos.

Tiempo asociado: 2 horas cronológicas.

### Descripción

En este hito seguiremos trabajando con React Router, implementaremos rutas protegidas y vamos a utilizar el hook useParams para obtener el id de la pizza en la página de Pizza.jsx.

Para este hito vamos a utilizar el siguiente endpoint de la API de pizzas:

```javascript
    GET /api/pizzas/:id
```

### Requerimientos

1.	Implementa useParams para obtener el id de la pizza en la página de Pizza.jsx. Con el id obtenido, realiza una petición a la API para obtener la información de la pizza y mostrarla en la página. (2 puntos)

Tips: Puedes además implementar Link en el componente CardPizza.jsx para redirigir a la página de Pizza.jsx con el id de la pizza.

2.	Crea un UserContext para almacenar el token (simulado) que estamos utilizando en el Navbar.jsx, Por ahora este context tiene que tener las siguientes características:

-	Un estado que almacene el token, por defecto, estará en true.
-	Un método logout que cambie el estado del token a false.

(2 puntos)

3.	Utiliza el UserContext en el Navbar.jsx, al hacer click en el botón de logout, se debe ejecutar el método logout. (2 puntos)

Tips: Recuerda que cuando el token es true, debe mostrar los botones de: Profile, Logout. Cuando el token es false, debe mostrar los botones de: Login, Register. Home y Total siempre deben estar visibles.

4.	Utiliza el UserContext en la página de Cart.jsx, deshabilita el botón "pagar" en caso de que el token sea false. (1 punto)

5.	Implementa la ruta protegida para "/profile". Si el token es false, redirige a "/login". Además, si el token es true, los usuarios no deberían poder acceder a la página de login y register (los puedes redirigir al home). (3 puntos)


## Lenguajes utilizados

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
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