# 🌐 Mini Local Business Dashboard

A full-stack mini dashboard for small business owners to view simulated Google ratings, reviews, and AI-generated SEO headlines.

## 🛠 Tech Stack

- **Frontend:** React.js + Vite + Tailwind CSS + Zustand
- **Backend:** Node.js + Express (simulated data, no DB)
- **Deployment:** Vercel (Frontend), postman (Backend)

---

## 📸 Features

- Submit business name and location
- Simulated Google rating and reviews
- AI-style SEO headline
- Regenerate headline with button click
- Zustand for state management
- Fully responsive UI
- Tailwind-based spinner loader
- Form validation

---

## 🔧 Frontend Setup (Vite + React)

```bash
cd frontend
npm install
npm run dev
Deployment on Vercel
Build Command: npm run build

Output Directory: dist

🖥️ Backend Setup (Express API)
bash
cd backend
npm install
node server.js
Server runs on: http://localhost:5000

🎯 API Endpoints
POST /business-data
Request Body:

json
Copy
Edit
{
  "name": "Cake & Co",
  "location": "Mumbai"
}
Response:

json
Copy
Edit
{
  "rating": 4.3,
  "reviews": 127,
  "headline": "Why Cake & Co is Mumbai's Sweetest Spot in 2025"
}
GET /regenerate-headline?name=...&location=...
Response:

json
Copy
Edit
{
  "headline": "Cake & Co is Setting Mumbai’s Dessert Trends in 2025!"
}
📁 Folder Structure
pgsql
Copy
Edit
project-root/
│
├── backend/
│   ├── server.js
│   └── headlines.js
│
├── frontend/
│   ├── index.html
│   ├── vite.config.js
│   ├── src/
│   │   ├── components/
│   │   ├── store/
│   │   └── assets/

🚀 Live Demo
Frontend: mini-local-business-dashbo-git-350844-challa-samatha-s-projects.vercel.app


📩 Submission
Send the GitHub repo link and (optionally) live links in the assignment email.

🧑‍💻 Author
Samatha Challa
Full Stack Intern Assignment – GrowthProAI
