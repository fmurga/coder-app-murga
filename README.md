# Trending Preview

![Alt Text](https://github.com/fmurga/coder-app-murga/blob/main/public/assets/images/trending-Facundo-Murga.gif?raw=true)

# Demo de la Tienda
### [`https://ecommerce-trending.netlify.app/`](https://ecommerce-trending.netlify.app/)


# Librerias Instaladas y Tecnologias

* [`React`](https://es.reactjs.org/)
* [`Firebase`](https://firebase.google.com/)
* [`Tailwindcss`](https://tailwindcss.com/)
* [`Netlify`]()


## `headlessui/react`
La libreria provee de componenetes basicos sin estilar que se pueden los cuales se pueden combinar de manera muy comoda con tailwind.css.

## `tailwind.css`
Para el estilado de la página se opto por dicha libreria para agilizar el mismo.

## `firebase`
Se utilizo firebase como base de datos para obtener los productos y guardar las ordenes creadas por los usuarios. 

### Otras: `react-select` utilizado para componentes del tipo select

# Ejecucion de la Aplicación

Para ejecutar el proyecto, el mismo puede descargarse como .zip o clonarlo con:

```git
git clone https://github.com/fmurga/coder-app-murga.git
cd coder-app-murga
```

Instalar las dependencias:

```git
npm install
```

Para poder ejecutar el proyecto se debera cambiar el .env.example por .env y en el mismo incluir las credenciales que se obtienen al crear un proyecto de firebase.

```.env
REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_PROJECT_ID=
REACT_APP_FIREBASE_STORAGE_BUCKET=
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=
REACT_APP_FIREBASE_APP_ID=
```

En firebase se debera incluir dentro de firestore una colección product y una colección links

Ejemplo de product

```json
category: "mujer",
description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
id: "AOTVzNKAhGmUuamGOxhC",
initial: 1,
pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_817298-MLA31993540345_082019-O.webp",
price: 1500,
sizeSelected: [],
sizes: [{inStock: false, name: "XXS", stock: 120}],
title: "Saco Beige",
```

Ejemplo de links
```json
name: "Categorias",
path: "category",
subcategories: [{id: 1, name: "Mujer", path: "mujer"}]
```


