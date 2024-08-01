import React from 'react';
import './Home.scss'; // Assuming you are using SCSS for styling
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
        <div className="home-container">
            <header className="hero-section">
                <div className="hero-content">
                    <h1>Welcome to the Ultimate Quiz Experience</h1>
                    <p>Discover, learn, and test your knowledge with our engaging quizzes.</p>
                    <button className="cta-button">Start Your Journey</button>
                </div>
            </header>
            <section className="features-section">
                <h2>Why Choose Us?</h2>
                <div className="features">
                    <div className="feature">
                        <i className="feature-icon fas fa-tachometer-alt"></i>
                        <h3>Instant Feedback</h3>
                        <p>Get immediate results and understand your strengths and areas for improvement.</p>
                    </div>
                    <div className="feature">
                        <i className="feature-icon fas fa-laptop"></i>
                        <h3>Interactive Quizzes</h3>
                        <p>Enjoy quizzes designed to be interactive and fun, with multimedia content to enhance learning.</p>
                    </div>
                    <div className="feature">
                        <i className="feature-icon fas fa-medal"></i>
                        <h3>Track Your Progress</h3>
                        <p>Monitor your progress with detailed statistics and personalized feedback.</p>
                    </div>
                </div>
            </section>
            <section className="cta-section">
                <h2>Ready to Test Your Knowledge?</h2>
                <p>Join our community and start quizzing today!</p>
                <Link to={'/topic/'} className="cta-button">Join Now</Link>
            </section>
        </div>
        </>
    );
}

export default Home;
