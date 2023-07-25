/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Jaweed Shuja",
  title: "Hi all, I'm Jaweed",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1pYGuEcNes8DtbsDj4rjrnh-ckx4SzIZ2/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/jaweedshuja",
  linkedin: "https://www.linkedin.com/in//jaweed-shuja-uddin-09482317b/",
  gmail: "jaweedshujauddin@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "KIET: Karachi Institute of Economics and Technology",
      logo: require("./assets/images/kiet.jpeg"),
      subHeader: "Master of Science in Computer Science",
      duration: "January 2021 - December 2022",
      desc: "Participated in the research of Scalabiliy in blockchain and published a paper.",
      descBullets: [
        "Subjects: Applied Machine Learning, Blockchain, Advance Algorithm Analysis, Advance Operating System",
      ]
    },
    {
      schoolName: "KIET: Karachi Institute of Economics and Technology",
      logo: require("./assets/images/kiet.jpeg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "January 2016 - April 2020",
      desc: "Completed bachelor in 3.26 GPA, participated in many speed programming competition, got a runner-up position in one of them.",
      descBullets: ["Elective Subjects: Mobile Application Development, Web Engineering"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Software Engineer",
      company: "VentureDive",
      companylogo: require("./assets/images/venturedive.jpeg"),
      date: "June 2022 – Present",
      desc: "Worked on React-Native, React-Js, NodeJs. Mostly Worked on React-Native Projects.",
      descBullets: [
        "Worked on a meditation app, In which users can listen to different meditations in their favorite language. There is a multilingual feature in this app",
        "Currently working on ReactJs, Admin panel for a application."
      ]
    },
    {
      role: "Software Engineer",
      company: "CodeVative",
      companylogo: require("./assets/images/codevative.jpeg"),
      date: "July 2021 – Jun 2022",
      desc: "Worked, on two mobile applications on React Native, uses Redux, Thunk and Redux persist as state management and Agora Video Calling and Rocket Chat.",
      descBullets: [
        "Developed a telemedicine app, in which users can consult a doctor virtually. The primary functionality I implement is Video Call from which a user as a patient can consult with a doctor.",
        "Developed a classified app for cars and number plate for oman country, uses firebase, redux, thunk."
      ]
    },
    {
      role: "Software Engineer",
      company: "Generation Next Technology",
      companylogo: require("./assets/images/genex.jpeg"),
      date: "August 2020 – Jun 2021",
      desc: "Lead 2 applications on React-Native #1) Entezar #2) Medsearch. Google Map Integration, Social Logins, Firebase Crash Analytics, Handling continuous development and bug fixing and improvement, Handling IOS application development and issues, handling platform-specific issues on IOS on XCODE."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/kharchaLogo.png"),
      projectName: "Kharcha",
      projectDesc: "Manage Income and Expense Easily",
      footerLink: [
        {
          name: "Visit Website",
          url: "kharcha.codegranted.com"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/entezar.png"),
      projectName: "Entezar",
      projectDesc: "Table reservation app",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://entezar.app/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "NodeJS",
      subtitle:
        "NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)",
      image: require("./assets/images/node.png"),
      imageAlt: "Node-JS",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-cc548e5d-b9ab-43a2-bb4c-fd113f33195d/"
        }
      ]
    },

    {
      title: "React",
      subtitle: "Modern React with Redux",
      image: require("./assets/images/react.png"),
      imageAlt: "ReacT",
      footerLink: [
        {name: "Certification", url: "https://www.udemy.com/certificate/UC-e674237d-8aae-4ca0-8905-36fe7a33f7d6/"},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3123082964",
  email_address: "jaweedshujauddin@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
