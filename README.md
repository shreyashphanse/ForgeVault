# 📦 ForgeVault

ForgeVault is a full-stack Android application repository that allows developers to publish, manage, and distribute Android applications through a modern web platform. It provides a dedicated application page for every app where users can explore features, permissions, release notes, version information, and securely download APK files. Along with a public-facing application store, ForgeVault also includes a secure administrator dashboard for uploading and managing applications.

---

## 📱 Features

### Public Website

- 🌐 Modern responsive landing page
- 📦 Browse published Android applications
- 📄 Dedicated application details page
- 📥 Direct APK download support
- 📊 Automatic download counter
- 📏 Automatic APK size display
- 🏷 Category management
- 📝 Release notes support
- ⭐ Feature listing
- 🔐 Permission listing
- ⏳ Loading animations
- 📭 Empty state support
- ❌ Custom 404 page
- ❤️ Health check endpoint

### Admin Dashboard

- 🔐 Secure JWT Authentication
- 📤 Upload APK files
- 🖼 Upload application logos
- ✏️ Edit applications
- 🗑 Delete applications
- 🔄 Automatic slug generation
- 📏 Automatic APK size calculation
- 📝 Comma-separated feature input
- 🔑 Comma-separated permission input

---

## 🛠 Tech Stack

### Frontend

- React
- Vite
- React Router DOM
- Axios
- Framer Motion
- React Hot Toast
- React Icons
- CSS3

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Multer
- JWT Authentication

### Deployment

- Render (Frontend)
- Render (Backend)
- MongoDB Atlas

---

## 📂 Project Structure

```text
ForgeVault/
│
├── frontend/              # React Frontend
│
├── backend/               # Express Backend API
│
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── storage/
│   │   ├── apks/
│   │   └── logos/
│   └── server.js
│
└── README.md
```

---

## 🚀 Project Overview

- **Developed** a full-stack Android application repository that enables developers to publish and distribute Android applications through a centralized web platform.
- **Implemented** secure administrator authentication, complete CRUD functionality, APK and logo uploads, download tracking, and automatic APK size calculation using modern web technologies.
- **Demonstrated** practical experience in full-stack development, REST API design, authentication, cloud deployment, database management, file handling, and responsive UI development.

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/shreyashphanse/ForgeVault.git
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
npm run dev
```

---

## 🌐 Environment Variables

### Backend

Create a `.env` file inside the backend folder.

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
ADMIN_USERNAME=your_admin_username
ADMIN_PASSWORD=your_admin_password
PORT=5000
```

### Frontend

Create a `.env` file inside the frontend folder.

```env
VITE_API_URL=http://localhost:5000/api
```

---

## 🔄 Application Workflow

1. Administrator logs into the dashboard.
2. JWT authentication verifies administrator credentials.
3. Administrator uploads the application logo and APK file.
4. Multer validates and stores uploaded files.
5. Application details are stored in MongoDB Atlas.
6. Published applications automatically appear on the homepage.
7. Users browse available applications.
8. Users open an application's dedicated page.
9. Users can view:
   - Description
   - Features
   - Permissions
   - Version
   - Release Notes
   - APK Size
   - Download Count
10. Users download the APK.
11. Download statistics are automatically updated.

---

## 🔒 Security

- JWT based administrator authentication
- Protected administrator routes
- Secure REST APIs
- File type validation
- APK validation
- Image validation
- Environment variable configuration
- MongoDB Atlas cloud database

---

## 🌍 Live Demo

**Website**

https://forgevault-1anm.onrender.com

---

## 🔮 Future Improvements

- Application screenshot gallery
- Search functionality
- Category filters
- Version history
- Download analytics dashboard
- Cloud storage integration
- User ratings and reviews
- Changelog timeline
- Multiple application categories
- Advanced admin analytics

---

## 👨‍💻 Developer

**Shreyash Phanse**

B.Sc. Computer Science

<p>
<a href="https://github.com/shreyashphanse">
<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"/>
</a>

<a href="https://www.linkedin.com/in/shreyashphanse">
<img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white"/>
</a>

<a href="https://portfolio-frontend-nogx.onrender.com">
<img src="https://img.shields.io/badge/Portfolio-6B8E23?style=for-the-badge"/>
</a>
</p>

---

## 📄 License

This project is developed for educational purposes, portfolio showcase, and personal Android application distribution.
