import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faCropSimple} from "@fortawesome/free-solid-svg-icons";
import {faAppStore } from "@fortawesome/free-brands-svg-icons"
const Services = () => {
  return (
    <>
      <div id="services">
        <div className="container">
          <h1 className="sub-title">My services</h1>
          <div className="services-list">
            <div>
              <FontAwesomeIcon icon={faCode} />
              <h2>Web Design</h2>
              <p>
                I learned how to create a user-friendly websites. I make sure to
                satisfy those important point such as: Custom Website
                Design,Responsive Design,User experience optimization,Visual
                branding integration,Collaborative Approach
              </p>
            </div>
            <div>
              <FontAwesomeIcon icon={faCropSimple} />
              <h2>UI/UX design</h2>
              <p>
                Elevate your digital experience with our UI/UX Design Services.
                We combine user-centric design principles and captivating
                visuals to create intuitive interfaces that engage and delight
                the audience.
              </p>
            </div>
            <div>
              <FontAwesomeIcon icon={faAppStore}/>
              <h2>APP Design</h2>
              <p>
                Transform your vision into a stunning mobile experience with our
                App Design services. We blend seamless usability and captivating
                aesthetics to create intuitive interfaces that bring your app to
                life.
              </p>
              {/* <Link to="/">Link Text</Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
