# Phonebook App

A React-based contact management application that allows users to store, search, and manage their contacts. This project is part of the GoIT React course homework (Module 3).

## 🚀 Features

- **Contact Management**: Add new contacts with name and phone number
- **Form Validation**: Input validation using Formik and Yup schemas
- **Search Functionality**: Real-time search through contacts by name
- **Contact Deletion**: Remove contacts from the phonebook
- **Data Persistence**: Contact data is saved to localStorage and persists across browser sessions
- **Responsive Design**: Clean, modern interface with CSS modules
- **Duplicate Prevention**: Prevents adding contacts with duplicate names

## 🛠️ Technologies Used

- **React 19.1.0** - Modern React with hooks
- **Vite 7.0.4** - Fast build tool and development server
- **Formik 2.4.6** - Form handling and validation
- **Yup 1.7.0** - Schema validation library
- **CSS Modules** - Scoped styling for components
- **Local Storage API** - Client-side data persistence
- **ESLint** - Code linting and formatting

## 📁 Project Structure

```
src/
├── App.jsx                 # Main application component
├── app.module.css         # Global application styles
├── main.jsx               # Application entry point
├── components/
│   ├── Contact/           # Individual contact display component
│   ├── ContactForm/       # Contact creation form with validation
│   ├── ContactList/       # List of all contacts
│   └── SearchBox/         # Search functionality component
├── data/
│   └── useStore.js        # Custom hook for state management
└── libs/
    └── classnames.js      # Utility for conditional CSS classes
```

## 🎯 How It Works

1. **Add Contacts**: Fill out the form with a name and phone number to add new contacts
2. **Form Validation**: The form uses Yup validation schema to ensure:
   - Name field is required and must be at least 3 characters
   - Phone number field is required and follows the pattern XXX-X-XX
3. **Search Contacts**: Use the search box to filter contacts by name in real-time
4. **Delete Contacts**: Click the delete button next to any contact to remove it
5. **Data Persistence**: All contact data is automatically saved to localStorage

## 🚀 Getting Started

### Prerequisites

- Node.js (version 20 or higher)
- pnpm (or npm/yarn)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd goit-neo-react-hw-module3
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm lint` - Run ESLint
- `pnpm preview` - Preview production build

## 💡 Key Implementation Details

### Form Handling with Formik

The application uses Formik for form management, providing:
- Form state management
- Field validation on blur and submit
- Error message display
- Form submission handling

### Validation with Yup

Custom validation schema ensures:
- Required field validation
- Minimum length requirements for names
- Phone number format validation

### Custom State Management Hook

The app uses a custom `useStore` hook that handles:
- State initialization from localStorage
- Contact add/delete operations
- Search functionality
- Automatic saving to localStorage

### Component Architecture

- **Modular Design**: Each component has its own directory with JSX and CSS modules
- **Props-based Communication**: Data flows down through props
- **Controlled Components**: Form inputs are controlled by Formik state

### Data Persistence

- Contact data is automatically saved to localStorage
- Data persists across browser sessions
- Graceful fallback to initial state if localStorage data is corrupted

## 🎨 Styling

The application uses CSS Modules for component-scoped styling, ensuring:
- No style conflicts between components
- Maintainable and organized CSS
- Clean, modern user interface

## 📝 Learning Objectives

This project demonstrates:
- React functional components and hooks
- Form handling with Formik
- Form validation with Yup
- State management in React
- Local storage integration
- Component composition and reusability
- CSS Modules usage
- Event handling in React
- Conditional rendering
- Props passing and data flow
- Search and filter functionality

## 🤝 Contributing

This is a homework project for the GoIT React course. If you're also a student working on similar exercises, feel free to use this as a reference, but make sure to understand the concepts and implement your own solution.

## 📄 License

This project is created for educational purposes as part of the GoIT React course curriculum.