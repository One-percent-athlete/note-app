CRUD => CREATE READ UPDATE DELETE

/ => read all the note/tasks

/ => create(post) => create a note/tasks

/:uniqueID => read(get) => send the note related to this uniqueID

/:uniqueID => update(post/put/patch) => update the note related to this uniqueID

/:uniqueID => delte(delete) => delete the note related to this uniqueID

HTTP request methods

GET: used to retrieve data from the server. This method is the most commonlkly used HTTP method and is typically used to fetch information from a server without modifying any data.

POST: Used to send data to the server. This method is typically used to submit information or to create a new record to the server.

PUT: used to update data on the server. This method is used to update an existing resource on the server.

PATCH: Same like put but update partially.

DELETE: used to delete data on the server. This method is used to remove a resource from the server.

Put vs Patch

The HTTP PUT and PATCH methods are both used to update resources on a server, but they have different meanings and uses.

MVC Pattern

Model View Controller