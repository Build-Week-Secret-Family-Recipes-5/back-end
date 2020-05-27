### Secret Family Recipes ###

Backend Project for Lambda School's Build Week, deployed Link is https://back-end-build-weeks.herokuapp.com/

**/--------------------------------------------/ AUTH ROUTES /-----------------------------------/**

**Register a User**
_method url_: `/api/auth/register`

_http method_: **[POST]**

#### Headers

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `Content-Type` | String | Yes      | Must be application/json |

#### Body

| name         | type   | required | description            |
| ------------ | ------ | -------- | --------------         |
| `username`   | String | Yes      | Must be unique         |
| `email`      | String | Yes      | Must be unique         |
| `password`   | String | Yes      | Must be unique         |


#### Example

```
{
	"username": "samim2020",
	"email": "samim2020@gmail.com",
	"password": "samim2020"
}
```

#### Response

##### 201 (Created)

###### Example Response

```
{
  "id": 3,
  "username": "samim2020",
  "email": "samim2020@gmail.com",
  "password": "$2a$16$JHcX.XNj8bppwVij5ypXTunk/MR2qTRNXQ43IuRBt/JjlGOEbOCxe"
}
```

##### 409 (Conflict)

```
  {
    "message": "User is already taken!"
  }
```

**/----------------------------------------/**

### **Login a User**

_method url_: `/api/auth/login`

_http method_: **[POST]**

#### Headers

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `Content-Type` | String | Yes      | Must be application/json |

#### Body

| name       | type   | required | description             |
| ---------- | ------ | -------- | ----------------------- |
| `username` | String | Yes      | must be registered user |
| `password` | String | Yes      |                         |

#### Example

```
{
	"username": "samim2020",
	"password": "samim2020"
}
```

#### Response

##### 200 (Ok)

> no issues logging in

###### Example response

```
{
  "message": "You logged in successfuly!"
}
```

##### 401 (UnAuthorized)

```
  {
    message: "Invalid credentials"
  }
```

##### 500 (Bad Request)

```
  {
    message: "Error logging in",
    error: {
      "errno": 1,
      "code": "SOME_ERROR"
    }
  }
```