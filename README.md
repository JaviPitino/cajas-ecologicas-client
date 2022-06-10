# MiEcocaja

[App Link] https://ecocajas.netlify.app/

## Description

MiEcoCaja es una plataforma para los que buscan una manera más sostenible y ecológica de tener los mejores alimentos.

## Users Stories

-  **404:** Cuando se accede a una página no existente aparece un 404 que nos indica que no existe la página a donde intenta acceder
-  **Signup:** Puedo registrarme en la página para como cliente adquirir MiEcocaja y copmo agricultor añadir Ecocajas para los clientes
-  **Login:** Puedo hacer login y me redirecciona la página según sea agricultor o cliente a mi espacio personal
-  **Logout:** Como usuario puedo cerrar la sesión para que nadie pueda acceder
-  **List Foods** Como usuario (ya sea registrado o no) puedo ver un listado de los alimentos disponibles
-  **Search Foods** Como usuario (ya sea registrado o no) puedo realizar una busqueda de alimentos y ordenarlos
-  **List Farmers** Como usuario tengo acceso a una lista de agricultores y puedo consultar las Ecocajas que ofrece cada uno.
-  **Buy Boxes** Como cliente puedo comprar Ecocajas creadas por los agricultores, gracias a la pasarela de pago
-  **Create Box** Como agricultor puedo crear MiEcocaja para que los clientes puedan tener acceso a ella
-  **Edit Boxes** Como agricultor puedo editar  mis Ecocajas
-  **Delete Boxes** Como agricultor puedo borrar mis Ecocajas
-  **Create Food** Como agricultor puedo puedo añadir nuevos alimentos disponibles en mi huerta

## Backlog

Funcionalidades Admin:
- el administrador tendra acceso a todos los aspectos de borrado de alimentos, clientes, agricultores

Geo Location:
- Ver los agricultores cercanos a la zona en la que ten encuentras
  
# Users

## All Users

- / - Home
- /signup - Signup form
- /login - Login form
- /profile/:id/edit - Edit profile
- /alimentos - food list
- /infocajas - Info by MiEcocaja
- 404

## Client Routes

- /cliente - View Resume
- /miscajas - Boxes buy by client
- /:id/cajas - Box details
- /profile - my details and favorite restaurants


## Farmer Routes

- /agricultor - View Resume
- /alimentos/create - Create new Food
- /cajas - My boxes
- /cajas/create - Box create
- /cajas/:id - Box edit


## Pages

- Home (public)
- InfoBoxes (public)
- FoodList (public)
- FoodDetails (public)
- Signup (anon only)
- Login (anon only)
- Profile (user only)
- ProfileEdit (user only)
- Farmer ( farmer only)
- FarmerBoxes (farmer only)
- Food Create (farmer only)
- BoxCreate (farmer only)
- BoxEdit (farmer only)
- ClientView (client only)
- ClientBoxes (client only)
- BoxDetail (users only)
- 404 Page (public)
- Error (public)

## Components

- Carousel
- Search component (search foods)
- NavbarTop
- IsPrivate - control access
- IsClient - control access
- IsFarmer - control access

## Services

- Auth Service
  - signupService (user) 
  - loginService (user)
  - verifyService ()
  - editProfileService (id, updateUser)
  - getProfileDetailsService (id)
- Box Service
  - addNewBoxService (newBox)
  - findBoxesService ()
  - findBoxesIdFarmer (idFarmer)
  - detailsBoxesService (idBox)
  - editBoxesService (id, box)
  - deleteBoxService (id)
  - deleteFoodInBoxService (idBox, idFood)
- Client Service
  - clientBoxesService ()
- Config Service
- Farmers Service
  - allFarmersService ()
  - oneFarmerService (id)
- Foods Service
  - getAllFoodsService ()
  - addNewFoodService (newFood) 
  - getFoodDetailsService (id)
  - deleteFoodService (id)
  - editFoodService (id, food)
- Profile Services
 - uploadService (uploadForm)

# Server

## Models

User model

```
username - String // required & unique
email - String // required & unique
password - String // required
image - String // default
role - String // enum
```

Food model

```
image - String
name - String // required
type - String // enum & require
season - String // enum & require
```

Box model

```
name - String 
boxmodel - String // enum
client - type & ref
farmer - type & ref
foods - type & ref
price - Number
image - String // default
```

## API Endpoints/Backend Routes



- GET /auth/me
- POST /auth/signup
  - body:
    - username
    - email
    - password
- POST /auth/login
  - body:
    - email
    - password
- POST /auth/logout
  - body: (empty)
- GET /auth/verify
- GET /cajas/:id/
  - payload:
    - _id
- GET /cajas/:id
  - payload:
   - _id
- GET /:id/cajas
  - params:
    - id
- POST /create-payment-intent
  - body:
    - items
- POST /cajas/create
  - body:
    - name
    - boxmodel
    - foods
    - price
- GET /cajas/:id/details
  - params:
    - id
- PATCH /cajas/:id/delteFood
  - params:
    - idBox
    - idFood
- PATCH /cajas/:id/edit
  - params:
    - id
  - body:
    - name
    - boxmodel
    - foods
    - price
- DELETE /caja/:id/delete
  - params:
    - id
- GET /agricultores
- GET /agricultor
- GET /alimentos
- POST /alimentos
  - body:
    - name
    - type
    - season
    - image
- GET /alimentos/:id
  - params:
    - id
- PATCH alimentos/:id
  - params:
    - id
  - body:
    - name
    - type
    - season
    - image
- DELETE /alimentos/:id
  - params:
    - id
- GET /profile/:id
  - payload:
    - _id
- PATCH /profile/:id/edit
  - body:
    - username
    - email
    - image
  - params:
    - id
- POST /

## Links

### Figma

[Link to your Figma board](https://www.figma.com/file/NLwPMchXJTwRMBBjC2E5yo/Healthy-Box?node-id=0%3A1)

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/luthiwd/cajas-ecologicas-client)
[Server repository Link](https://github.com/luthiwd/cajas-ecologicas-server)

[Deploy Link](https://eco-cajas.herokuapp.com/)

### Slides

The url to your presentation slides

[Slides Link](https://docs.google.com/presentation/d/1th0Gt7Xehia_oYJ2vHKbBhos24GrJt4IXieezIaG_Uw/edit#slide=id.p)