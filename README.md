# Portfolio Website V2

Here is my second attempt at a portfolio website, which uses React, Vite, TailwindCSS, ThreeJS, Framer Motion, React Three Fiber, & EmailJS.

## Table of Contents


- [Sample Images](#sample-images)
  - [Home Page](#home-page)
  - [About Section](#about-section)
  - [Experience Section](#experience-section)
  - [Skills Section](#skills-section)
  - [Projects Section](#projects-section)
  - [Certifications](#certifications)
  - [Contact Page](#contact-page)
- [Features](#features)
- [Project Structure](#project-structure)
- [Steps to Run the Code/Website](#steps-to-run-the-codewebsite)
- [Learn More](#learn-more)
- [Acknowledgement and Thank You](#acknowledgement-and-thank-you)

## Sample Images

### Home Page
<img width="2055" alt="HomePage 1" src="https://github.com/user-attachments/assets/fe8b06f6-f650-418f-93cf-e1ebccc91b27">

Home Page without 3D Model:
<img width="2056" alt="HomePage 2" src="https://github.com/user-attachments/assets/b7b7180e-a3fe-42e0-9e45-712e3d3ffdb4">

### About Section
<img width="2056" alt="About Page" src="https://github.com/user-attachments/assets/28feff48-73f7-4d3b-990e-9ac5fa174276">

### Experience Section
<img width="2050" alt="Experience Page" src="https://github.com/user-attachments/assets/0e0bb9be-ed4a-4f75-908b-c7669788af3e">

### Skills Section
<img width="2056" alt="Skills Page" src="https://github.com/user-attachments/assets/77cae1d9-3e2c-48c2-9698-7b274eb0fa68">

### Projects Section
<img width="2056" alt="Projects Page" src="https://github.com/user-attachments/assets/3d7be3b9-71ca-4fe0-b043-7178db3164da">

### Certifications
<img width="2056" alt="Certifications Page" src="https://github.com/user-attachments/assets/871bde17-7eb4-4528-a64a-28db4bc9beab">

### Contact Page
<img width="2056" alt="Contact Page" src="https://github.com/user-attachments/assets/bab1ece8-cc34-420c-8a88-10442350616c">


## Features

- **3D Hero Section**:3D desktop model (CURRENTLY REMOVED).
  
- **Experience and Work Sections**: Animations powered by Framer Motion.

- **Skills Section**: Shows skills Using 3D geometries with Three.js and React Three Fiber.

- **Projects and Certifications**: Animated sections for projects and certifications using Framer Motion.

- **Contact Section**: Includes a earth model with email functionality using EmailJS.

- **Stars Background**: Generates moving stars at random positions using Three.js.

- **Scroll Animations**: Scrolling animations implemented using Framer Motion.

## Project Structure

The project is organized as follows:

- **src/assets**: Contains static assets like images and icons.
- **src/components**: Reusable UI components, including interactive and animated elements.
  - **canvas**: Contains 3D models and Three.js components.
    - `Ball.jsx`, `Computers.jsx`, `Earth.jsx`, `Stars.jsx`: 3D elements used across various sections.
    - `index.js`: Main entry point for canvas-related components.
  - **About.jsx**, **Contact.jsx**, **Experience.jsx**, **Feedbacks.jsx**, **Hero.jsx**, **Loader.jsx**, **Navbar.jsx**, **Tech.jsx**, **Works.jsx**: Core UI components for each section of the website.
  - **index.js**: Central entry point for importing components.

- **src/constants**: Contains the data and information.
  - `index.js`: Main entry point for all data.

- **src/hoc**: Higher Order Components for wrapping and enhancing existing components.
  - `index.js`, `SectionWrapper.jsx`: HOC components to structure and manage sections.

- **src/utils**: Utility functions and helpers used throughout the project.
  - `App.jsx`, `index.css`, `main.jsx`, `styles.js`: Utility files managing application logic and styling.

- **src/App.jsx**: Main application file.
- **src/index.jsx**: application file.

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


