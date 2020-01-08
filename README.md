# back-end

API Endpoint
https://weight-lift-journal.herokuapp.com/api/



## Authentication

| Endpoint        | Method | Notes                                                                                                                                                                                                                                                                                                                                                                                                          |
|-----------------|--------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|  /auth/signup | POST   | Expects `{ first_name, email, password }`. <ul>  <li>`201` if registration was successful. <ul><li>Responds with `{ id }, first_name }, passwor}, rol}`.</li></ul> </li>  <li>`500` if required information is missing.</li> </ul>                                                                |
| /auth/login     | POST   | In your axios' `post` call, add a 3rd parameter, which is an object that contains an `auth` object. That `auth` object should contain `email` and `password`.  <ul>  <li>`200` if login was successful.</li>  <li>`404` if the user was not found. <ul><li>Responds with `{ message }`.</li></ul> </li>  <li>`401` if login info is incorrect. <ul><li>Responds with `{ message }`.</li></ul>  </li> </ul> |
| /auth/logout | GET | <ul><li><code>200</code> on successful logout.</li></ul>
|                 |        |                                                                                                                                                                                                                                                                                                                                                                                                             
## Journal Entries
| Endpoint   | Method | Notes                                                                                                                                                                                                                                                                                                                |
|------------|--------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| /journals    | GET    | <ul>  <li> <code>200</code> with an array of journal entries.  </li>  </ul>                                                                                                                                                                                                                                                |
| /journals     | POST   | <ul><li><code>201</code> if creation was successful.<ul><li>Responds with the created entry.</ul></ul>                                                                                                                                                                                                                |
| /journals/:id | PUT    | <ul>  <li>  <code>200</code> if the list with the specified <code>id</code> was updated. <ul><li>Responds with { message }.</li></ul>  </li>  <li> <code>404</code> if the list with the specified <code>id</code> could not be found. <ul><li>Responds with <code>{ message } </code>.</li></ul>  </li>  </ul> |

| /journals/:id | DELETE | <ul> <li> <code>204</code> if the list with the specified <code>id</code> was deleted. </li>  <li> <code>404</code> if the list with the specified <code>id</code> could not be found. <ul><li>Responds with <code>{ message } </code>.</li></ul> </li>  </ul> |                                                      |
