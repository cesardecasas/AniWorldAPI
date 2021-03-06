# AniWorldAPI


### ERD Models

![ERD](./img/ERD.jpeg)

Base Url 
```
https://aniworld-api.herokuapp.com
```


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
GET | get user info | api/user/getuser/:id | id:user_id | User Object

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
PUT| Remove item from array | api/list/remove/:id | type:String(manga or anime), arr:Array(new array), id:user_id | List Object 


Comment Object Example

```
"id": 2,
    "user_id": 2,
    "owner_id": "343345",
    "type": "anime",
    "content": "I love the anime",
    "createdAt": "2021-11-10T17:39:11.474Z",
    "updatedAt": "2021-11-10T17:39:11.474Z"
```

### Comment

Request | Use | Route | Parameters | Return
-----|-----|-----|-----|-----|
GET | Get comments from anime/manga/comments | /api/comment/getall/:id | id:int | Array of Comment objects 
GET | Get comments from an specific user | /api/commment/getuser/:id | id:user_id | Array of Comment
PUT | Edit content from Comment | /api/comment/edit/:id | id:comment_id, content:String | Return edited comment
POST | Create comment | /api/comment/create | user_id:Int, owner_id:Int, type:String(manga, anime or comment), content:String | Comment Object 
DELETE | Delete comment | /api/comment/delete/:id | id:comment_id | msg:successfully deleted