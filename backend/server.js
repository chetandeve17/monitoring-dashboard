const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const logs = [
  {
    id: 1,
    candidate: "Rahul Sharma",
    violation: "Looking Away",
    severity: "Medium",
    timestamp: "2026-05-17 10:30 AM",
  },
  {
    id: 2,
    candidate: "Priya Patil",
    violation: "Mobile Phone Detected",
    severity: "High",
    timestamp: "2026-05-17 10:32 AM",
  },
  {
    id: 3,
    candidate: "Amit Joshi",
    violation: "No Face Detected",
    severity: "Low",
    timestamp: "2026-05-17 10:35 AM",
  },
  {
    id: 4,
    candidate: "Sneha Kulkarni",
    violation: "Tab Switching",
    severity: "High",
    timestamp: "2026-05-17 10:40 AM",
  },
  {
    id: 5,
    candidate: "Rohan Patil",
    violation: "Multiple Faces Detected",
    severity: "High",
    timestamp: "2026-05-17 10:50 AM",
  },
  {
    id: 6,
    candidate: "Kiran More",
    violation: "Background Noise Detected",
    severity: "Low",
    timestamp: "2026-05-17 10:52 AM",
  },
  {
    id: 7,
    candidate: "Anjali Deshmukh",
    violation: "Face Not Centered",
    severity: "Medium",
    timestamp: "2026-05-17 11:00 AM",
  },
  {
    id: 8,
    candidate: "Saurabh Pawar",
    violation: "Camera Disabled",
    severity: "High",
    timestamp: "2026-05-17 11:05 AM",
  },
  {
    id: 9,
    candidate: "Neha Jadhav",
    violation: "Microphone Disabled",
    severity: "Medium",
    timestamp: "2026-05-17 11:10 AM",
  },
  {
    id: 10,
    candidate: "Omkar Shinde",
    violation: "Unauthorized Person Detected",
    severity: "High",
    timestamp: "2026-05-17 11:15 AM",
  },
  {
    id: 11,
    candidate: "Pooja Salunkhe",
    violation: "Screen Minimized",
    severity: "Medium",
    timestamp: "2026-05-17 11:18 AM",
  },
  {
    id: 12,
    candidate: "Vikas Patne",
    violation: "Suspicious Eye Movement",
    severity: "Medium",
    timestamp: "2026-05-17 11:22 AM",
  },
  {
    id: 13,
    candidate: "Tejas More",
    violation: "Phone Usage Detected",
    severity: "High",
    timestamp: "2026-05-17 11:25 AM",
  },
  {
    id: 14,
    candidate: "Komal Sawant",
    violation: "Audio Tampering",
    severity: "High",
    timestamp: "2026-05-17 11:30 AM",
  },
  {
    id: 15,
    candidate: "Harshal Kadam",
    violation: "Internet Disconnected",
    severity: "Low",
    timestamp: "2026-05-17 11:35 AM",
  },
  {
    id: 16,
    candidate: "Mitali Patil",
    violation: "Looking Away",
    severity: "Low",
    timestamp: "2026-05-17 11:40 AM",
  },
  {
    id: 17,
    candidate: "Aditya Chavan",
    violation: "Mobile Phone Detected",
    severity: "High",
    timestamp: "2026-05-17 11:45 AM",
  },
  {
    id: 18,
    candidate: "Ritika Mane",
    violation: "Tab Switching",
    severity: "High",
    timestamp: "2026-05-17 11:50 AM",
  },
  {
    id: 19,
    candidate: "Nikhil Thorat",
    violation: "No Face Detected",
    severity: "Medium",
    timestamp: "2026-05-17 11:55 AM",
  },
  {
    id: 20,
    candidate: "Sakshi Gaikwad",
    violation: "Multiple Faces Detected",
    severity: "High",
    timestamp: "2026-05-17 12:00 PM",
  },
  {
    id: 21,
    candidate: "Akash Patil",
    violation: "Background Noise Detected",
    severity: "Low",
    timestamp: "2026-05-17 12:05 PM",
  },
  {
    id: 22,
    candidate: "Nisha More",
    violation: "Face Not Centered",
    severity: "Medium",
    timestamp: "2026-05-17 12:08 PM",
  },
  {
    id: 23,
    candidate: "Ritesh Jadhav",
    violation: "Camera Disabled",
    severity: "High",
    timestamp: "2026-05-17 12:10 PM",
  },
  {
    id: 24,
    candidate: "Vaishnavi Patil",
    violation: "Microphone Disabled",
    severity: "Medium",
    timestamp: "2026-05-17 12:12 PM",
  },
  {
    id: 25,
    candidate: "Sameer Kadam",
    violation: "Unauthorized Person Detected",
    severity: "High",
    timestamp: "2026-05-17 12:15 PM",
  },
  {
    id: 26,
    candidate: "Rupali Shinde",
    violation: "Screen Minimized",
    severity: "Medium",
    timestamp: "2026-05-17 12:18 PM",
  },
  {
    id: 27,
    candidate: "Kunal Pawar",
    violation: "Suspicious Eye Movement",
    severity: "Medium",
    timestamp: "2026-05-17 12:22 PM",
  },
  {
    id: 28,
    candidate: "Pritam Chavan",
    violation: "Phone Usage Detected",
    severity: "High",
    timestamp: "2026-05-17 12:25 PM",
  },
  {
    id: 29,
    candidate: "Aishwarya More",
    violation: "Audio Tampering",
    severity: "High",
    timestamp: "2026-05-17 12:28 PM",
  },
  {
    id: 30,
    candidate: "Rohit Salunkhe",
    violation: "Internet Disconnected",
    severity: "Low",
    timestamp: "2026-05-17 12:30 PM",
  },
];

app.get("/api/logs", (req, res) => {
  res.json(logs);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});