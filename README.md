# ForgeVault

```{=html}
<p align="center">
```

`<img src="https://img.shields.io/badge/React-Frontend-61DAFB?logo=react&logoColor=white" />`{=html}
`<img src="https://img.shields.io/badge/Node.js-Backend-339933?logo=node.js&logoColor=white" />`{=html}
`<img src="https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb&logoColor=white" />`{=html}
`<img src="https://img.shields.io/badge/Status-Live-success" />`{=html}

```{=html}
</p>
```

```{=html}
<p align="center">
```

`<b>`{=html}A Modern Android Application
Repository`</b>`{=html}`<br>`{=html} Publish, manage and distribute
Android applications through a clean full stack platform.

```{=html}
</p>
```

## 🌐 Live Demo

**Website:** https://forgevault-1anm.onrender.com

---

# 📖 Overview

### XYZ Format

- **Accomplished** the development of **ForgeVault**, a full stack
  Android application repository that allows publishing, managing and
  distributing Android applications from a centralized platform.
- **Built** a secure admin dashboard with JWT authentication, APK/logo
  uploads, CRUD operations and automatic download tracking.
- **Improved** project deployment by integrating React, Express,
  MongoDB Atlas and Render into a production ready application
  showcasing modern full stack development practices.

ForgeVault replaces scattered APK sharing methods with a professional
application portal where every application has its own dedicated page
containing detailed descriptions, version information, release notes,
permissions, features and direct APK downloads.

---

# ✨ Features

## Public Website

- Responsive landing page
- Modern minimal UI
- Animated application cards
- Dedicated application pages
- APK downloads
- GitHub repository links
- Download counter
- Version information
- APK size display
- Category display
- Release notes
- Feature listing
- Permission listing
- Loading states
- Empty state
- Custom 404 page
- Health endpoint

## Admin Dashboard

- Secure administrator login
- JWT authentication
- Upload new applications
- Upload logos
- Upload APK files
- Edit applications
- Delete applications
- Automatic slug generation
- Automatic APK size calculation
- Comma separated feature input
- Comma separated permission input

---

# 🛠 Tech Stack

## Frontend

- React
- Vite
- React Router DOM
- Axios
- Framer Motion
- React Hot Toast
- React Icons
- CSS3

## Backend

- Node.js
- Express.js
- Multer
- JWT Authentication
- Mongoose

## Database

- MongoDB Atlas

## Deployment

- Render Static Site
- Render Web Service

---

# 📂 Folder Structure

```text
ForgeVault
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── storage
│   │   ├── apks
│   │   └── logos
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── styles
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

---

# 🔄 Application Workflow

```text
Administrator Login
        │
        ▼
JWT Authentication
        │
        ▼
Upload Logo + APK
        │
        ▼
Multer Processes Files
        │
        ▼
MongoDB Stores Metadata
        │
        ▼
Applications Listed on Homepage
        │
        ▼
User Opens Application Page
        │
        ▼
Views Details
 • Description
 • Features
 • Permissions
 • Version
 • Release Notes
 • APK Size
 • Downloads
        │
        ▼
Download APK
        │
        ▼
Download Counter Updated
```

---

# 🔒 Security

- JWT based administrator authentication
- Protected admin routes
- File validation
- APK validation
- Image validation
- Environment variables
- MongoDB Atlas cloud database

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/shreyashphanse/ForgeVault.git
```

## Install Backend

```bash
cd backend
npm install
```

## Install Frontend

```bash
cd ../frontend
npm install
```

## Start Backend

```bash
npm run dev
```

## Start Frontend

```bash
npm run dev
```

---

# ⚙ Environment Variables

## Backend

```env
MONGO_URI=
JWT_SECRET=
ADMIN_USERNAME=
ADMIN_PASSWORD=
```

## Frontend

```env
VITE_API_URL=
```

---

# 🎯 Future Improvements

- Screenshot gallery
- Search functionality
- Category filters
- Version history
- Download analytics
- Cloud storage for APKs
- User ratings
- Changelog timeline

---

# 👨‍💻 Author

```{=html}
<p align="center">
```

`<a href="https://github.com/shreyashphanse">`{=html}
`<img src="https://img.shields.io/badge/🐙%20GitHub-181717?style=for-the-badge&logo=github&logoColor=white"/>`{=html}
`</a>`{=html}

`<a href="https://www.linkedin.com/in/shreyashphanse">`{=html}
`<img src="https://img.shields.io/badge/💼%20LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white"/>`{=html}
`</a>`{=html}

`<a href="https://portfolio-frontend-nogx.onrender.com">`{=html}
`<img src="https://img.shields.io/badge/🌐%20Portfolio-6B8E23?style=for-the-badge"/>`{=html}
`</a>`{=html}

```{=html}
</p>
```

---

# 📄 License

This project is intended for educational, portfolio and personal Android
application distribution purposes.

---

```{=html}
<p align="center">
```

⭐ If you found this project interesting, consider giving it a star.

```{=html}
</p>
```
