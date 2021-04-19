// /* eslint-disable jsx-a11y/anchor-has-content */
// /* eslint-disable jsx-a11y/anchor-is-valid */
// import React from 'react';
// import Typed from "react-typed";

// import resume from "./files/Resume.pdf";



// const Header = () => {
//     return (
//         <div id="home" className="header-wrapper">
//             <div className="main-info">
//                 <h1>Hello, I'm SIDHANT KUMAR SAHOO</h1>
//                 <Typed
//                     className="typed-text"
//                     strings={["I am a Full Stack Developer"]}
//                     typeSpeed={40}
//                     backSpeed={60}
//                     loop
//                 />
//                 <a href={resume} download className="btn-main-offer">Download Resume</a>
//             </div>
//         </div>
//     )
// }

// export default Header




/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Typed from "react-typed";
import useFileDownloader from "./Hooks/useFileDownloder";


const file = {
    file:
      "https://scontent.fbbi1-1.fna.fbcdn.net/v/t1.6435-9/174797715_996503254540770_707096395892460648_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=730e14&_nc_ohc=Z9UCwIik-MMAX-yn4i5&_nc_ht=scontent.fbbi1-1.fna&oh=bb386728f61c190d4e55a75453f1417b&oe=60A0F3DD",
    filename: "resume.jpg",
}

const Header = () => {
    const [downloadFile, downloaderComponentUI] = useFileDownloader();
    const download = (file) => downloadFile(file);
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
                <button className="btn-main-offer" onClick={()=>download(file)}>Download Resume</button>
            </div>
            {downloaderComponentUI}
        </div>
    )
}

export default Header

