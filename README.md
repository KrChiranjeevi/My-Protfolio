# 🚀 Full-Stack Developer Portfolio

A modern, responsive, and visually stunning personal portfolio website built with **Vite, React, and Tailwind CSS**. This project showcases a sleek design with smooth animations, dark-mode aesthetics, and a fully functional contact form.

## ✨ Features

- 🎨 **Modern UI/UX**: Dark mode by default with glassmorphism effects and neon gradients.
- ⚡ **Lightning Fast**: Built on Vite for instant hot module replacement (HMR) and optimized production builds.
- 📱 **Fully Responsive**: Flawless experience across all devices (Desktop, Tablet, Mobile).
- 🎭 **Smooth Animations**: Integrated with `AOS` (Animate On Scroll) and Lottie animations for an interactive feel.
- 🛠️ **Component-Driven**: Clean, modular React component architecture.

## 💻 Tech Stack

- **Framework**: [React.js](https://reactjs.org/) (v18)
- **Tooling**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: AOS, Lottie React
- **Backend/BaaS**: [Supabase](https://supabase.com/) & Firebase (Configuration ready)

## 🚀 Quick Start (Local Development)

### Prerequisites
Make sure you have Node.js and npm installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/KrChiranjeevi/My-Portfolio.git
   cd My-Portfolio
   ```

2. **Install dependencies:**
   *(Note: This project requires legacy peer dependencies to resolve some package conflicts)*
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Set up Environment Variables:**
   Create a `.env` file in the root directory based on `.env.example`:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

## 🌐 Deployment (Vercel)

This project is optimized for deployment on **Vercel**. A `vercel.json` configuration file is included to automatically handle the legacy peer dependencies during the build process.

1. Push your code to GitHub.
2. Import the project into Vercel.
3. Ensure your Environment Variables (like Supabase keys) are added in the Vercel dashboard.
4. Click **Deploy**!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/KrChiranjeevi/My-Portfolio/issues).

## 📄 License

This project is licensed under the MIT License.