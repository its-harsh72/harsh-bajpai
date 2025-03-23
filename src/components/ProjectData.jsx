import SnapNews from '../assets/SnapNews.png';
import Notedify from '../assets/Notedify.jpeg';
import Scanic from '../assets/Scanic.jpeg';
import Dirac from '../assets/Dirac.jpeg';

const ProjectData = [
  {
    title: "SnapNews",
    description: "SnapNew is a platform that delivers daily, real-time news updates using the open-source NewsAPI. Users can explore news based on their country and preferred categories for a personalized experience. Built with ReactJS and NextJS, SnapNew provides a smooth and interactive interface for seamless data visualization. Stay informed effortlessly with SnapNew, offering easy access to global and local news in a user-friendly and engaging way.",
    image: SnapNews,  // Use the image path directly here
    technologies: ["ReactJs", "Bootstrap","HTML", "JavaScript"],
  },
  {
    title: "Notedify",
    description: "This ReactJS-based project securely stores user notes on the cloud, allowing users to perform CRUD (Create, Read, Update, Delete) operations. It incorporates user-specific encrypted passwords for security. Built using ReactJS for the frontend, Express for API development, NodeJS for backend support, and MongoDB for data storage, the project ensures secure authentication through JWT encryption, providing a safe and reliable platform for users to manage their notes.",
    image:Notedify,
    technologies: ["ReactJs", "NodeJs","MongoDB", "ExpressJs","JavaScript"],
  },
  {
    title: "Dirac",
    description: "Dirac is a voice-command-driven assistant built in Python using libraries like SpeechRecognition and pyAudio. It listens to user commands to perform tasks such as adjusting system volume, opening apps, and reminding users of their to-do tasks based on the current time. Additionally, it greets the user, offering a personalized and interactive experience. Dirac makes daily tasks easier through efficient voice recognition, providing seamless system management and organization.",
    image:Dirac,
    technologies: ["Python", "SpeechRecognition", "PyAudio", "pyttsx3"]
  },
  {
    title: "Scanic",
    description: "Scanic is a powerful QR code generator that allows users to easily create codes for storing various types of information, from website URLs and contact details to event tickets and product data. With a sleek, user-friendly interface, Scanic offers customizable QR codes that can store text, links, and more. Whether for business, marketing, or personal use, Scanic ensures your information is securely encoded and quickly accessible through fast, reliable scanning technology."
    ,image:Scanic,
    technologies: ["JavaScript", "HTML", "CSS"]
  },
];

export default ProjectData;
