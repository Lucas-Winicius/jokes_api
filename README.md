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

### *`/?page=1 - GET`*
This route does not require prior login and will return all the posts with their respective authors. Remember to declare the page; otherwise, it will always be set to 1.

**Parameters on body:**
 - `none`

### *`/user - POST`*
This route will create a new user with the unique 'name' field and will send a login cookie that will be used in the next routes.

**Parameters on body:**
 - `name`
 - `password`

### *`/user - GET`*
This route will use the login cookie to return all the information of the logged-in user, such as their name and all associated posts.

**Parameters on body:**
 - `none`

### *`/user - PATCH`*
Also, using the login cookie, this route will modify the user's data, such as password or name. After using this route, it will be necessary to log in again.

**Parameters on body:**
 - `name`
 - `password`

### *`/user - DELETE`*
Using the login cookie, this route will delete the logged-in user.

**Parameters on body:**
 - `none`

### *`/session - POST`*
This route will return a login cookie to you.

**Parameters on body:**
 - `name`
 - `password`

### *`/session - DELETE`*
This route will delete your login cookie.

**Parameters on body:**
 - `none`

### *`/post - POST`*
This route will create a new post and associate it with you.

**Parameters on body:**
 - `title`
 - `joke`

### *`/post/:id - GET`*
This route will return the post specified by the id.

**Parameters on body:**
 - `none`

### *`/post/:id - PATCH`*
Using the login cookie, this route will edit the post, remembering that this post must belong to you.

**Parameters on body:**
 - `title`
 - `joke`

### *`/post/:id - DELETE`*
Using the login and post id, this route will delete the post.

**Parameters on body:**
 - `none`

## *Final considerations*

 It is important to note that the routes with the 'DELETE' method will not actually delete they will only update the value of the 'deleted' column to true.

 This project could have been much more complex, but since I just wanted to create a simple and quick project, I ended up leaving it this way. Nonetheless, regardless of everything, I hope you all enjoy it. ❤️
 
<hr/>

**Thank you for reading up to this point.**

<div style="display: flex;">
  <a href="https://www.linkedin.com/in/lucas-winicius-03571725a"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a>
  <a href="https://instagram.com/sr_pumpkin_"><img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white"></a>
</div>
