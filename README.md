# gestion_taches

## Getting Started

Follow these steps to set up and run the project locally:

### 1. Clone the repository
```bash
git clone https://github.com/VIGABANC/gestion_taches.git
cd gestion_taches
```

### 2. Install PHP dependencies
```bash
composer install
```

### 3. Install JavaScript dependencies
```bash
npm install
```

### 4. Set up environment variables
```bash
cp .env.example .env
php artisan key:generate
```

### 5. Set up the database
```bash
php artisan migrate --seed
```

### 6. Start the development servers
```bash
# Start Laravel backend
php artisan serve

# In a new terminal, start the frontend (Vite/React)
npm run dev
```

### 7. Access the application
Open your browser and go to: [http://localhost:8000](http://localhost:8000)

<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

You may also try the [Laravel Bootcamp](https://bootcamp.laravel.com), where you will be guided through building a modern Laravel application from scratch.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains thousands of video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Project Overview for Beginners

This project is built with Laravel 12 and uses a modern tech stack including React, Material-UI, and Tailwind CSS. Here's a comprehensive guide to get you started:

### Prerequisites

- PHP 8.2.12 or higher
- Node.js 22.14.0 or higher
- Composer (PHP package manager)
- npm 11.1.0 or higher (Node package manager)
- Laravel Installer 4.5.1 or higher (install globally with `composer global require laravel/installer`)
- SQLite (or your preferred database)

### Project Structure

- `app/` - Contains the core code of your application
- `config/` - All configuration files
- `database/` - Database migrations and seeders
- `public/` - Publicly accessible files
- `resources/` - Views, raw assets, and React components
- `routes/` - All route definitions
- `storage/` - Application storage
- `tests/` - Automated tests
- `vendor/` - Composer dependencies
- `node_modules/` - npm dependencies

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone [your-repository-url]
   cd [project-name]
   ```

2. **Install PHP dependencies**
   ```bash
   composer install
   ```

3. **Install JavaScript dependencies**
   ```bash
   npm ci
   ```

4. **Environment setup**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

5. **Database setup**
   ```bash
   php artisan migrate --seed
   ```

6. **Start the development servers**
   ```bash
   # Start all services (Laravel, Vite, Queue, Logs)
   composer run dev
   
   # Or start them individually:
   php artisan serve
   npm run dev
   ```

7. **Access the application**
   Open your browser and navigate to `http://localhost:8000`

### Key Technologies Used

- **Backend**
  - Laravel 12
  - PHP 8.2.12 or higher
  - SQLite (default database)

- **Frontend**
  - React
  - Material-UI (@mui/material)
  - Tailwind CSS
  - Recharts (for data visualization)
  - Swiper (for carousels)
  - date-fns (for date manipulation)

### Common Issues & Solutions

1. **Permission Issues**
   ```bash
   chmod -R 775 storage bootstrap/cache
   ```

2. **Missing PHP Extensions**
   - Ensure required PHP extensions are installed:
     - BCMath
     - Ctype
     - JSON
     - Mbstring
     - OpenSSL
     - PDO
     - Tokenizer
     - XML

3. **Node.js Version Issues**
   - Use Node.js 22.14.0 or higher
   - Use npm 11.1.0 or higher
   - If needed, use nvm to manage Node.js versions

### Next Steps

1. **Configuration**
   - Edit `.env` file for environment-specific settings
   - Configure database connection in `config/database.php`

2. **Development**
   - Create new components in `resources/js/components`
   - Add routes in `routes/web.php`
   - Create migrations using `php artisan make:migration`

3. **Testing**
   ```bash
   php artisan test
   ```

4. **Building for Production**
   ```bash
   npm run build
   php artisan optimize
   ```

## Installation & Imports

To streamline your setup, here are the explicit npm install commands covering all frontend libraries and components used in this project.

### 1. Production Dependencies
Install the core libraries required for UI, styling, data visualization, and HTTP requests:

```bash
npm install react react-dom
npm install @emotion/react@11.14.0 @emotion/styled@11.14.0
npm install @mui/material@7.1.0
npm install tailwindcss@4.0.0
npm install recharts@2.15.2
npm install swiper@11.2.6
npm install date-fns@4.1.0
npm install axios@1.8.2
```

### 2. Development Dependencies
Install tools for build, bundling, live reloading, and Tailwind integration:

```bash
npm install --save-dev vite@6.2.4
npm install --save-dev laravel-vite-plugin@1.2.0
npm install --save-dev @tailwindcss/vite@4.0.0
npm install --save-dev concurrently@9.0.1
```

### 3. Single-Line Grouped Installation
Alternatively, you can install all at once:

```bash
npm install react react-dom @emotion/react@11.14.0 @emotion/styled@11.14.0 @mui/material@7.1.0 tailwindcss@4.0.0 recharts@2.15.2 swiper@11.2.6 date-fns@4.1.0 axios@1.8.2 && \
npm install --save-dev vite@6.2.4 laravel-vite-plugin@1.2.0 @tailwindcss/vite@4.0.0 concurrently@9.0.1
```

### 4. Import Statements
In your React code, add the following imports to leverage these libraries:

```javascript
// Core React
import React from 'react';
import ReactDOM from 'react-dom';

// Emotion for styling
import { ThemeProvider } from '@emotion/react';
import { styled } from '@emotion/styled';

// Material-UI components
import { Button, Card, Container, Typography } from '@mui/material';

// Tailwind (configured via Vite)
// Usage: apply Tailwind classes directly in JSX

// Data Visualization
import { BarChart, LineChart, PieChart } from 'recharts';

// Carousel/Slider
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// Date handling
import { format, parseISO } from 'date-fns';

// HTTP requests
import axios from 'axios';
```

## 🔧 Dependency Management Tips

### Maintain Consistent Versions

```json
// package.json
{
  "dependencies": {
    "@mui/material": "7.1.0",
    "react": "18.2.0",
    "tailwindcss": "3.3.3",
    "recharts": "2.8.0"
  },
  "resolutions": {
    "react": "18.2.0",
    "react-dom": "18.2.0"
  }
}
```

## 💡 Recommended VS Code Extensions

```bash
# UI/UX Development
ext install dbaeumer.vscode-eslint
ext install esbenp.prettier-vscode
ext install bradlc.vscode-tailwindcss
ext install stylelint.vscode-stylelint

# React Tooling
ext install dsznajder.es7-react-js-snippets
ext install planbcoding.vscode-react-refactor
```

## 🚀 Optimized Production Build

```bash
# Build with analysis
npm run build -- --mode production --profile

# Analyze bundle size
npx vite-bundle-visualizer

# Serve production build
npx serve -s dist
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

Made with ❤️ by [Your Name] • [Report Bug](https://github.com/VIGABANC/gestion_taches/issues)