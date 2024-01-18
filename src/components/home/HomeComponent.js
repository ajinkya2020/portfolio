import React from "react";
import "./HomeComponent.css";

function HomeComponent() {
  return (
    <div className="home-container mt-20">
      <div className="flex justify-around">
        <div className="text-3xl text-left">
          <div>Ajinkya</div>
          <span>Suryawanshi</span>
          <span className="font-bold text-yellow-600">.</span>
          <div className="my-name mt-7"></div>
          <section className="homenav-social">
            <nav>
              <ul>
                <li><a href="https://www.linkedin.com/in/ajinkya-suryawanshi-815851190/"><img src="/linkedin_icon.png" alt="linkedIn"/></a></li>
                <li><a href="https://github.com/ajinkya2020"><img src="/github_icon.png" alt="github"/></a></li>
                <li><a href="https://www.instagram.com/_aajinkya_/"><img src="/instagram_icon.png" alt="instagram"/></a></li>
                <li><a href="mailto: ajinkyasuryawanshi20@gmail.com"><img src="/mail_icon.png" alt="gmail"/></a></li>
              </ul>
            </nav>
          </section>
        </div>
        <div className="text-left">
          <div className="font-bold text-yellow-600 introduction-title">INTRODUCTION</div>
          <div>Full Stack Web Developer</div>
          <div className="text-gray-400">I am a software developer based off in India.<br></br> My tech stack include Angular, React, Mongodb, MySQL, Express, Node</div>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;
