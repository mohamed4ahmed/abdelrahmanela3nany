import React, { useEffect, useState } from "react";
import HomePageComponent from "../../components/homepage";
import nextId from "react-id-generator";
import "../information/styles.css";
import oneImg from "../../assets/img/oneImg.png";
import twoImg from "../../assets/img/twoImg.png";
import threeImg from "../../assets/img/threeImg.png";
import fourImg from "../../assets/img/fourImg.png";
import fiveImg from "../../assets/img/fiveImg.png";
import sixImg from "../../assets/img/sixImg.png";
import sevenImg from "../../assets/img/sevenImg.png";
import eightImg from "../../assets/img/eightImg.png";

import Spinner from "../../components/Spinner";
import { FaArrowCircleUp } from "react-icons/fa";

// const getLanguagesIcons = () => {
//   var json = {
//     icons: [
//       {
//         id: 1,
//         alt: "HTML5",
//         src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png",
//       },
//       {
//         id: 2,
//         alt: "CSS3",
//         src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png",
//       },
//       {
//         id: 3,
//         alt: "JavaScript",
//         src: "https://img.icons8.com/dusk/64/000000/javascript-logo.png",
//       },
//       {
//         id: 4,
//         alt: "React",
//         src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png",
//       },
//       {
//         id: 5,
//         alt: "Redux",
//         src: "https://img.icons8.com/color/48/000000/redux.png",
//       },
//       {
//         id: 6,
//         alt: "NodeJS",
//         src: "https://img.icons8.com/color/48/000000/nodejs.png",
//       },
//       {
//         id: 7,
//         alt: "ExpressJS",
//         src: "https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/359/full/expressjslogo.png",
//       },
//       // {
//       // 	id: 8,
//       // 	alt: "Python",
//       // 	src: "https://img.icons8.com/color/48/000000/python.png",
//       // },
//       // {
//       // 	id: 9,
//       // 	alt: "SQL",
//       // 	src: "https://img.icons8.com/bubbles/50/000000/data-configuration.png",
//       // },
//       // {
//       // 	id: 10,
//       // 	alt: "MongoDB",
//       // 	src: "https://img.icons8.com/color/48/000000/mongodb.png",
//       // },
//       // {
//       // 	id: 11,
//       // 	alt: "PostgreSQL",
//       // 	src: "https://img.icons8.com/color/48/000000/postgreesql.png",
//       // },
//     ],
//   };
//   return json.icons;
// };

// const getToolsIcon = () => {
//   let json = {
//     icons: [
//       {
//         id: nextId(),
//         alt: "VScode",
//         src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png",
//       },
//       {
//         id: nextId(),
//         alt: "Git",
//         src: "https://img.icons8.com/color/48/000000/git.png",
//       },
//       {
//         id: nextId(),
//         alt: "Github",
//         src: "https://img.icons8.com/nolan/64/github.png",
//       },
//       {
//         id: nextId(),
//         alt: "Terminal",
//         src: "https://img.icons8.com/fluent/48/000000/console.png",
//       },
//       {
//         id: nextId(),
//         alt: "Katalon",
//         src: "https://d1h3p5fzmizjvp.cloudfront.net/wp-content/uploads/2019/10/22154517/katalon_icon_color_normal.png",
//       },
//       {
//         id: nextId(),
//         alt: "Photoshop",
//         src: "https://img.icons8.com/fluent/50/000000/adobe-photoshop.png",
//       },
//       {
//         id: nextId(),
//         alt: "Premiere",
//         src: "https://img.icons8.com/color/48/000000/adobe-premiere-pro.png",
//       },
//       {
//         id: nextId(),
//         alt: "Trello",
//         src: "https://img.icons8.com/color/48/000000/trello.png",
//       },
//       {
//         id: nextId(),
//         alt: "Slack",
//         src: "https://img.icons8.com/color/48/000000/slack-new.png",
//       },
//     ],
//   };
//   return json.icons;
// };

