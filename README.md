# Coding Questions Dashboard

A responsive React-based dashboard for browsing coding problems served from a mock API using JSON Server. This project mimics a simplified LeetCode experience and demonstrates clean UI, routing, state handling with custom hooks, and modular component design.

---

## Features

- View a list of coding questions with titles and links  
- View full problem details: description, test cases, and outputs  
- Navigate between questions using "Prev" and "Next" buttons  
- Custom `useQuestions` hook to fetch data from mock API  
- React Router for clean page navigation  
- Responsive, dark-themed, VS Code–style design  

---

## Tech Stack

- React  
- React Router DOM  
- JSON Server  
- Vite  
- Vanilla CSS  

---

## 🚀 How to Run This Project

Follow the steps below to get the project running locally:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/react-coding-dashboard.git
cd react-coding-dashboard
```

### 2. Install Project Dependencies

```bash
npm install
```

### 3. Install JSON Server Globally (if not already installed)

```bash
npm install -g json-server
```

### 4. Start the Mock API Server

```bash
json-server --watch src/mock-api/questions.json --port 5000
```

This will make the API available at:  
`http://localhost:5000/questions`

### 5. Start the React App

```bash
npm run dev
```

Then open your browser and visit:  
`http://localhost:5173`


