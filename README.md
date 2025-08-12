
# Image Search App

A modern React application for searching and browsing images. Users can search for images by keyword, view results in a responsive gallery, open images in a modal, and load more results. Built as part of the GoIT React course (Module 4).


## 🚀 Features

- **Image Search**: Search for images by keyword using a public API (via a secure proxy)
- **Image Gallery**: Responsive grid gallery with image cards
- **Image Modal**: Click any image to view it in a modal with details
- **Load More**: Fetch more images with a single click
- **Loader & Error Handling**: Visual loader and error messages for better UX
- **Toast Notifications**: User feedback for search and errors


## 🛠️ Technologies Used

- **React 19.1.0** – Modern React with hooks
- **Vite 7.0.4** – Fast build tool and dev server
- **Axios** – HTTP client for API requests
- **react-modal** – Accessible modal dialogs
- **react-hot-toast** – Toast notifications
- **CSS Modules** – Scoped component styling
- **ESLint** – Code linting and formatting


## 📁 Project Structure

```
src/
├── App.jsx                # Main application component
├── app.module.css         # Global styles
├── main.jsx               # App entry point
├── components/
│   ├── ErrorMessage/      # Error message UI
│   ├── ImageCard/         # Single image card
│   ├── ImageGallery/      # Gallery grid
│   ├── ImageModal/        # Modal for image preview
│   ├── Loader/            # Loader spinner
│   ├── LoadMoreBtn/       # Load more button
│   ├── SearchBar/         # Search input form
│   └── toast/             # Toast notifications
├── data/
│   ├── api.js             # API request logic
│   └── useStore.js        # Custom state management hook
└── libs/
    └── classnames.js      # Utility for conditional CSS classes
```


## 🎯 How It Works

1. **Search Images**: Enter a keyword (min 3 characters) in the search bar and submit.
2. **View Results**: Images matching your query appear in a gallery grid.
3. **Load More**: Click "Load More" to fetch additional results.
4. **Image Modal**: Click any image to view it larger in a modal with details.
5. **Error Handling**: If the API fails, an error message and toast notification are shown.
6. **User Feedback**: Toasts provide info and error feedback for user actions.


## 🚀 Getting Started

### Prerequisites

- Node.js (version 20 or higher)
- pnpm (or npm/yarn)

### Installation


1. Clone the repository:
```bash
git clone <repository-url>
cd goit-neo-react-hw-module4
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

- `pnpm dev` – Start development server
- `pnpm build` – Build for production
- `pnpm lint` – Run ESLint
- `pnpm preview` – Preview production build


## 💡 Key Implementation Details

### State Management

- Uses a custom `useStore` hook for managing image data, search state, loading, errors, and pagination.

### API Integration

- Fetches images from a public API via a secure Node.js proxy (see `/proxy`).
- Handles pagination and search queries.

### Component Architecture

- **SearchBar**: Handles user input and validation for search terms.
- **ImageGallery & ImageCard**: Displays images in a responsive grid.
- **ImageModal**: Shows a larger image and details in a modal dialog.
- **Loader**: Shows a spinner while loading data.
- **LoadMoreBtn**: Loads more images on click.
- **ErrorMessage**: Displays errors if API requests fail.
- **Toaster**: Shows toast notifications for user feedback.

### Styling

- CSS Modules for component-scoped, maintainable styles.


## 📝 Learning Objectives

This project demonstrates:
- React functional components and hooks
- Custom hooks for state management
- API integration and error handling
- Modal dialogs and accessibility
- Toast notifications for UX
- Component composition and reusability
- CSS Modules for styling
- Event handling and conditional rendering


## 🤝 Contributing

This is a homework project for the GoIT React course. If you are a student, feel free to use this as a reference, but make sure to understand the concepts and write your own code.


## 📄 License

This project is created for educational purposes as part of the GoIT React course curriculum.