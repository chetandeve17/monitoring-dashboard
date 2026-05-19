# AI Monitoring Dashboard

## Overview

The AI Monitoring Dashboard is a web-based monitoring and visualization system developed for online examination and candidate proctoring environments. The dashboard provides real-time visibility into candidate activities, violations, and monitoring logs generated during assessments.

This project was developed as part of an internship task under the Testing & Visualization phase.

The system helps administrators and monitoring teams:
- track candidate behavior
- monitor suspicious activities
- visualize violations
- filter monitoring logs
- analyze candidate activities efficiently

---

# Features

## Dashboard Analytics
- Total monitoring logs
- Candidate count
- Severity statistics
- High-risk violation tracking

## Monitoring Logs Table
Displays:
- Candidate name
- Violation type
- Severity level
- Timestamp

## Filtering System
Filter logs by:
- Candidate name
- Violation type
- Severity level

## Responsive UI
- Modern dashboard interface
- Mobile responsive layout
- Professional admin panel design

## Backend API Integration
- Frontend connected with backend API
- Real-time log rendering support
- JSON-based monitoring dataset

---

# Supported Violations

The dashboard supports monitoring of multiple AI-detected violations including:

- Looking Away
- Mobile Phone Detected
- No Face Detected
- Tab Switching
- Multiple Faces Detected
- Background Noise Detected
- Face Not Centered
- Camera Disabled
- Microphone Disabled
- Unauthorized Person Detected
- Screen Minimized
- Suspicious Eye Movement
- Phone Usage Detected
- Audio Tampering
- Internet Disconnected

---

# Tech Stack

## Frontend
- React.js
- Tailwind CSS
- Vite

## Backend
- Node.js
- Express.js
- CORS

---

# Project Structure

```bash
monitoring-dashboard/
│
├── backend/
│   ├── server.js
│   ├── package.json
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│
├── README.md