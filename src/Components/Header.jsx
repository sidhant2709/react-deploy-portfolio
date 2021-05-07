/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Typed from "react-typed";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import resume from "./files/Resume.pdf";

const Header = () => {
  return (
    <div id="home" className="header-wrapper">
      <div className="main-info">
        <h1>Hello, I'm SIDHANT KUMAR SAHOO</h1>
        <Typed
          className="typed-text"
          strings={["I am a Full Stack Developer"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <div>
          <button
            className="btnGit"
            onClick={() => window.open("https://github.com/sidhant2709")}
          >
            <FaGithub size="35" />
          </button>
          <a href={resume} download className="btn-main-offer">
            Download Resume
          </a>
          <button
            className="btnGit"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/sidhant-kumar-sahoo-08a8291b8/"
              )
            }
          >
            <FaLinkedin size="35" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
// import React from "react";
// import Typed from "react-typed";
// import useFileDownloader from "./Hooks/useFileDownloder";
// import { FaGithub, FaLinkedin } from "react-icons/fa";

// const file = {
//   file:
//     "https://scontent.fbbi1-1.fna.fbcdn.net/v/t1.6435-9/174797715_996503254540770_707096395892460648_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=730e14&_nc_ohc=Z9UCwIik-MMAX-yn4i5&_nc_ht=scontent.fbbi1-1.fna&oh=bb386728f61c190d4e55a75453f1417b&oe=60A0F3DD",
//   filename: "resume.jpg",
// };

// const Header = () => {
//   const [downloadFile, downloaderComponentUI] = useFileDownloader();
//   const download = (file) => downloadFile(file);
//   return (
//     <div id="home" className="header-wrapper">
//       <div className="main-info">
//         <h1>Hello, I'm SIDHANT KUMAR SAHOO</h1>
//         <Typed
//           className="typed-text"
//           strings={["I am an Aspiring Full Stack Developer"]}
//           typeSpeed={30}
//           backSpeed={30}
//           loop
//         />
//         <div>
//           <button
//             className="btnGit"
//             onClick={() => window.open("https://github.com/sidhant2709")}
//           >
//             <FaGithub size="35" />
//           </button>
//           <button className="btn-main-offer" onClick={() => download(file)}>
//             Download Resume
//           </button>
//           <button
//             className="btnGit"
//             onClick={() =>
//               window.open(
//                 "https://www.linkedin.com/in/sidhant-kumar-sahoo-08a8291b8/"
//               )
//             }
//           >
//             <FaLinkedin size="35" />
//           </button>
//         </div>
//       </div>
//       {downloaderComponentUI}
//     </div>
//   );
// };

// export default Header;