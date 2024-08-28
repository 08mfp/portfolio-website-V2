# Portfolio Website V2

Here is my second attempt at a portfolio website.


## Table of Contents

- [Features](#features)
- [Sample Images](#sample-images)
  - [Home Page](#home-page)
  - [About Section](#about-section)
  - [Experience Section](#experience-section)
  - [Skills Section](#skills-section)
  - [Projects Section](#projects-section)
  - [Certifications](#certifications)
  - [Contact Page](#contact-page)
- [Project Structure](#project-structure)
- [Steps to Run the Code/Website](#steps-to-run-the-codewebsite)
- [Learn More](#learn-more)
- [Acknowledgement and Thank You](#acknowledgement-and-thank-you)

## Features

- **3D Hero Section**:3D desktop model (CURRENTLY REMOVED).
  
- **Experience and Work Sections**: Animations powered by Framer Motion.

- **Skills Section**: Shows skills Using 3D geometries with Three.js and React Three Fiber.

- **Projects and Certifications**: Animated sections for projects and certifications using Framer Motion.

- **Contact Section**: Includes a earth model with email functionality using EmailJS.

- **Stars Background**: Generates moving stars at random positions using Three.js.

- **Scroll Animations**: Scrolling animations implemented using Framer Motion.

## Sample Images

### Home Page
*Screenshot Placeholder*

### About Section
*Screenshot Placeholder*

### Experience Section
*Screenshot Placeholder*

### Skills Section
*Screenshot Placeholder*

### Projects Section
*Screenshot Placeholder*

### Certifications
*Screenshot Placeholder*

### Contact Page
*Screenshot Placeholder*

## Project Structure

The project is organized as follows:

- **src/assets**: Contains static assets like images and icons.
- **src/components**: Reusable UI components, including interactive and animated elements.
  - **canvas**: Contains 3D models and Three.js components.
    - `Ball.jsx`, `Computers.jsx`, `Earth.jsx`, `Stars.jsx`: 3D elements used across various sections.
    - `index.js`: Main entry point for canvas-related components.
  - **About.jsx**, **Contact.jsx**, **Experience.jsx**, **Feedbacks.jsx**, **Hero.jsx**, **Loader.jsx**, **Navbar.jsx**, **Tech.jsx**, **Works.jsx**: Core UI components for each section of the website.
  - **index.js**: Central entry point for importing components.

- **src/constants**: Contains constant values used across the application.
  - `index.js`: Main entry point for constants.

- **src/hoc**: Higher Order Components for wrapping and enhancing existing components.
  - `index.js`, `SectionWrapper.jsx`: HOC components to structure and manage sections.

- **src/utils**: Utility functions and helpers used throughout the project.
  - `App.jsx`, `index.css`, `main.jsx`, `styles.js`: Core utility files managing application logic and styling.

- **src/App.jsx**: Main application file.
- **src/index.jsx**: Entry point of the application.

## Steps to Run the Code/Website


Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone project.git
cd project
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
REACT_APP_EMAILJS_USERID=your_emailjs_user_id
REACT_APP_EMAILJS_TEMPLATEID=your_emailjs_template_id
REACT_APP_EMAILJS_RECEIVERID=your_emailjs_receiver_id
```

Replace the placeholder values with your actual EmailJS credentials. You can obtain these credentials by signing up on the [EmailJS website](https://www.emailjs.com/).

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the project.

## Learn More

For further reading and advanced topics:

- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started) - Comprehensive guide on using Create React App.
- [React Documentation](https://reactjs.org/) - Official React documentation for learning more about React and its ecosystem.

## Acknowledgement and Thank You

This project was developed with the help of a tutorial provided by **JavaScript Mastery**. A big thank you to **Adrian Hajdin** for his detailed tutorial and open-source contributions.

- **GitHub**: [Adrian Hajdin's GitHub](https://github.com/adrianhajdin)
- **Project Repository**: [3D Developer Portfolio Repo](https://github.com/adrianhajdin/project_3D_developer_portfolio)
- **YouTube Channel**: [JavaScript Mastery YouTube](https://www.youtube.com/@javascriptmastery/videos)
- **YouTube Video Tutorial**: [Watch the Tutorial](https://youtu.be/0fYi8SGA20k)
