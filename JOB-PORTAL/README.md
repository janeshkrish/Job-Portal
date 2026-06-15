<div align="center">
  <img src="https://img.shields.io/badge/MERN_Stack-5c2223?style=for-the-badge&logo=mongodb&logoColor=green" alt="MERN Stack" />
  <h1 align="center">🚀 Modern Job Portal Platform</h1>
  <p align="center">
    A comprehensive full-stack Job Portal built with the MERN stack, empowering job seekers and employers to connect seamlessly.
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
    <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="Express.js" />
    <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  </p>
</div>

<br />

## ✨ Features

- **🔐 Secure Authentication:** Role-based access control for Employers and Job Seekers using JWT & bcryptjs.
- **🔍 Advanced Job Search:** Powerful search and filtering functionalities to find the perfect job.
- **📄 Seamless Job Applications:** Apply to jobs easily and track application statuses.
- **💼 Employer Dashboard:** Dedicated dashboard for recruiters to post, update, and manage job listings.
- **☁️ Cloud Storage:** Secure file and resume uploads via Cloudinary & Multer.
- **📱 Responsive UI:** Beautiful, mobile-first design powered by TailwindCSS & Radix UI primitives.
- **🎭 Smooth Animations:** Enhanced user experience with Framer Motion.

## 🛠️ Tech Stack

### Frontend
- **Framework:** [React 18](https://reactjs.org/) & [Vite](https://vitejs.dev/)
- **State Management:** [Redux Toolkit](https://redux-toolkit.js.org/) & [Redux Persist](https://github.com/rt2zz/redux-persist)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [Radix UI](https://www.radix-ui.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Routing:** [React Router v7](https://reactrouter.com/)
- **Toasts:** [Sonner](https://sonner.emilkowal.ski/)

### Backend
- **Runtime:** [Node.js](https://nodejs.org/)
- **Framework:** [Express.js](https://expressjs.com/)
- **Database:** [MongoDB](https://www.mongodb.com/) & [Mongoose](https://mongoosejs.com/)
- **Authentication:** [JWT](https://jwt.io/) & [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- **File Uploads:** [Cloudinary](https://cloudinary.com/) & [Multer](https://www.npmjs.com/package/multer)

## 🚀 Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher)
- [MongoDB](https://www.mongodb.com/) (Local or Atlas)
- [Git](https://git-scm.com/)

### 1. Clone the Repository

```bash
git clone https://github.com/janeshkrish/Job-Portal.git
cd Job-Portal
```

### 2. Backend Setup

Navigate to the `Backend` directory, install dependencies, and start the server.

```bash
cd Backend
npm install
```

**Environment Variables (`Backend/.env`)**
Create a `.env` file in the `Backend` directory and add the following:
```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
SECRET_KEY=your_jwt_secret_key
CLOUDINARY_CLIENT_NAME=your_cloudinary_cloud_name
CLOUDINARY_CLIENT_API=your_cloudinary_api_key
CLOUDINARY_CLIENT_SECRET=your_cloudinary_api_secret
```

Start the backend server:
```bash
npm run dev
```

### 3. Frontend Setup

Open a new terminal, navigate to the `Frontend` directory, install dependencies, and start the Vite dev server.

```bash
cd Frontend
npm install
```

Start the frontend application:
```bash
npm run dev
```

The app will typically be running at `http://localhost:5173`.

## 📁 Project Structure

```text
Job-Portal/
├── Backend/                 # Express API server
│   ├── controllers/         # Request handlers
│   ├── middleware/          # Custom middlewares (auth, multer)
│   ├── models/              # Mongoose schemas
│   ├── routes/              # API endpoints
│   ├── utils/               # Helper functions
│   └── index.js             # Entry point
│
└── Frontend/                # React Client application
    ├── public/              # Static assets
    ├── src/                 # React source code
    │   ├── components/      # Reusable UI components
    │   ├── pages/           # Application views
    │   ├── redux/           # Redux slices and store
    │   └── App.jsx          # Root component
    ├── tailwind.config.js   # Tailwind settings
    └── vite.config.js       # Vite configuration
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

Distributed under the ISC License. See `LICENSE` for more information.

<div align="center">
  <b>Built with ❤️ by passionate developers.</b>
</div>
