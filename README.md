# 🛒 FreshMart Store

A modern, responsive e-commerce frontend application for grocery shopping, built with React and featuring a sleek dark theme with glassmorphism effects.

![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-7.0.4-646CFF?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.11-38B2AC?logo=tailwind-css)
![Redux](https://img.shields.io/badge/Redux-2.8.2-764ABC?logo=redux)

## ✨ Features

### 🛍️ Shopping Experience
- **Product Catalog**: Browse 27+ products across 5 categories (Fruits, Vegetables, Dairy, Bakery, Meat)
- **Smart Filtering**: Search, filter by category, and adjust price range
- **Shopping Cart**: Add items, manage quantities, and view bill details
- **Featured Products**: Highlighted products on the homepage

### 🎨 Modern UI/UX
- **Dark Theme**: Beautiful dark interface with gradient accents
- **Glassmorphism**: Modern glass-card effects with backdrop blur
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Smooth Animations**: Elegant transitions and hover effects
- **Gradient Accents**: Blue-purple-pink gradient theme throughout

### 🚀 Performance
- **Fast Loading**: Built with Vite for lightning-fast development and builds
- **Optimized Images**: Using modern AVIF format for better performance
- **State Management**: Redux Toolkit for efficient state handling

## 🛠️ Tech Stack

### Core Technologies
- **React 19.1.0** - UI library
- **Vite 7.0.4** - Build tool and dev server
- **React Router DOM 7.8.0** - Client-side routing

### State Management
- **Redux Toolkit 2.8.2** - State management
- **React Redux 9.2.0** - React bindings for Redux

### Styling
- **Tailwind CSS 4.1.11** - Utility-first CSS framework
- **Lucide React** - Modern icon library
- **React Icons** - Additional icon components

### Additional Libraries
- **React Toastify** - Toast notifications
- **ESLint** - Code linting

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn package manager

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/freshmart-store.git
   cd freshmart-store
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the URL shown in your terminal)

## 🚀 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 📁 Project Structure

```
freshmart-store/
├── public/                 # Static assets
│   └── vite.svg
├── src/
│   ├── assets/            # Images and media files
│   ├── components/         # Reusable React components
│   │   ├── CartComp.jsx    # Shopping cart sidebar
│   │   ├── Category.jsx    # Category section
│   │   ├── CategoryCard.jsx
│   │   ├── FeaturedProducts.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx       # Hero section
│   │   ├── Navbar.jsx     # Navigation bar
│   │   ├── ProductCard.jsx
│   │   ├── ResponsiveMenu.jsx
│   │   └── Template.jsx
│   ├── Pages/              # Page components
│   │   ├── Home.jsx
│   │   ├── Shop.jsx        # Product listing with filters
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── Redux/              # Redux store configuration
│   │   ├── Store.js        # Redux store setup
│   │   └── CartSlice.js    # Cart state management
│   ├── Utils/              # Utility files
│   │   └── Data.jsx        # Product data
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Application entry point
│   └── index.css           # Global styles and theme
├── package.json
├── vite.config.js          # Vite configuration
└── README.md
```

## 🎯 Key Features Explained

### Shopping Cart
- Add products to cart with a single click
- Increase/decrease item quantities
- Automatic price calculation
- Bill breakdown with delivery and handling charges
- Empty cart state handling

### Product Filtering
- **Search**: Real-time product search by name
- **Category Filter**: Filter by Fruits, Vegetables, Dairy, Bakery, or Meat
- **Price Range**: Adjustable price slider (₹0 - ₹500)
- **Reset Filters**: Clear all filters with one click
- **Responsive Filters**: Mobile-friendly collapsible filter panel

### Navigation
- Fixed navigation bar with glassmorphism effect
- Responsive mobile menu
- Cart icon with item count badge
- Smooth scroll navigation

## 🎨 Theme Customization

The project uses a dark theme with CSS variables defined in `src/index.css`. You can customize:

- **Colors**: Modify CSS variables in `:root` selector
- **Gradients**: Update gradient classes (`.ai-gradient`, `.ai-gradient-text`)
- **Glass Effects**: Adjust `.glass-card` class for glassmorphism
- **Animations**: Customize transition durations and effects

## 🔧 Configuration

### Environment Variables
Currently, the project uses static data. To connect to a backend API:

1. Create a `.env` file in the root directory
2. Add your API endpoint:
   ```
   VITE_API_URL=https://your-api-url.com
   ```

### Redux Store
The Redux store is configured in `src/Redux/Store.js`. Currently manages:
- Cart state (items, quantities, totals)

## 📱 Responsive Breakpoints

The project is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🐛 Known Issues

- Cart state is not persisted (lost on page refresh)
- Price filter max value is hardcoded to ₹500
- No backend integration (using static data)

## 🚧 Future Enhancements

- [ ] Backend API integration
- [ ] User authentication
- [ ] Product detail pages
- [ ] Checkout and payment flow
- [ ] Cart persistence (localStorage)
- [ ] Product reviews and ratings
- [ ] Order history
- [ ] Wishlist functionality
- [ ] Product search with autocomplete
- [ ] Image lazy loading
- [ ] Code splitting for better performance

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style
- Follow ESLint rules
- Use meaningful component and variable names
- Add comments for complex logic
- Maintain consistent formatting

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Aditya**

- Made with ❤️ for the community

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) for the amazing build tool
- [React](https://react.dev/) for the UI library
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Redux Toolkit](https://redux-toolkit.js.org/) for state management
- All contributors and the open-source community

## 📞 Support

For support, email info@freshmart.com or open an issue in the repository.

---

⭐ If you find this project helpful, please consider giving it a star!
