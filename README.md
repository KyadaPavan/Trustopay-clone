
# Trustopay Interview Task

This repository contains the solution for the interview task assignment provided by Trustopay. The project is built using React.js for frontend development, styled with TailwindCSS, and react icons for icons.

## Prerequisites

Before running the project, ensure you have the following software installed:

- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js)
- **Git** (for cloning the repository)

## Getting Started

Follow the steps below to set up and run the project on your local machine:

### 1. Clone the Repository

Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/KyadaPavan/trustopay-clone.git
```


### 2. Install Dependencies

Navigate into the project directory and install the necessary dependencies:

```bash
cd trustopay-clone
npm install
```

This command will install all required dependencies listed in the `package.json` file.

### 3. Configure TailwindCSS

For using TailwindCSS, make sure the Tailwind configuration is set up correctly. The default configuration should include the paths to your pages and components. Check `tailwind.config.js` to ensure it's correctly configured for your project:

```js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 4. Run the Development Server

To start the development server, run the following command:

```bash
npm run dev
```

This will launch the app on `http://localhost:3000`. Open the URL in your browser to see the project running.


## Folder Structure

- **`src/components/`**: Contains reusable React components for the app.
- **`src/pages/`**: Contains Next.js page components, responsible for rendering specific routes.
- **`src/styles/`**: Contains TailwindCSS or custom CSS files.
  
## Technologies Used

- **TailwindCSS**: Utility-first CSS framework for custom UI styling.
- **React**: JavaScript library for building user interfaces.
