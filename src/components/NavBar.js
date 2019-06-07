import React from 'react';
import "../style.css";

class NavBar extends React.Component {
  render() {
    return (
      <header className="header">
  <div className="text-box">
    <h1 className="heading-primary">
      <span className="heading-primary-main">Swan Vitality Personal Trainers</span>
      <a className="nav-item nav-link active btn btn-white btn-animated heading-primary-sub" id="navLinks" href="/">Home</a>
      <a className="nav-item nav-link active btn btn-white btn-animated heading-primary-sub2" id="navLinks" href="/packages">Packages</a>
      <a className="nav-item nav-link active btn btn-white btn-animated heading-primary-sub3" id="navLinks" href="/videos">Videos</a>
      <a className="nav-item nav-link active btn btn-white btn-animated heading-primary-sub4" id="navLinks" href="/swizzle">Swizzle TV</a>
      <a className="nav-item nav-link active btn btn-white btn-animated heading-primary-sub5" id="navLinks" href="about">About</a>
    </h1>
  </div>
</header>
    );
  }
}

export default NavBar;