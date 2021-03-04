# Whatsapp MERN Clone

> The message service application powered by react on front-end, node-express on back-end & real-time with mongodb & pusher, hosted on firebase.

## About the Application

> WhatsApp Messenger, or simply WhatsApp, is an American freeware, cross-platform centralized messaging and voice-over-IP service owned by Facebook, Inc. It allows users to send text messages and voice messages, make voice and video calls, and share images, documents, user locations, and other content.

## Stock

- [chat-background](https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png)
- [chatroom-avatars](https://avatars.dicebear.com/4.5/api/human/<0-9a-z>.svg)
- [user-displayPic](https://i.pinimg.com/originals/5e/a0/76/5ea07679d8287856c1ab14ef393766c2.jpg)

## Dependencies

- material-ui
- mongoose
- express
- nodemon
- pusher (for backend)
- pusher-js (for front-end)

## Components

- Sidebar (header & chatbar component) (35%)
- SidebarChat (chatbar in sidebar)
- Chats (text messages component) (65%)

### Real-time database using MongoDB & pusher

- The real-time functionality is performed using mongoDB's change-stream & pusher.
  Once a change occurs in mongodb's chained collection, it fires-off change-stream which fires-off pusher which in0-turn fires-off axios(fetch function,) on the front to render the page to display the chats.

- The mongodb is not a real-time database. For real-time functionality, pusher introduces mongodb change-stream which is set to a collection.
- when a change is noticed in the collection(add/rem data), change-stream triggers the pusher with (add/rem data), connect it to the front-end & force pushes the data to the front-end.
- copy the front-end snippet to the App.js (where the post req is made) & the back-end snippet to the server-js (to connect pusher to the dataabase via server.)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)