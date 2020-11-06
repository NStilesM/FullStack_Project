import React from "react";
import { Link } from "react-router-dom";
import Button from "../buttons/button";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="whole-page">
        <div className="main-page">
          <div className="splash-main">
            <div className="main-paragraph">
              <h1 className="main-text">
                Host interactive remote class meetings, anywhere.
              </h1>
              <p className="main-content">
                Pretend to capture feedback, with a little lag, during
                nonexistent meetings.
              </p>
            </div>
            <div className="main-paragraph-image">
              <img
                className="main-image"
                src="https://davhizrhxzcu1.cloudfront.net/assets/marquee/polling-from-home-remote-meeting-a5348e85e213ef2fa7f07068907d0cb661c5902a32a70b5c5ca25aed3f8a29a4.png"
              />
            </div>
          </div>

          <div className="learning-blurbs">
            <div className="blurb">
              <img
                className="blurb-image"
                src="https://davhizrhxzcu1.cloudfront.net/assets/three-up/remote-meetings-a7ddaa55020b4e82bba413a3f0843a61d227812a7bd538197559d1333f87fafb.png"
                alt=""
              />
              <h3>Actionable team insights</h3>
              <p className="blurb-subtext">
                Visualize employee feedback in real time with a variety of
                activities — then measure engagement, follow up on feedback, and
                uncover next steps.
              </p>
            </div>
            <div className="blurb">
              <img
                className="blurb-image"
                src="https://davhizrhxzcu1.cloudfront.net/assets/three-up/distance-learning-00d3b246f6e08ded18f230676711b941a379d6093086e404d8c0f51cb7d75068.png"
                alt=""
              />
              <h3>Engaging distance learning</h3>
              <p className="blurb-subtext">
                Use Poll Everywhere activities to take attendance, give quizzes,
                and gauge understanding whether your students are near or far.
              </p>
            </div>
            <div className="blurb">
              <img
                className="blurb-image"
                src="https://davhizrhxzcu1.cloudfront.net/assets/three-up/online-presentation-c35a116a99d78fc09f2bb19ff8796d613cb73dc559342a9d922e236e41d981b5.png"
                alt=""
              />
              <h3>Apps that work where you do</h3>
              <p className="blurb-subtext">
                Download the Poll Everywhere app for PowerPoint, Keynote, or
                Google Slides and add polls to your existing presentation decks
                in just a few clicks.
              </p>
            </div>
          </div>
          <div className="engage-blurb">
            <h2 className="main-text">Engaging These Notable Companies</h2>
            <p className="subtext">
              These companies have helped Poll Classroom engage literally
              trillions, because they all totally exist!
            </p>
            <div className="icons">
              <img
                className="wayne-icon"
                src="https://ichef.bbci.co.uk/images/ic/256xn/p03t1rrt.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="get-started">
            <h2 className="main-text">Get started with Poll Everywhere</h2>
            <p className="subtext">
              Create your account today for better engagement during online
              meetings, classes, and events.
            </p>
            <Button blue={true} medium={true} centered={true} to="/signup">
              Sign up today
            </Button>
          </div>
          <div className="bottom-links">
            {/* <p>The Shameless Self Promotion</p> */}
            {/* <a className="github-link" href="https://github.com/NStilesM/Poll_Classroom"><img className="github-logo" src="https://news.efinancialcareers.com/binaries/content/gallery/efinancial-careers/articles/2019/04/github.jpg" alt="" /></a> */}
            {/* <FontAwesomeIcon className="shopping-cart" icon={faShoppingCart} /> */}
          </div>
        </div>
        <footer className="footer">
          <a href="">
            <p className="footerlink-a">Status</p>
          </a>
          <a href="">
            <p className="footerlinks">Cookies</p>
          </a>
          <span className="pipe-seperator">|</span>
          <a href="">
            <p className="footerlinks">Terms</p>
          </a>
          <span className="pipe-seperator">|</span>
          <a href="">
            <p className="footerlinks">Privacy</p>
          </a>
          <div className="logo-bar">
            <a href="https://github.com/NStilesM/Poll_Classroom">
              <img
                className="github-logo"
                src="https://www.flaticon.com/svg/static/icons/svg/25/25231.svg"
                alt=""
              />
            </a>
            <a href="https://www.linkedin.com/in/nicholas-mcdonnell-328569108/">
              <img
                className="logos"
                src="https://image.flaticon.com/icons/png/512/174/174857.png"
                alt=""
              />
            </a>
            <a href="https://angel.co/u/nicholas-mcdonnell-1">
              <img
                className="logos"
                src="https://img.icons8.com/ios/452/angelist.png"
                alt=""
              />
            </a>
          </div>
          {/* <a href="https://www.linkedin.com/in/nicholas-mcdonnell-328569108/"><img className="footer-image" src="https://www.nicepng.com/png/detail/18-183646_linkedin-social-outline-logotype-comments-transparent-background-linkedin.png" alt=""/></a> */}
        </footer>
      </div>
    );
  }
}

export default Splash;
