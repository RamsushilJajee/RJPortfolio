# Professional Software Developer Portfolio

A modern, responsive, and advanced portfolio website built with Next.js, Tailwind CSS, and Framer Motion. This project features a clean UI with light/dark mode support, smooth animations, and a modular component structure.

## Features

- **Modern UI/UX**: Clean and professional design.
- **Dark/Light Mode**: Fully supported theme switching.
- **Responsive Design**: Looks great on all devices (Mobile, Tablet, Desktop).
- **Animations**: Smooth transitions using Framer Motion.
- **Sections**:
  - Hero (Introduction)
  - About Me
  - Technical Skills
  - Projects Showcase
  - Contact Form

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (Node Package Manager)

### Installation

1.  **Clone the repository** (if you haven't already):
    ```bash
    git clone <repository-url>
    cd portfolio
    ```

2.  **Install Dependencies**:
    Run the following command to install all necessary packages:
    ```bash
    npm install
    ```

### Running the Project

1.  **Start the Development Server**:
    ```bash
    npm run dev
    ```

2.  **View the Application**:
    Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

### Building for Production

To create an optimized production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## Project Structure

- `app/`: Application routes and layouts.
- `components/`: Reusable UI components.
  - `ui/`: Basic UI elements (Button, etc.).
- `lib/`: Utility functions.
- `public/`: Static assets.
