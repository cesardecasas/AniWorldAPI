# AniWorldAPI


User Object Example
``` 
{
    "id": 1,
    "email": "example@email.com",
    "password_digest": "$2b$12$DJ1.rb21Ua/HA9qyHqCjvuE8O2yyc3yJ0zWk2BX0TyRQDxaHUyg8S",
    "userName": "John Doe",
    "profilePic": 'random/link.jpeg',
    "createdAt": "2021-11-04T17:35:44.009Z",
    "updatedAt": "2021-11-04T17:35:44.009Z"
  }
```
### Auth 

Request |Use | Route | Parameters | Return
-----|---- | ---- | ----- |----
POST |create account | api/user/register | email:String userName:String password:String | User object
POST |Log in | api/user/login | email:String password:String | user object and token 
GET |check session | api/user/session | token(returned when logged in) | true/false currentUser information
DELETE | delete User | api/user/delete/:id | user_id:Int | msg:'successfully deleted'

List Object Example
``` 
{
  "id": 2,
  "anime_id": [
    "343345"
  ],
  "manga_id": [
    "343345"
  ],
  "user_id": 1,
  "createdAt": "2021-11-09T17:07:27.221Z",
  "updatedAt": "2021-11-09T17:11:00.709Z"
}
```
### List 

Request | Use | Route | Parameters | Return
-----|-----|-----|-----|-----|
POST|Create list | api/list/create/:id | user_id:Int | List Object 
GET|Get list  | api/list/get/:id | user_id:int | List Object 
PUT|Add item to manga/anime array | api/list/update/:id|user_id:Int, type:String(manga or anime), newItem:String | updated List object 