# MEAN Resume Builder App

A professional Full-Stack (MERN/MEAN) application designed for building and downloading resumes as PDFs. This project features a React frontend and a Node.js/Express backend with MongoDB integration.

## 🚀 Features

- **Dynamic Resume Creation**: User-friendly forms to input personal details, experience, and education.
- **PDF Generation**: Download resumes as high-quality PDF files.
- **Responsive Design**: Modern UI built with Tailwind CSS.
- **Backend Integration**: Express server with Mongoose for data management.

## 🛠️ Tech Stack

- **Frontend**: React, Vite, Tailwind CSS, Axios, jsPDF
- **Backend**: Node.js, Express, MongoDB (Mongoose)
- **Deployment**: Configured for Vercel

## 📂 Project Structure

```text
mean-app/
├── frontend/     # React application
├── backend/      # Express server
└── package.json  # Root configuration
```

## ⚙️ Setup & Installation

### Prerequisites
- Node.js (v16+)
- MongoDB connection string

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/KrChiranjeevi/My-Portfolio.git
   cd mean-app
   ```

2. **Frontend Setup**:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

3. **Backend Setup**:
   ```bash
   cd ../backend
   npm install
   # Add your .env file with MONGO_URI
   npm run dev
   ```

## 🌐 Deployment (Vercel)

This project is structured for easy deployment on Vercel. 
- The frontend can be deployed as a static site.
- The backend serves as serverless functions.

---
Built with ❤️ by [Kumar Chiranjeevi](https://github.com/KrChiranjeevi)
