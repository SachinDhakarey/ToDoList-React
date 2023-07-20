# React To-Do List App

This is a simple To-Do List application built with React.js. You can use it to keep track of your tasks, mark them as completed, and easily manage your daily activities. The app provides an intuitive user interface that allows you to add, complete, and remove tasks efficiently.

## Features

- Add new tasks: Enter your tasks in the input field and press "Enter" or click the "Add" button to add them to your To-Do list.
- Mark tasks as completed: Click on the tasks under the "In Progress" section to move them to the "Completed" section when they are done.
- Remove tasks: If you no longer need a task, click on it under either section to remove it from your list.
- Responsive design: The app is designed to work seamlessly on various devices, including desktops, tablets, and mobile phones.

## Live Demo

You can check out the live demo of the app hosted on Netlify: [React To-Do List App](https://reactjs-todolist-sachindhakarey.netlify.app/)

## Getting Started

To run the application locally on your machine, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/SachinDhakarey/ToDoList-React.git
   ```

2. Navigate to the project directory:
   ```
   cd ToDoList-React
   ```

3. **Important Note**: Before running the application, make sure to export the `NODE_OPTIONS` environment variable with the value `--openssl-legacy-provider`. You can do this by running the following command:

  ```
   export NODE_OPTIONS=--openssl-legacy-provider
  ```

   **Why is this necessary?**: The `--openssl-legacy-provider` option ensures that Node.js uses the legacy OpenSSL provider, which resolves a potential error related to the usage of cryptographic functionality in Node.js applications with certain dependencies like `webpack` and `babel`. This step is crucial for running the app without any issues.

4. Install the required dependencies:

  ```
   npm install
  ```

8. Start the development server:

  ```
   npm start
  ```
   This will start the app in development mode. Open [http://localhost:3000](http://localhost:3000) in your web browser to view the app.

## Technologies Used

- Javascript
- React.js
- HTML5
- CSS3
- Netlify (for deploying live project)

## Contribution

If you find any issues, have suggestions, or want to contribute to the project, feel free to open an issue or create a pull request. Your contributions are greatly appreciated!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to explore the app, contribute, or use it as a starting point for your own To-Do List application. Happy organizing and task managing!
