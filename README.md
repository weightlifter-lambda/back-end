# back-end

API Endpoint
https://weight-lift-journal.herokuapp.com/api/


| Endpoint   | Method | Notes                                                                                                                                                                                                                                                                                                                |
|------------|--------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| /journals    | GET    | <ul>  <li> <code>200</code> with an array of journal entries.  </li>  </ul>                                                                                                                                                                                                                                                |
| /journals     | POST   | <ul><li><code>201</code> if creation was successful.<ul><li>Responds with the created entry.</ul></ul>                                                                                                                                                                                                                |
| /journals/:id | PUT    | <ul>  <li>  <code>200</code> if the list with the specified <code>id</code> was updated. <ul><li>Responds with { message }.</li></ul>  </li>  <li> <code>404</code> if the list with the specified <code>id</code> could not be found. <ul><li>Responds with <code>{ message } </code>.</li></ul>  </li>  </ul> |

| /journals/:id | DELETE | <ul> <li> <code>204</code> if the list with the specified <code>id</code> was deleted. </li>  <li> <code>404</code> if the list with the specified <code>id</code> could not be found. <ul><li>Responds with <code>{ message } </code>.</li></ul> </li>  </ul>                                                       |
