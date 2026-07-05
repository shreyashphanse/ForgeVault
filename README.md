# ForgeVault

<p align="center">
  <strong>A modern platform for hosting, managing, and distributing Android applications.</strong>
</p>

<p align="center">
  🌐 Live Website: https://forgevault-1anm.onrender.com
</p>

---

# Overview

ForgeVault is a full-stack Android application repository built to provide a clean, modern, and centralized platform for publishing personal Android applications.

Instead of sharing APK files through cloud storage or messaging platforms, ForgeVault provides a dedicated application hub where users can explore Android apps, read detailed information about each application, view release notes, browse features, and securely download APKs.

The project also includes a complete administrator dashboard that allows authenticated administrators to upload, edit, update, and manage applications without modifying the source code.

ForgeVault was designed as both a real-world deployment project and a portfolio application demonstrating full-stack web development, REST API design, authentication, file handling, deployment, and modern UI development.

---

# Live Demo

Website:
https://forgevault-1anm.onrender.com

---

# Features

## Public Website

• Modern responsive landing page
• Clean Android application showcase
• Professional UI with subtle animations
• Responsive design for desktop, tablet and mobile
• Individual application pages
• APK download support
• GitHub repository links
• Download counter
• APK size display
• Version information
• Release notes
• Application categories
• Feature list
• Permission list
• Dynamic loading states
• Custom 404 page
• Health endpoint page

---

## Admin Dashboard

• Secure administrator login
• JWT Authentication
• Upload Android applications
• Upload APK files
• Upload application logos
• Edit existing applications
• Delete applications
• Automatic slug generation
• Automatic APK size calculation
• Download counter support
• Category management
• Release notes support
• Comma-separated feature input
• Comma-separated permission input

---

# Technology Stack

## Frontend

• React
• Vite
• React Router DOM
• Axios
• Framer Motion
• React Hot Toast
• React Icons
• CSS3

---

## Backend

• Node.js
• Express.js
• Multer
• JWT Authentication
• Mongoose

---

## Database

• MongoDB Atlas

---

## Deployment

Frontend:
Render Static Site

Backend:
Render Web Service

Database:
MongoDB Atlas

---

# Project Architecture

Frontend (React)

↓

REST API (Express)

↓

MongoDB Atlas

↓

APK & Logo Storage

---

# Folder Structure

ForgeVault

backend/

• controllers/

• middleware/

• models/

• routes/

• storage/

• config/

• server.js

frontend/

• components/

• pages/

• services/

• styles/

• App.jsx

• main.jsx

---

# Application Workflow

1. Administrator logs into the dashboard.

2. A new Android application is uploaded.

3. Logo and APK files are securely stored.

4. Application information is saved inside MongoDB Atlas.

5. Visitors browse available applications.

6. Users open an application's detail page.

7. Users view:

• Description

• Features

• Permissions

• Version

• Release Notes

• APK Size

• Download Count

8. User downloads the APK.

9. Download statistics are automatically updated.

---

# Security

• JWT based administrator authentication

• Protected admin routes

• File type validation

• Image validation

• APK validation

• Secure REST APIs

• Environment variable support

• MongoDB Atlas cloud database

---

# User Experience

ForgeVault focuses on creating a premium user experience by combining minimal design with modern interactions.

Highlights include:

• Responsive layouts

• Smooth page transitions

• Hover animations

• Loading indicators

• Empty state illustrations

• Modern glassmorphism effects

• Professional typography

• Mobile-friendly interface

---

# Current Applications

Currently hosted applications include:

• SaveMyBill

More Android applications will be added over time.

---

# Future Improvements

• Screenshot gallery for applications

• Search functionality

• Category filters

• APK version history

• User ratings

• Changelog timeline

• Dark/Light theme switching

• Cloud storage integration for APKs

• Analytics dashboard

• Download statistics charts

---

# Learning Outcomes

This project helped strengthen practical experience in:

• Full Stack Development

• REST API Design

• React Development

• Express.js

• MongoDB Atlas

• Authentication

• File Upload Handling

• Deployment

• Render Hosting

• Production Environment Configuration

• Responsive UI Design

• Frontend-Backend Integration

---

# Installation

Clone the repository

```bash
git clone <repository-url>
```

Install backend dependencies

```bash
cd backend
npm install
```

Install frontend dependencies

```bash
cd ../frontend
npm install
```

Start backend

```bash
npm run dev
```

Start frontend

```bash
npm run dev
```

---

# Environment Variables

Backend

```
MONGO_URI=

JWT_SECRET=

ADMIN_USERNAME=

ADMIN_PASSWORD=
```

Frontend

```
VITE_API_URL=
```

---

# Author

Shreyash Phanse

GitHub:
https://github.com/shreyashphanse

LinkedIn:
https://www.linkedin.com/in/shreyashphanse

Portfolio:
https://portfolio-frontend-nogx.onrender.com

---

# License

This project is intended for educational, portfolio, and personal application distribution purposes.

---

## Project Vision

ForgeVault was built with the vision of creating a personal Android application hub that serves as a centralized platform for showcasing software projects. Rather than distributing APKs through scattered links, ForgeVault provides a professional environment where each application has its own dedicated page containing detailed descriptions, release information, technical details, and direct downloads.

The project demonstrates the complete lifecycle of a modern full-stack application—from design and development to deployment and maintenance—while following industry-standard practices for authentication, API development, responsive interfaces, and cloud deployment.

---

⭐ If you found this project interesting, consider starring the repository.
