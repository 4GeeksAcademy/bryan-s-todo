import React from "react";
import { Link } from "react-router-dom"; // import Link from react-router-dom

const Landing = () => {
  return (
    <div className="text-center">
      <h1 className="land-title">Todo List App</h1>
      <Link to="/home" className="btn btn-primary btn-lg">Get Started</Link> {/* This will link to the /home route */}
    </div>
  );
};

export default Landing;
