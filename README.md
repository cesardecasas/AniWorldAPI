# AniWorldAPI

### Auth 

Use | Route | Parameters | Return
---- | ---- | ----- |----
create account | api/user/register | email:String userName:String password:String | User object
Log in | api/user/login | email:String password:String | user object and token 
check session | api/user/session | token(returned when logged in) | true/false currentUser information