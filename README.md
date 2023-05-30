# ECOMMERCE - Backend
>First of all, I would like to inform you that this project is intended to be a relatively simple project. For this reason, in some cases, proper treatment was not carried out. Nonetheless, I hope you still enjoy it. 😺 <br/>   - Lucas Winicius

<hr/>

## **Installation guide**

### Cloning the repository and installing dependencies:

```bash
git clone https://github.com/Lucas-Winicius/jokes_api.git
```

```bash
cd jokes_api
```

**Install dependencies:**

```bash
npm install
```
Now that everything is installed, let's configure the environment variables.
<hr/>

## *Configuring the `.env` file.*
Create a file called **.env** at the root of the project, following the parameters of the **.env.example** file.
```bash
PORT=3000
DATABASE_URL=
JWT_SECRET=
COOKIE_SIGNATURE=
COOKIE_NAME=
```

## *Starting the project.*
To do this, it's very simple. Just execute the commands below. The first one will create the database migrations, and the second one will start your project on the port defined in the .env file.

```bash
npm run build
```

```bash
npm run start
```

For development, I recommend the command below:

```bash
npm run start:dev
```
With all the steps complete, we now need to understand a little about all the routes. Or, if you prefer to understand on your own, just read the files inside **/src/router.js**.

## *Routes*

### *`/user - POST`*

**Parameters on body:**
 - `password` - *a*
<hr/>

**Thank you for reading up to this point.**

<div style="display: flex;">
  <a href="https://www.linkedin.com/in/lucas-winicius-03571725a"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a>
  <a href="https://instagram.com/sr_pumpkin_"><img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white"></a>
</div>
