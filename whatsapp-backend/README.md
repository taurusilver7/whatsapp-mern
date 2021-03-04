## Whatsapp Back-end

> A community chat application server-side development.

- The server-acting file & database object-model file created for intermediate vetween server & dataase mongodb is ORM mongoose.

## dependencies

- node-js
- express
- cors
- mongoose
- pusher

### Real-time database using MongoDB & pusher

- The real-time functionality is performed using mongoDB's change-stream & pusher.
  Once a change occurs in mongodb's chained collection, it fires-off change-stream which fires-off pusher which in0-turn fires-off axios(fetch function,) on the front to render the page to display the chats.

- The mongodb is not a real-time database. For real-time functionality, pusher introduces mongodb change-stream which is set to a collection.
- when a change is noticed in the collection(add/rem data), change-stream triggers the pusher with (add/rem data), connect it to the front-end & force pushes the data to the front-end.
- copy the front-end snippet to the App.js (where the post req is made) & the back-end snippet to the server-js (to connect pusher to the dataabase via server.)
