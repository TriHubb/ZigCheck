import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home">
      <div class="content" id="home-content">
        <h1>Try <span class="special-color">validate</span> your vehicle info</h1>
        <p class="center-text">This is a vehicle data validation system that leverages multiple data sources and machine learning algorithms to detect, suggest corrections, and auto-complete vehicle information during the insurace application process.</p>
        <Link to="/validate" class="transpatent-btn">Try now</Link>
      </div>
      <div class="content" id="features-content">
        <h1>Features</h1>
        <div class="grid-container">
          <div class="grid-item">
            <h2>OCR Autofill</h2>
            <p>Extracts text from uploaded documents Vehicle Ownership Certificate (VOC) to auto-fill vehicle information.</p>
          </div>
          <div class="grid-item">
            <h2>Plate Validation</h2>
            <p>Validates entered vehicle plate number against trusted records. Autofill details via external database or API.</p>
          </div>
          <div class="grid-item">
            <h2>Model Validation</h2>
            <p>Validates entered vehicle make, model, and year against trusted records. Verifies in real time via external database or API.</p>
          </div>
          <div class="grid-item">
            <h2>Others</h2>
            <p>Typo correction. Phone number validation, verifies phone number format and ensures it is active/reachable. Email validation, checks email syntax and confirms inbox availability for communications.</p>
          </div>
        </div>
      </div>
      <div class="content" id="about-content">
        <h1>About</h1>
        <div class="normal-text">
          <p>ZigCheck is a smart system designed to verify and validate vehicle information quickly and accurately. By using multiple trusted data sources and machine learning, the system can detect errors, suggest corrections, and auto-complete missing details. This helps users save time, avoid mistakes, and ensure reliable data when applying for insurance or other vehicle- related services.</p>
          <p>This project is part of Code Nection 2025, developed by our team TriHard, our chosen track is Industrial Collaboration.</p>
          <p>Free to give us feedback on github or form:</p>
        </div>
        <a href="https://github.com/TriHubb/ZigCheck" class="transpatent-btn">GitHub</a>
      </div>
    </div>
  );
}

export default Home;
