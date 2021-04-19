(this["webpackJsonpportfolio-project"]=this["webpackJsonpportfolio-project"]||[]).push([[0],{131:function(e,c,s){},410:function(e,c,s){"use strict";s.r(c);var t=s(2),a=s.n(t),i=s(39),n=s.n(i),l=(s(131),s(132),s(119)),o=s.n(l),r=s(22),j=s(15),d=s(1),m=function(){return Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(j.Link,{className:"navbar-brand",href:"#",children:Object(d.jsx)("h2",{className:"logo",children:"Portfolio"})}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)(r.a,{})}),Object(d.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(d.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(d.jsx)("li",{className:"nav-item active",children:Object(d.jsxs)(j.Link,{smooth:!0,to:"home",className:"nav-link",href:"#",children:["Home ",Object(d.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(j.Link,{smooth:!0,to:"about",offset:-90,className:"nav-link",href:"#",children:"about me"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(j.Link,{smooth:!0,to:"experience",offset:-90,className:"nav-link",href:"#",children:"experience"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(j.Link,{smooth:!0,to:"projects",offset:-90,className:"nav-link",href:"#",children:"projects"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(j.Link,{smooth:!0,to:"contacts",offset:-90,className:"nav-link",href:"#",children:"contacts"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(j.Link,{smooth:!0,to:"blogs",offset:-90,className:"nav-link",href:"#",children:"blog"})})]})})]})})},b=s(17),h=s(120),x=s.n(h),O=s(26),u=s(12),p=s(421),N=s(121),v=s(122),f=s.n(v),g=function(e){var c=e.name,s=e.file,a=e.filename,i=e.removeFile,n=Object(t.useState)({progress:0,completed:!1,total:0,loaded:0}),l=Object(b.a)(n,2),o=l[0],r=l[1];Object(t.useEffect)((function(){var e={onDownloadProgress:function(e){var c=e.loaded,s=e.total;r({progress:Math.floor(100*c/s),loaded:c,total:s,completed:!1})}};f.a.get(s,Object(O.a)({responseType:"blob"},e)).then((function(e){console.log(e);var c=window.URL.createObjectURL(new Blob([e.data],{type:e.headers["content-type"]})),s=document.createElement("a");s.href=c,s.setAttribute("download",a),document.body.appendChild(s),s.click(),r((function(e){return Object(O.a)(Object(O.a)({},e),{},{completed:!0})})),setTimeout((function(){i()}),4e3)}))}),[]);var j=function(e){return"".concat((e/1048576).toFixed(2)," MB")};return Object(d.jsx)("li",{className:"list-group-item",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"col-12 d-flex",children:[Object(d.jsx)("div",{className:"d-inline font-weight-bold text-truncate",children:c}),Object(d.jsx)("div",{className:"d-inline ml-2",children:Object(d.jsxs)("small",{children:[o.loaded>0&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("span",{className:"text-success",children:j(o.loaded)}),"/ ",j(o.total)]}),0===o.loaded&&Object(d.jsx)(d.Fragment,{children:"Initializing..."})]})}),Object(d.jsx)("div",{className:"d-inline ml-2 ml-auto",children:o.completed&&Object(d.jsxs)("span",{className:"text-success",children:["Completed ",Object(d.jsx)(N.a,{icon:"check-circle"})]})})]}),Object(d.jsx)("div",{className:"col-12 mt-2",children:Object(d.jsx)(p.a,{variant:"success",now:o.progress,striped:!0,label:"".concat(o.progress,"%")})})]})})},k=function(e){var c=e.files,s=void 0===c?[]:c,t=e.remove;return Object(d.jsx)("div",{className:"downloader",children:Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("div",{className:"card-header",children:"File Downloader"}),Object(d.jsx)("ul",{className:"list-group list-group-flush",children:s.map((function(e,c){return Object(d.jsx)(g,Object(O.a)({removeFile:function(){return t(e.downloadId)}},e),c)}))})]})})},w=s(420),y=function(){var e=Object(t.useState)((function(){return[]})),c=Object(b.a)(e,2),s=c[0],a=c[1];return[function(e){return c=e,a((function(e){return[].concat(Object(u.a)(e),[Object(O.a)(Object(O.a)({},c),{},{downloadId:Object(w.a)()})])}));var c},s.length>0?Object(d.jsx)(k,{files:s,remove:function(e){return c=e,a((function(e){return Object(u.a)(e.filter((function(e){return e.downloadId!==c})))}));var c}}):null]},C={file:"https://scontent.fbbi1-1.fna.fbcdn.net/v/t1.6435-9/174797715_996503254540770_707096395892460648_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=730e14&_nc_ohc=Z9UCwIik-MMAX-yn4i5&_nc_ht=scontent.fbbi1-1.fna&oh=bb386728f61c190d4e55a75453f1417b&oe=60A0F3DD",filename:"resume.jpg"},I=function(){var e=y(),c=Object(b.a)(e,2),s=c[0],t=c[1];return Object(d.jsxs)("div",{id:"home",className:"header-wrapper",children:[Object(d.jsxs)("div",{className:"main-info",children:[Object(d.jsx)("h1",{children:"Hello, I'm SIDHANT KUMAR SAHOO"}),Object(d.jsx)(x.a,{className:"typed-text",strings:["I am a Full Stack Developer"],typeSpeed:40,backSpeed:60,loop:!0}),Object(d.jsx)("button",{className:"btn-main-offer",onClick:function(){return s(C)},children:"Download Resume"})]}),t]})},S=s.p+"static/media/Sid.43c2f4b4.jpg",L=function(){return Object(d.jsx)("section",{id:"about",className:"container-fluid about-me",children:Object(d.jsx)("div",{className:"container py-5 cont-h about-me-border",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-lg-6 col-xm-12",children:Object(d.jsx)("div",{className:"photo-wrap mb-5",children:Object(d.jsx)("img",{src:S,alt:"Sidhant",className:"profile-img"})})}),Object(d.jsxs)("div",{className:"col-lg-6 col-xm-12",children:[Object(d.jsx)("h1",{className:"about-header",children:"About Me"}),Object(d.jsx)("p",{className:"about-paragraph",children:"I am Sidhant Kumar Sahoo. I am from Bhubaneswar, Odisha. I completed my 10+2 from Mother\u2019s Public School Bhubaneswar and did my graduation in Electrical Engineering from C.V. Raman College of Engineering Bhubaneswar. I used to work in Cognizant Technology Solutions, Kolkata as developer but due to some personal reason I had to quit. After that I worked as a Marketing Head for CIMS Bhubaneswar in March of 2020 I lost my job due to COVID. In Nov-2020 I started working as a Transportation Specialist in Amazon-ROC Hyderabad and simultaneously learning to be a Full Stack Developer in Masai School."})]})]})})})},P=function(){return Object(d.jsxs)("div",{id:"experience",className:"experiences",children:[Object(d.jsx)("div",{className:"d-flex justify-content-center",children:Object(d.jsx)("h1",{children:"Experiences"})}),Object(d.jsxs)("div",{className:"container experience-wrapper",children:[Object(d.jsxs)("div",{className:"timeline-block timeline-block-right",children:[Object(d.jsx)("div",{className:"marker"}),Object(d.jsxs)("div",{className:"timeline-content",children:[Object(d.jsx)("h3",{children:"2014-2015"}),Object(d.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit ullam dolore similique accusamus error molestias praesentium fuga eos expedita neque?"})]})]}),Object(d.jsxs)("div",{className:"timeline-block timeline-block-left",children:[Object(d.jsx)("div",{className:"marker"}),Object(d.jsxs)("div",{className:"timeline-content",children:[Object(d.jsx)("h3",{children:"2014-2015"}),Object(d.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit ullam dolore similique accusamus error molestias praesentium fuga eos expedita neque?"})]})]}),Object(d.jsxs)("div",{className:"timeline-block timeline-block-right",children:[Object(d.jsx)("div",{className:"marker"}),Object(d.jsxs)("div",{className:"timeline-content",children:[Object(d.jsx)("h3",{children:"2014-2015"}),Object(d.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit ullam dolore similique accusamus error molestias praesentium fuga eos expedita neque?"})]})]}),Object(d.jsxs)("div",{className:"timeline-block timeline-block-left",children:[Object(d.jsx)("div",{className:"marker"}),Object(d.jsxs)("div",{className:"timeline-content",children:[Object(d.jsx)("h3",{children:"2014-2015"}),Object(d.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit ullam dolore similique accusamus error molestias praesentium fuga eos expedita neque?"})]})]})]})]})},M=s.p+"static/media/p1.780816b6.jpg",E=s.p+"static/media/aljazeera.4e55014f.png",A=s.p+"static/media/nykaa.a760594c.png",T=s.p+"static/media/loom.7e82761e.png",D=s.p+"static/media/p4.c8fb2e2c.jpg",q=s.p+"static/media/css.b0696b45.svg",z=s.p+"static/media/js.1b2759f5.svg",R=s.p+"static/media/react.d580a556.svg",F=s.p+"static/media/html.10080bf9.svg",_=s(36),H=(s(402),function(){return Object(d.jsxs)("div",{id:"projects",className:"portfolio-wrapper",children:[Object(d.jsx)("h1",{className:"text-uppercase text-center heading",children:"Projects"}),Object(d.jsx)("div",{className:"container-fluid box",children:Object(d.jsxs)("div",{className:"image-box-wrapper row justify-content-center",children:[Object(d.jsxs)("div",{className:"portfolio-image-box",onClick:function(){var e=Object(d.jsxs)("div",{className:"popup-box",children:[Object(d.jsx)("h2",{children:"PROJECT-1"}),Object(d.jsx)("img",{src:E,alt:"aljazeera",className:"portfolio-image-popupbox"}),Object(d.jsx)("p",{children:"ALJAZEERA CLONE"}),Object(d.jsxs)("div",{className:"link-button",children:[Object(d.jsx)("button",{onClick:function(){return window.open("https://github.com/rohanranjan25061996/hexane-aljeera-clone")},className:"github",children:"GitHub Link"}),Object(d.jsx)("button",{className:"demo",children:"DEMO"})]}),Object(d.jsx)("h3",{children:"Technologies used"}),Object(d.jsxs)("div",{className:"technology-used",children:[Object(d.jsx)("img",{src:q,alt:"cssIcon",className:"tech-icon"}),Object(d.jsx)("img",{src:z,alt:"cssIcon",className:"tech-icon"}),Object(d.jsx)("img",{src:F,alt:"cssIcon",className:"tech-icon"}),Object(d.jsx)("img",{src:R,alt:"cssIcon",className:"tech-icon"})]})]});_.PopupboxManager.open({content:e})},children:[Object(d.jsx)("img",{src:E,className:"portfolio-image",alt:"p1"}),Object(d.jsx)("div",{className:"overflow",children:Object(d.jsx)("h3",{children:"Aljazeera Clone"})}),Object(d.jsx)(r.d,{className:"portfolio-icon"})]}),Object(d.jsxs)("div",{className:"portfolio-image-box",onClick:function(){var e=Object(d.jsxs)("div",{className:"popup-box",children:[Object(d.jsx)("h2",{children:"PROJECT-2"}),Object(d.jsx)("img",{src:A,alt:"p2",className:"portfolio-image-popupbox"}),Object(d.jsx)("p",{children:"NYKAA CLONE"}),Object(d.jsxs)("div",{className:"link-button",children:[Object(d.jsx)("button",{onClick:function(){return window.open("https://github.com/divy25/lithiumProject")},className:"github",children:"GitHub Link"}),Object(d.jsx)("button",{className:"demo",children:"DEMO"})]}),Object(d.jsx)("h3",{children:"Technologies used"}),Object(d.jsxs)("div",{className:"technology-used",children:[Object(d.jsx)("img",{src:q,alt:"cssIcon",className:"tech-icon"}),Object(d.jsx)("img",{src:z,alt:"cssIcon",className:"tech-icon"}),Object(d.jsx)("img",{src:F,alt:"cssIcon",className:"tech-icon"}),Object(d.jsx)("img",{src:R,alt:"cssIcon",className:"tech-icon"})]})]});_.PopupboxManager.open({content:e})},children:[Object(d.jsx)("img",{src:A,className:"portfolio-image",alt:"nykaa"}),Object(d.jsx)("div",{className:"overflow",children:Object(d.jsx)("h3",{children:"Nykaa Clone"})}),Object(d.jsx)(r.d,{className:"portfolio-icon"})]}),Object(d.jsxs)("div",{className:"portfolio-image-box",onClick:function(){var e=Object(d.jsxs)("div",{className:"popup-box",children:[Object(d.jsx)("h2",{children:"PROJECT-3"}),Object(d.jsx)("img",{src:T,alt:"loom",className:"portfolio-image-popupbox"}),Object(d.jsx)("p",{children:"LOOM CLONE"}),Object(d.jsxs)("div",{className:"link-button",children:[Object(d.jsx)("button",{onClick:function(){return window.open("https://github.com/aman73650/Bromine")},className:"github",children:"GitHub Link"}),Object(d.jsx)("button",{className:"demo",children:"DEMO"})]}),Object(d.jsx)("h3",{children:"Technologies used"}),Object(d.jsxs)("div",{className:"technology-used",children:[Object(d.jsx)("img",{src:q,alt:"cssIcon",className:"tech-icon"}),Object(d.jsx)("img",{src:z,alt:"cssIcon",className:"tech-icon"}),Object(d.jsx)("img",{src:F,alt:"cssIcon",className:"tech-icon"}),Object(d.jsx)("img",{src:R,alt:"cssIcon",className:"tech-icon"})]})]});_.PopupboxManager.open({content:e})},children:[Object(d.jsx)("img",{src:T,className:"portfolio-image",alt:"loom"}),Object(d.jsx)("div",{className:"overflow",children:Object(d.jsx)("h3",{children:"Loom Clone"})}),Object(d.jsx)(r.d,{className:"portfolio-icon"})]}),Object(d.jsxs)("div",{className:"portfolio-image-box",onClick:function(){var e=Object(d.jsxs)("div",{className:"popup-box",children:[Object(d.jsx)("img",{src:M,alt:"p1",className:"portfolio-image-popupbox"}),Object(d.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit molestiae temporibus deserunt eius autem corporis eveniet consequatur, mollitia accusantium quam quos omnis nulla quas impedit."}),Object(d.jsxs)("div",{className:"link-button",children:[Object(d.jsx)("button",{onClick:function(){return window.open("https://github.com/divy25/lithiumProject")},className:"github",children:"GitHub Link"}),Object(d.jsx)("button",{className:"demo",children:"DEMO"})]}),Object(d.jsx)("h3",{children:"Technologies used"}),Object(d.jsxs)("div",{className:"technology-used",children:[Object(d.jsx)("img",{src:q,alt:"cssIcon",className:"tech-icon"}),Object(d.jsx)("img",{src:z,alt:"cssIcon",className:"tech-icon"}),Object(d.jsx)("img",{src:F,alt:"cssIcon",className:"tech-icon"}),Object(d.jsx)("img",{src:R,alt:"cssIcon",className:"tech-icon"})]})]});_.PopupboxManager.open({content:e})},children:[Object(d.jsx)("img",{src:D,className:"portfolio-image",alt:"p4"}),Object(d.jsx)("div",{className:"overflow"}),Object(d.jsx)(r.d,{className:"portfolio-icon"})]})]})}),Object(d.jsx)(_.PopupboxContainer,{})]})}),B=s(123),J=(s(407),s.p+"static/media/p2.1af9c8d1.jpg"),G=s.p+"static/media/p3.04c87538.jpg",K=function(){return Object(d.jsxs)(B.Carousel,{showArrows:!0,infiniteLoop:!0,showThumbs:!1,showStatus:!1,autoPlay:!0,interval:2e3,children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{src:M,alt:"p1"}),Object(d.jsx)("div",{className:"myCarousel",children:Object(d.jsx)("h3",{children:"Lorem ipsum dolor sit amet."})})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{src:J,alt:"p1"}),Object(d.jsx)("div",{className:"myCarousel",children:Object(d.jsx)("h3",{children:"Lorem ipsum dolor sit amet."})})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{src:G,alt:"p1"}),Object(d.jsx)("div",{className:"myCarousel",children:Object(d.jsx)("h3",{children:"Lorem ipsum dolor sit amet."})})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{src:D,alt:"p1"}),Object(d.jsx)("div",{className:"myCarousel",children:Object(d.jsx)("h3",{children:"Lorem ipsum dolor sit amet."})})]})]})},U=function(){return Object(d.jsxs)("div",{className:"technologies",children:[Object(d.jsx)("h1",{children:"Technology I use"}),Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"technologies-content",children:Object(d.jsx)(K,{})})})]})},V=s(124),X=s.n(V),Y=s(126),Z=function(){var e=Object(t.useState)(""),c=Object(b.a)(e,2),s=c[0],a=c[1],i=Object(Y.a)(),n=i.register,l=i.handleSubmit,o=i.errors,r=function(e,c,s,t){X.a.send(e,c,s,t).then((function(){a("Form Sent Sucessfully I will contact you as soon as possible")})).catch((function(e){return console.error("Something went wrong ".concat(e))}))};return console.log(s),Object(d.jsxs)("div",{id:"contacts",className:"contacts",children:[Object(d.jsxs)("div",{className:"text-center",children:[Object(d.jsx)("h1",{children:"Contact Me"}),Object(d.jsx)("p",{children:"Please fill out the form"})]}),Object(d.jsx)("div",{className:"container contact-container",children:Object(d.jsx)("form",{onSubmit:l((function(e,c){r("sidhant2709","sidhant_2709",{name:e.name,phone:e.phone,email:e.email,subject:e.subject,description:e.description},"user_hBrt9lWtEmHAkOP5XbgCr"),c.target.reset()})),children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"col col-mf-6 col-xs-12",children:[Object(d.jsxs)("div",{className:"text-center",children:[Object(d.jsx)("input",{type:"text",id:"name",className:"form-control",placeholder:"Name",name:"name",ref:n({required:"Please enter your name",maxLength:{value:20,message:"Please enter a name with fewer than 20 characters"}})}),Object(d.jsx)("div",{className:"line"}),Object(d.jsx)("span",{className:"error-message",children:o.name&&o.name.message})]}),Object(d.jsxs)("div",{className:"text-center",children:[Object(d.jsx)("input",{id:"phone",type:"text",className:"form-control",placeholder:"Phone Number",name:"phone"}),Object(d.jsx)("div",{className:"line"})]}),Object(d.jsxs)("div",{className:"text-center",children:[Object(d.jsx)("input",{id:"email",type:"email",className:"form-control",placeholder:"Email",name:"email"}),Object(d.jsx)("div",{className:"line"})]}),Object(d.jsxs)("div",{className:"text-center",children:[Object(d.jsx)("input",{id:"subject",type:"text",className:"form-control",placeholder:"Subject",name:"subject"}),Object(d.jsx)("div",{className:"line"})]})]}),Object(d.jsxs)("div",{className:"col-md-6 col-xs-12",children:[Object(d.jsxs)("div",{className:"text-center",children:[Object(d.jsx)("textarea",{type:"text",id:"description",className:"form-control",placeholder:"Description",name:"description"}),Object(d.jsx)("div",{className:"line"})]}),Object(d.jsx)("button",{className:"btn-main-offer contact-btn",type:"submit",children:"Submit"})]})]})})})]})},W=s(125),Q=s(414),$=s(415),ee=s(416),ce=s(417),se=s(418),te=s(419),ae=function(){return Object(d.jsx)("div",{className:"footer",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"col-lg-4 col-md-6 col-sm-6 address",children:[Object(d.jsxs)("div",{className:"d-flex",children:[Object(d.jsx)(r.b,{style:{color:"white",fontSize:"1rem",marginTop:"1rem",marginRight:"1rem"}}),Object(d.jsxs)("p",{style:{color:"white",fontSize:"1rem"},children:["Matru Nilaya,Plot-No.-1439-1440,",Object(d.jsx)("br",{}),"New Forest Park,Bhubaneswar,",Object(d.jsx)("br",{}),"Odisha,India",Object(d.jsx)("br",{}),"PIN-75100p"]})]}),Object(d.jsxs)("div",{className:"d-flex",children:[Object(d.jsx)(r.c,{style:{color:"white",fontSize:"1rem",marginTop:"0.2rem",marginRight:"1rem"}}),Object(d.jsx)("p",{style:{color:"white",fontSize:"1rem"},children:"+91-9438731621"})]}),Object(d.jsxs)("div",{className:"d-flex",children:[Object(d.jsx)(W.a,{style:{color:"white",fontSize:"1.5rem",marginTop:"0.2rem",marginRight:"1rem"}}),Object(d.jsx)("p",{style:{color:"white",fontSize:"1rem"},children:"sidhant1593@gmail.com"})]})]}),Object(d.jsx)("div",{className:"col-lg-3 col-md-2 col-sm-6",children:Object(d.jsxs)("div",{className:"row gap",children:[Object(d.jsxs)("div",{className:"col link-to",children:[Object(d.jsx)(j.Link,{smooth:!0,to:"home",href:"",className:"footer-nav",children:"Home"}),Object(d.jsx)("br",{}),Object(d.jsx)(j.Link,{smooth:!0,to:"about",href:"",className:"footer-nav",children:"About"}),Object(d.jsx)("br",{}),Object(d.jsx)(j.Link,{smooth:!0,to:"blogs",href:"",className:"footer-nav",children:"Blogs"})]}),Object(d.jsxs)("div",{className:"col link-to",children:[Object(d.jsx)(j.Link,{smooth:!0,to:"experience",href:"",className:"footer-nav",children:"Experience"}),Object(d.jsx)("br",{}),Object(d.jsx)(j.Link,{smooth:!0,to:"projects",href:"",className:"footer-nav",children:"Projects"}),Object(d.jsx)("br",{}),Object(d.jsx)(j.Link,{smooth:!0,to:"contacts",href:"",className:"footer-nav",children:"Contacts"})]})]})}),Object(d.jsxs)("div",{className:"col-lg-5 col-md-5 col-sm-6 align-items-center",children:[Object(d.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(d.jsx)(Q.a,{url:"https://www.facebook.com/sidhant.sahoo.270992",quote:"Full Stack Developer",hashtag:"#javascript",children:Object(d.jsx)($.a,{className:"mx-3",size:36})}),Object(d.jsx)(ee.a,{children:Object(d.jsx)(ce.a,{className:"mx-3",size:36})}),Object(d.jsx)(se.a,{children:Object(d.jsx)(te.a,{className:"mx-3",size:36})})]}),Object(d.jsxs)("p",{className:"pt-3 text-center",children:["Copyright\xa9",(new Date).getFullYear(),"\xa0 All Rights Reserved"]})]})]})})})};var ie=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(o.a,{className:"particle-canvas",params:{particles:{number:{value:30,density:{enable:!0,value_area:900}},shape:{type:"circle",stroke:{width:6,color:"#f9ab00"}}}}}),Object(d.jsx)(m,{}),Object(d.jsx)(I,{}),Object(d.jsx)(L,{}),Object(d.jsx)(U,{}),Object(d.jsx)(P,{}),Object(d.jsx)(H,{}),Object(d.jsx)(Z,{}),Object(d.jsx)(ae,{})]})};n.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(ie,{})}),document.getElementById("root"))}},[[410,1,2]]]);
//# sourceMappingURL=main.5b192726.chunk.js.map