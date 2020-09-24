import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

class Splash extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>

                <div className="splash-main">
                <NavBarContainer />
                    <div className="main-paragraph">
                        <h1 className="main-text">Host uninteractive remote class meetings, anywhere.</h1>
                        <p className="main-content">Pretend to capture feedback, with a little lag, during nonexistent meetings.</p>
                    </div>
                    <div className="main-paragraph-image">
                        <img className="main-image" src="https://davhizrhxzcu1.cloudfront.net/assets/marquee/polling-from-home-remote-meeting-a5348e85e213ef2fa7f07068907d0cb661c5902a32a70b5c5ca25aed3f8a29a4.png" />
                    </div>
                    
                </div>
                <div className="learning-blurbs">   
                    <div className="blurb">
                        <img className="blurb-image" src="https://davhizrhxzcu1.cloudfront.net/assets/three-up/remote-meetings-a7ddaa55020b4e82bba413a3f0843a61d227812a7bd538197559d1333f87fafb.png" alt=""/>
                        <h3>This are bar graphs?</h3>
                        <p>Visualize your self shock as you find yourself unable to do anything.</p>
                    </div>
                    <div className="blurb">
                        <img className="blurb-image" src="https://davhizrhxzcu1.cloudfront.net/assets/three-up/distance-learning-00d3b246f6e08ded18f230676711b941a379d6093086e404d8c0f51cb7d75068.png" alt=""/>
                        <h3>This is a computer screen!</h3>
                        <p>Computer's are imporant, but should you get one?</p>
                    </div>
                    <div className="blurb">
                        <img className="blurb-image" src="https://davhizrhxzcu1.cloudfront.net/assets/three-up/online-presentation-c35a116a99d78fc09f2bb19ff8796d613cb73dc559342a9d922e236e41d981b5.png" alt=""/>
                        <h3>Powerpoint?</h3>
                        <p>Lorem ipsum wordem arem difficultem ifem onlyem iem couldem randomem generateem morem wordsem.</p>
                    </div>
                </div>
                <div className="engage-blurb">
                    <h2>Engaging, Literally Nobody</h2>
                    <p>These companies have helped Poll Classroom engage literally trillions, because they all totally exist!</p>
                    <div className="icons">
                        <img className="wayne-icon" src="https://ichef.bbci.co.uk/images/ic/256xn/p03t1rrt.jpg" alt=""/>
                        <img className="stark-icon" src="https://www.logolynx.com/images/logolynx/50/502772a77699667df61044e401ea1ca9.jpeg" alt=""/>
                        <img className="lexcorp-icon" src="https://i.etsystatic.com/13357682/r/il/29d942/1174297059/il_570xN.1174297059_8wmo.jpg" alt=""/>
                        
                    </div>
                </div>
                <div className="bottom-links">
                    {/* <p>The Shameless Self Promotion</p> */}
                    <a className="github-link" href="https://github.com/NStilesM/Poll_Classroom"><img className="github-logo" src="https://news.efinancialcareers.com/binaries/content/gallery/efinancial-careers/articles/2019/04/github.jpg" alt="" /></a>
                    {/* <FontAwesomeIcon className="shopping-cart" icon={faShoppingCart} /> */}
                </div>
            </div>
        )
    }
}

export default Splash;