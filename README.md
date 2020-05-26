### Secret Family Recipes ###

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

##### 201 (created)

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