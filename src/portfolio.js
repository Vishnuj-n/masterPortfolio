/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Vishnu's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Vishnu J Narayanan Portfolio",
    type: "website",
    url: "https://github.com/Vishnuj-n/", // add portfolio link
  },
};

//Home Page
const greeting = {
  title: "Vishnu J Narayana",
  logo_name: "Vishnu J Narayana,
  nickname: "Aspiring Tech Enthusiast ",
  subTitle:
    "A passionate individual who always thrives to work towards future",
 // resumeLink:
   // "https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvI/view?usp=sharing",
  portfolio_repository: "https://github.com/Vishnuj-n/masterPortfolio/",
  githubProfile: "https://github.com/Vishnuj-n/",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // linkedin: "/https://www.linkedin.com/in/vishnu-jn",
  // gmail: "vishnujn2005@gmail.com",
  // github: "https://github.com/Vishnuj-n"
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/Vishnuj-n",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/vishnu-jn",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:vishnujn2005@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },

  {
    name: "Instagram",
    link: "https://www.instagram.com/vishnujn2005/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Learning to create machine learning models that can solve real-world problems.",
        "⚡ Building simple models to analyze and forecast data, especially in time series analysis."
      softwareSkills: [
        {
          skillName: "Pandas",
          fontAwesomeClassname: "logos-pandas",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Numpy",
          fontAwesomeClassname: "logos-numpy",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Seaborn",
          fontAwesomeClassname: "logos-seaborn",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
     },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Atria Institutue of Technology",
      subtitle: "B.E in Computer Scinece(Data Science)",
      logo_path: "iiitk_logo.png",
      duration: "2023-CURRENT ",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS,OS, AI etc.",
        "⚡ Apart from this, I have taken part in skill development program,hackathons,workshops",
      ],
      website_link: "https://atria.edu/home.php",
    }.
  ],
};

const certifications = {
  certifications: [
    {
      title: "Introduction to Data Science",
      subtitle: "- Forage(Coommon Wealth Bank)",
      logo_path: "stanford_logo.png",
     // certificate_link: "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      color_code: "#8C151599",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship, Job Simulation and Volunteership",
  description:
    "I.",
  header_image_path: "experience.svg",
  sections: [
   /* {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Machine Learning Engineer",
          company: "TikTok Inc.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "June 2023 - Present",
          location: "San Jose, CA, USA",
          description:
            "Improving ads ranking models on the core TikTok product. Experience working on modeling two-tower architectures like DeepFM, Wide & deep learning, etc. Working on Large Language Models (LLM) pretraining and Large Multi-modal Model (LMM) finetuning strategies.",
          color: "#000000",
        },
      ],
    }, */
    {
    title: "Job Simulation",
      experiences: [
        {
          title: Introduction to Data Science",
          company: "Forage(data Science",
          company_url:
            "https://www.instagram.com/atriacode/",
          logo_path: "dsc_logo.png",
          location: "Remote",
          description:
            "Completed a job simulation involving Data Management skills for Commonwealth Bank's Data Science team.Demonstrated proficiency in creating data engineering pipelines to aggregate and extract valuable insights from datasets, optimizing data-driven decision-making. ",
          color: "#0C9D58",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Actively looking"
          description:
            "looking out for new oppurtunites and work",
            color: "#000000",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: Atria Code Club Member",
          company: "Atria Institue od technology",
          company_url:
            "https://www.instagram.com/atriacode/",
          logo_path: "dsc_logo.png",
          duration: "September 2024 - Current",
          location: "Bengaluru,Karnataka",
          description:
            "We have well established developer club in college which is conducts various bootcamps, workshop to enhance students ",
          color: "#0C9D58",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "currently working on it .",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on Insta and Linkedin. You can message me, I will reply within 24 hours. ",
  },

  addressSection: {
    title: "Address",
    country: "India",
    state: "Karnataka",
    City: "Bengaluru",
    avatar_image_path: "address_image.svg",
    //location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
