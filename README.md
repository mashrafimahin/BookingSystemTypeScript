# 🏨 Booking System

A modern, responsive room reservation system built with **React**, **TypeScript**, and **Tailwind CSS**. This template provides a sleek booking form interface with form validation, perfect for hotels, resorts, or rental properties.

![Booking System Preview](./preview.png)

---

## ✨ Features

- 🎨 **Modern UI Design** – Clean, professional interface with Tailwind CSS
- 📱 **Fully Responsive** – Optimized for desktop, tablet, and mobile devices
- 📘 **TypeScript** – Type-safe code with full IntelliSense support
- ⚡ **React Compiler** – Automatic optimizations for better performance
- 🧩 **Modular Components** – Reusable form components (Input, Select, Button)
- ✅ **Form Validation** – Client-side validation for required fields
- 🌍 **Country Selector** – Pre-populated list of countries for easy selection
- 🚀 **Fast Development** – Powered by Vite for instant HMR and builds

---

## 🛠️ Tech Stack

| Technology         | Version | Description                   |
| ------------------ | ------- | ----------------------------- |
| **React**          | 19.2.4  | UI library with hooks         |
| **TypeScript**     | 5.9.3   | Type-safe JavaScript          |
| **Vite**           | 8.0.1   | Next-gen frontend tooling     |
| **Tailwind CSS**   | 4.2.2   | Utility-first CSS framework   |
| **ESLint**         | 9.39.4  | JavaScript/TypeScript linter  |
| **Babel**          | 7.29.0  | JavaScript compiler           |
| **React Compiler** | 1.0.0   | Automatic React optimizations |

---

## 📦 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/mashrafimahin/BookingSystemTypeScript.git
   cd BookingSystemTypeScript
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

---

## 📁 Project Structure

```
Booking/
├── public/
│   ├── favicon.svg          # App favicon
│   └── icons.svg            # Icon assets
├── src/
│   ├── assets/
│   │   └── bg.jpg           # Background image
│   ├── component/
│   │   ├── Button.tsx       # Reusable button component
│   │   ├── Form.tsx         # Main booking form component
│   │   ├── Input.tsx        # Reusable input component
│   │   └── Select.tsx       # Reusable select dropdown component
│   ├── data/
│   │   └── Info.tsx         # Static data (countries list)
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Application entry point
│   └── style.css            # Global styles & Tailwind imports
├── index.html               # HTML entry point
├── package.json             # Project dependencies
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
└── eslint.config.js         # ESLint configuration
```

---

## 🎯 Form Fields

The booking form collects the following information:

| Section           | Fields                                                             |
| ----------------- | ------------------------------------------------------------------ |
| **Personal Info** | First Name, Last Name                                              |
| **Address**       | Address Line 1, Address Line 2, City, Region, Postal Code, Country |
| **Contact**       | Email, Phone Number                                                |
| **Accommodation** | Number of Adults, Number of Kids (optional)                        |

---

## 🚀 Available Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start development server with HMR        |
| `npm run build`   | Build for production (TypeScript + Vite) |
| `npm run lint`    | Run ESLint for code quality checks       |
| `npm run preview` | Preview production build locally         |

---

## 🎨 Customization

### Styling

The project uses **Tailwind CSS v4** with custom component classes defined in `src/style.css`:

```css
@import "tailwindcss";

@layer components {
  .commonLabel {
    @apply font-sans text-sm;
  }
  .commonSup {
    @apply text-red-700;
  }
  .commonPartition {
    @apply flex flex-col gap-2 w-full;
  }
}
```

### Adding Countries

To modify the country list, edit `src/data/Info.tsx`:

```typescript
export const countries: string[] = [
  "Your Country",
  // Add more countries...
];
```

### Form Validation

Current validation is basic. For production, consider implementing:

- Email format validation
- Phone number format validation
- Required field indicators
- Error messages per field

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📧 Contact

**Mashrafi Mahin**  
GitHub: [@mashrafimahin](https://github.com/mashrafimahin)

Project Link: [https://github.com/mashrafimahin/BookingSystemTypeScript](https://github.com/mashrafimahin/BookingSystemTypeScript)

---

## 🙏 Acknowledgments

- [React](https://react.dev/) – The library for web and native user interfaces
- [Vite](https://vitejs.dev/) – Next generation frontend tooling
- [Tailwind CSS](https://tailwindcss.com/) – Rapidly build modern websites
- [TypeScript](https://www.typescriptlang.org/) – JavaScript with syntax for types

---

<p align="center">Made with ❤️ by <a href="https://github.com/mashrafimahin">Mashrafi Mahin</a></p>
