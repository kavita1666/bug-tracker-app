# Bug/Task Tracker Application

## Overview

The Bug/Task Tracker Interface is a web application designed to manage software development tasks efficiently. Built using React.js, this application streamlines task tracking, bug reporting, and time management with role-based access control for developers and managers.

link to site: https://bug-tracker-kavita.netlify.app/

login credentials: 
  username: **admin** 
  password: **password**

## Features

### User Authentication & Roles

- Mock authentication with hardcoded credentials or JSON-based login.
- Role-based access control with Developer and Manager roles.
- Successful login redirects users to the dashboard.

### Dashboard

- Developers can view and manage their assigned tasks/bugs.
- Managers can oversee all open and closed bugs.
- Task list with key details like title, status, priority, assignee, and created date.

### Task/Bug Creation

- Developers can create new tasks/bugs.
- Form Fields include Title, Description, Priority, Status, Assignee, Creation Date, etc.

### Task/Bug Management

- Developers can create new tasks/bugs, delete bugs, move bug to manager's approval.
- Managers can approve closure or reopen bugs. Bugs in review remain in Pending Approval status.
- Sorting and filtering by priority, status.
- Developers can log the time spent on each task.
- Total time spent per task is displayed for better workload tracking.

## Technology Stack

- **Frontend**: React.js + vite
- **State Management**: useContext
- **Styling**: CSS, Styled-Components

## Setup & Installation

- Clone the repository:
```git clone https://github.com/your-username/bug-tracker-app.git
cd bug-tracker-app
```
- Install dependencies:
```
npm install  # or yarn install
```
- Start the development server:
```
npm run dev  # or yarn dev
```
- Open http://localhost:3000/ in your browser.

## Future Enhancements

- Integrate a real authentication system (e.g., Firebase, OAuth, JWT).
- Add database support (PostgreSQL, MongoDB, or Firebase).
- Implement real-time task updates using WebSockets.
- Mobile-friendly UI enhancements.

## Contributing

Contributions are welcome! Feel free to fork the repository, create feature branches, and submit pull requests.

## License

This project is licensed under the MIT License.

