📚 Student Management System

A responsive and professional Student Information Management web application built to display, add, and manage student records.

🎯 Purpose

This project provides:
A Dashboard with total student count & welcome message.
A Student List with search functionality.
An Add Student form for creating new records.
Fetching and transforming data from DummyJSON Users API into a student-friendly format.

⚙️ Tech Stack

Frontend Framework: React (can be adapted for Vue/Angular/Vanilla)
UI Framework: TailwindCSS (for responsive and modern design)
Data Source: DummyJSON API
State Management: React hooks (useState, useEffect)
HTTP Client: Fetch API

🚀 Setup & Run Instructions
1️⃣ Clone the Repository
git clone https://github.com/yourusername/student-management.git
cd student-management

2️⃣ Install Dependencies
npm install


3️⃣ Run the Application
npm start

📸 UI Screenshots (Frontend Option)
1] DashBoard
 <img width="1915" height="896" alt="Screenshot 2025-08-14 122224" src="https://github.com/user-attachments/assets/c1f424d8-df17-410d-ba93-23ff3b70927a" />
2]Student Details
<img width="1918" height="911" alt="Screenshot 2025-08-14 122242" src="https://github.com/user-attachments/assets/05dc272f-8417-4765-9399-656655bdca91" />
3]Courses
<img width="1919" height="895" alt="Screenshot 2025-08-14 122300" src="https://github.com/user-attachments/assets/4113b335-0c1c-432a-bb02-dbc7e9560758" />
4]Add Student
<img width="1891" height="905" alt="Screenshot 2025-08-14 122320" src="https://github.com/user-attachments/assets/456a383b-3a50-46df-b09b-320a182a2f99" />
<img width="1919" height="902" alt="Screenshot 2025-08-14 122332" src="https://github.com/user-attachments/assets/95892535-a280-4d4a-a455-7ef694ce2021" />

📝 Brief Implementation Summary

Data Fetching & Transformation
  Used fetch to get user data from DummyJSON API.
Mapped users into a student object format:

{
  id: user.id,
  name: `${user.firstName} ${user.lastName}`,
  course: "Computer Science", // Random/assigned
  status: "Active" // Default value
}

Dashboard
  Displays total student count.
  Shows a welcome message.

Student List
  Search bar to filter by name.
  Table with ID, Name, Course, Status.
  Styled using Tailwind for responsive design.

Add Student Form
  Inputs for Name, Course, Status.
  Updates local state to add new records.

Responsive UI
  Tested on mobile & desktop screen sizes.
  Used Tailwind’s grid & flex utilities for layout.
