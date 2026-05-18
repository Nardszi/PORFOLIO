# Linard Cordero - Portfolio Website

A modern, responsive portfolio website built with React and Vite. Showcasing projects, skills, experience, and education.

## 🌟 Features

- **Modern Design**: Dark-themed, sleek UI with smooth animations
- **Responsive**: Mobile-friendly design that works on all devices
- **Fast Performance**: Built with Vite for lightning-fast development and production builds
- **Interactive**: Smooth scrolling navigation and hover effects
- **Contact Form**: Integrated email contact functionality
- **Social Links**: Direct links to GitHub and email
- **Project Showcase**: Detailed project cards with technologies and features

## 🚀 Tech Stack

- **Frontend Framework**: React 18.2.0
- **Build Tool**: Vite 5.0.0
- **Styling**: CSS3 with CSS Grid and Flexbox
- **Icons**: React Icons
- **Deployment**: Vercel

## 📋 Prerequisites

Before you begin, make sure you have:
- Node.js (v14 or higher)
- npm or yarn package manager
- Git (for version control)

## 💻 Local Development

### Installation

1. **Clone or Extract the Project**
```bash
cd "path/to/New folder"
```

2. **Install Dependencies**
```bash
npm install
```

3. **Start Development Server**
```bash
npm run dev
```

The application will open in your browser at `http://localhost:3000`

### Development Features
- Hot Module Replacement (HMR) for instant updates
- Fast refresh on file changes
- Optimized build process

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally

## 📁 Project Structure

```
├── src/
│   ├── components/           # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── *.css             # Component styles
│   ├── data/
│   │   └── resume.js         # Resume data
│   ├── App.jsx               # Main app component
│   ├── App.css
│   ├── index.css             # Global styles
│   └── main.jsx              # Entry point
├── index.html                # HTML template
├── vite.config.js            # Vite configuration
├── vercel.json               # Vercel deployment config
├── package.json              # Project dependencies
└── README.md                 # This file
```

## 🎨 Customization

### Update Resume Data

Edit `src/data/resume.js` to update:
- Personal information
- Skills
- Projects
- Experience
- Education

### Modify Colors

Edit `src/index.css` to change the color scheme:
```css
:root {
  --primary: #0f172a;        /* Main background */
  --secondary: #1e293b;      /* Secondary background */
  --accent: #3b82f6;         /* Primary accent */
  --accent-light: #60a5fa;   /* Light accent */
  --text: #f1f5f9;           /* Main text */
  --text-muted: #cbd5e1;     /* Muted text */
}
```

### Add Project Links

In `src/data/resume.js`, add `github` and `live` URLs to projects:
```javascript
{
  name: "Project Name",
  github: "https://github.com/username/repo",
  live: "https://project-demo.com"
}
```

## 🚀 Deployment on Vercel

### Option 1: Deploy from GitHub

1. **Push Code to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/portfolio.git
git push -u origin main
```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project"
   - Select your portfolio repository
   - Vercel will auto-detect Vite configuration
   - Click "Deploy"

### Option 2: Deploy from CLI

1. **Install Vercel CLI**
```bash
npm i -g vercel
```

2. **Deploy**
```bash
vercel
```

Follow the prompts to deploy your project.

3. **Set Custom Domain** (Optional)
   - Go to Vercel dashboard
   - Select your project
   - Go to Settings → Domains
   - Add your custom domain

## 📧 Contact Form Setup

The contact form currently uses the `mailto:` functionality. When visitors submit the form, it opens their default email client with pre-filled information.

To add backend form submission later, you can integrate:
- Formspree (formspree.io)
- EmailJS (emailjs.com)
- Your own backend API

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Mobile Optimization

The portfolio is fully responsive with breakpoints at:
- Desktop: 1024px and above
- Tablet: 768px - 1023px
- Mobile: Below 768px

## ⚡ Performance Tips

- The project is built with Vite for optimal performance
- CSS is minified in production
- Images should be optimized before adding
- Use lazy loading for heavy components if needed

## 🔐 Security

- No sensitive data is exposed in the code
- Contact form uses secure mailto links
- Social links are verified
- All external links have proper security attributes

## 📝 License

This portfolio template is free to use and modify for personal use.

## 📞 Support

For issues or questions:
1. Check the project structure
2. Verify all dependencies are installed
3. Ensure Node.js version is compatible
4. Check Vercel deployment logs for build errors

## ✨ Future Enhancements

Consider adding:
- Blog section
- Dark/Light theme toggle
- Animated scroll indicators
- PDF resume download
- Project filtering by technology
- Achievement badges
- Testimonials section
- Newsletter subscription

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Vercel Deployment Guide](https://vercel.com/docs)

---

**Happy coding! 🚀**

Made with ❤️ using React and Vite
