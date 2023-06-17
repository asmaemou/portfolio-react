const About = () =>{
    return(
        <>
        <div id="about">
   <div className="container">
      <div className="row">
         <div className=" 1">
            <img className="about-image" src="about.png" alt="logo of my portfolio"/>
         </div>
         <div className="about-col-2">
            <h1 className="sub-title">About Me</h1>
            <p>I am a student majoring in computer science at Al Akhawayn University in Morocco and minoring in Mathematics at Agnes Scott in US. As an experienced computer science student, I am passionate about leveraging 
               technology to solve complex problems. 
               With a track record of consistent hard work and determination, I am committed 
               to honing my skills and expanding my expertise as a full stack developer. 
               I believe that with continuous learning and growth, I can drive 
               innovative solutions and make a positive impact in the tech industry.</p>
               
               <div className="tab-titles">
                  <p className="tab-links active-link" onclick= "opentab('skills')">Skills</p>
                  <p className="tab-links" onclick= "opentab('experience')">Experience </p>
                  <p className="tab-links" onclick= "opentab('education')">Education </p>
                  <p className="tab-links" onclick= "opentab('awards')">Awards </p>

               </div>
               <div className="tab-contents active-tab" id="skills">
                  <ul>
                     <li><span>Back-End</span><br/>PostgresSQL,Django</li>
                     <li><span>Front-End</span><br/>JavaScript,HTML,CSS</li>
                     <li><span>Tools and Methods</span><br/>GitHub,Figma</li>
                     <li><span>Soft Skills</span><br/>Communication,Teamwork,Conflict Resolution,Adaptability,Perseverance,Determination</li>
                  </ul>
               </div>
               <div className="tab-contents" id="experience">
                  <ul>
                     <li><span>May 2023-current</span><br/>Designing Web/App interfaces</li>
                     <li><span>May 2023-current</span><br/>Web App Development</li>
                     <li><span>May 2023-current</span><br/>building Android/IOS apps</li>
                  </ul>
               </div>
               <div className="tab-contents" id="education">
                  <ul>
                     <li><span>2023</span><br/>Exchange semester at Agnes Scott College in USA</li>
                     <li><span>2024</span><br/>Internship</li>
                     <li><span>2025</span><br/>Graduation</li>
                     <li><span>2020</span><br/>Bachelor at Al Akhawayn University in Morocco </li>
                  </ul>
               </div>
               <div className="tab-contents" id="awards">
                  <ul>
                     <li><span>2020</span><br/>First Student Grade in my baccalaureate in my region </li>
                     <li><span>2022</span><br/>Dean's List at Al Akhawayn University in Morocco</li>
                     <li><span>2023</span><br/>Honor List at Agnes Scott College in USA</li>
                  </ul>
               </div>
         </div>
      </div>
   </div>
</div>
        </>
    );
}
export default About;