const getSocialsIcon = () => {
  let json = {
    socials: [
      {
        id: nextId(),
        alt: "Facebook",
        link: "https://www.facebook.com/abdelrahman.elanany.5",
        src: "https://img.icons8.com/dusk/64/000000/facebook-new--v2.png",
      },
      {
        id: nextId(),
        alt: "Instagram",
        link: "https://instagram.com/abdelrahman.el3nany?igshid=YmMyMTA2M2Y=",
        src: "https://img.icons8.com/clouds/100/000000/instagram-new--v3.png",
      },
      {
        id: nextId(),
        alt: "Twitter",
        link: "https://twitter.com/ael3nany28?t=kCNSzNam_gwaNG-iJKrZEQ&s=09",
        src: "https://img.icons8.com/clouds/100/000000/twitter.png",
      },{
        id: nextId(),
        alt: "Snapchat",
        link: "https://www.snapchat.com/add/ael3nany28?share_id=h8hSKkQS5bU&locale=ar-EG",
        src: "https://img.icons8.com/clouds/100/000000/snapchat.png",
      },
      {
        id: nextId(),
        alt: "Whatsapp",
        link: "whatsapp://send?text=welcome&phone=+201009282162",
        src: "https://img.icons8.com/clouds/100/000000/whatsapp.png",
      },
    ],
  };
  return json.socials;
};

const getPosts = () => {
  let json = {
    posts: [
      {
        id: nextId(),
        // title: "???????????? ???? ????????",
        // description: "???????? ?????? ?????????? ???????????? ?????????? ???????? ?????????????? ????",

        imgSrc: oneImg,
        imgAlt: "tsamemleaser-logo",
        // link: "https://www.instagram.com/p/CNO9iRnr8Ry/",
      },
      {
        id: nextId(),
        // title: "????????????",
        // description: "???????? ?????? ?????????? ???????????? ?????????? ???????? ?????????????? ????",

        imgSrc: twoImg,
        imgAlt: "twoImg-logo",
        // link: "https://www.instagram.com/p/CFovvpLAvYm/",
      },
      {
        id: nextId(),
        // title: "?????????? ?????????????? ???? ????????",
        // description: "?????????? ?????????? ?????????????? ???? ???????? ?????????? ????????????",
        imgSrc: threeImg,
        imgAlt: "waghatalamonyom-logo",
        // link: "https://www.instagram.com/p/CFwngX2gFQ2/",
      },
      {
        id: nextId(),
        // title: "????????????????",
        // description: "???????? ?????? ?????????? ???????????? ?????????? ???????? ?????????????? ????",
        imgSrc: fourImg,
        imgAlt: "drabzen-logo",
        // link: "https://www.instagram.com/p/CKOz1M0g2ae/",
      },
      {
        id: nextId(),
        // title: "???????????? ???????????? ?????????? ??????",
        // description: "???????? ?????? ?????????? ???????????? ?????????? ???????? ?????????????? ????",

        imgSrc: fiveImg,
        imgAlt: "elyabeshospital-logo",
        // link: "https://www.instagram.com/p/CJ6hNOjrpnh/",
      },
      {
        id: nextId(),
        // title: "???????? ???????? ???? ???????? ???????????? ?? ??????",
        // description: "???????? ?????? ?????????? ???????????? ?????????? ???????? ?????????????? ????",

        imgSrc: sixImg,
        imgAlt: "waghahaded-logo",
        // link: "https://www.instagram.com/p/CQMdCirh-Fi/",
      },
      {
        id: nextId(),
        // title: "?????????? ???????????? ?????????? ????????????",
        // description: "???????? ?????? ?????????? ???????????? ?????????? ???????? ?????????????? ????",

        imgSrc: sevenImg,
        imgAlt: "waghatsoaor-logo",
        // link: "https://www.instagram.com/p/CJ6iNpvLmFc/",
      },
      {
        id: nextId(),
        // title: " ?????????????? ????????",
        // description: "?????????? ?????????????? ?????? ?????????????? ????????",
        imgSrc: eightImg,
        imgAlt: "stanlssteel-logo",
        // link: "https://www.instagram.com/p/CMPYC87gMha/",
      },
    ],
  };
  return json.posts;
};

const HomePage = () => {
  const [visible, setVisible] = useState(false);
  const [spinner, setSpinner] = useState(true);

  const socials = getSocialsIcon();
  // const languages = getLanguagesIcons();
  // const tools = getToolsIcon();
  const posts = getPosts();

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setVisible(true);
    } else if (scrolled <= 200) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  useEffect(() => {
    setTimeout(() => {
      setSpinner(false);
    }, 2300);
  }, []);

  return (
    <div>
      {spinner ? (
        <Spinner />
      ) : (
        <>
          <div className="scrollToTop">
            <FaArrowCircleUp
              onClick={scrollToTop}
              style={{ display: visible ? "inline" : "none" }}
            />
          </div>

          <HomePageComponent
            socials={socials}
            // languages={languages}
            // tools={tools}
            posts={posts}
          />
        </>
      )}
    </div>
  );
};

export default HomePage;
