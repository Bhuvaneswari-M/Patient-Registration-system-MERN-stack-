# 🏥 Patient Registration System — MERN Stack

A simple **Patient Registration** web application built with the **MERN stack** (MongoDB, Express, React, Node.js).  
It allows users to register patients and view the registered patient list in real-time.

---

## 🚀 Features
- 📋 **Patient Registration Form** — Capture full name, email, mobile, and hospital name.
- 📡 **REST API** — Powered by Express.js and MongoDB.
- 🎨 **Responsive UI** — Built with React.js for a smooth user experience.
- 🔄 **Real-Time Updates** — Newly added patients appear instantly without page refresh.
- 🌐 **CORS Enabled** — Allows frontend and backend to communicate without issues.

---

## 🛠 Tech Stack
- **Frontend:** React.js, JavaScript, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Tools:** Git, GitHub, VS Code

---

## 📂 Folder Structure
project-root/
│
├── client/ # React Frontend
│ ├── public/ # Static files
│ └── src/ # React components & styles
│
├── server/ # Node.js + Express Backend
│ ├── models/ # Mongoose Schemas
│ └── routes/ # API Endpoints
│
├── .env # Environment variables (MongoDB URI, Port)
├── package.json # Dependencies & scripts
└── README.md # Documentation


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/Patient-Registration-system-MERN-stack-.git
cd Patient-Registration-system-MERN-stack-
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install

MONGO_URI=your-mongodb-connection-string
PORT=5000

# Start backend (server)
cd server
npm start

# Start frontend (client)
cd ../client
npm start

📬 Contact
Author: Bhuvaneswari-M
GitHub: your-github-Bhuvaneswari-M
