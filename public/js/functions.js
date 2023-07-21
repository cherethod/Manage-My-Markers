// import { categories } from './menuFunctions.js';
const clearElement = (parentElement) => {
  // console.log(`delete container: ${parentElement.id}`)
    if (!parentElement) {
        return; // Si parentElement es undefined o null, no hacemos nada y salimos de la función.
    }    
    while (parentElement.children.length > 0) {
        parentElement.removeChild(parentElement.children[0]);
    }
}
const loadDefaultCategories = ()=> {
    if (localStorage.getItem('customCategories') === null) {
        return ({
          "CSS and Styles": {
            "Icons": [
              {
                "name": "Font Awesome",
                "description": "The web's most popular icon set and toolkit.",
                "URL": "https://fontawesome.com/",
                "icon": "css3"
              },
              {
                "name": "Material Icons",
                "description": "Material icons are delightful, beautifully crafted symbols for common actions and items.",
                "URL": "https://material.io/resources/icons/",
                "icon": "typescript"
              }
            ],
            "Gradients": [
              {
                "name": "UI Gradients",
                "description": "Handpicked collection of beautiful color gradients for designers and developers.",
                "URL": "https://uigradients.com/",
                "icon": "vuedotjs"
              },
              {
                "name": "WebGradients",
                "description": "A curated collection of 180+ gradient backgrounds for designers and developers.",
                "URL": "https://webgradients.com/",
                "icon": "android"
              }
            ],
            "Clip and patterns": [
              {
                "name": "SVG Backgrounds",
                "description": "A collection of SVG backgrounds to decorate your websites.",
                "URL": "https://www.svgbackgrounds.com/",
                "icon": "git"
              },
              {
                "name": "Hero Patterns",
                "description": "A collection of repeatable SVG background patterns for you to use.",
                "URL": "https://www.heropatterns.com/",
                "icon": "dashboard-dots"
              }
            ],
            "Color combinations": [
              {
                "name": "Color Hunt",
                "description": "Discover the best color palettes for your projects.",
                "URL": "https://colorhunt.co/",
                "icon": "palette"
              },
              {
                "name": "Coolors",
                "description": "Generate beautiful color palettes that work together harmoniously.",
                "URL": "https://coolors.co/",
                "icon": "git-fork"
              }
            ],
            "Shapes": [
              {
                "name": "Blobmaker",
                "description": "Create organic SVG shapes in just a few seconds.",
                "URL": "https://www.blobmaker.app/",
                "icon": "language"
              },
              {
                "name": "Shape Divider",
                "description": "Create beautiful SVG shapes for your hero section.",
                "URL": "https://www.shapedivider.app/",
                "icon": "puzzle"
              }
            ],
            "Fonts combination": [
              {
                "name": "Google Fonts",
                "description": "Explore and use hundreds of free fonts for your projects.",
                "URL": "https://fonts.google.com/",
                "icon": "cpu"
              },
              {
                "name": "Font Pair",
                "description": "Helping designers pair Google Fonts together.",
                "URL": "https://fontpair.co/",
                "icon": "book-stack"
              }
            ],
            "Loaders and Animations": [
              {
                "name": "Loading.io",
                "description": "Create your own unique loading animations and icons.",
                "URL": "https://loading.io/",
                "icon": "screenshot"
              },
              {
                "name": "LottieFiles",
                "description": "A library of animations that can be used in various web projects.",
                "URL": "https://lottiefiles.com/",
                "icon": "cloud-upload"
              }
            ]
          },
          "Generators": {
            "CSS": [
              {
                "name": "CSS Gradient Generator",
                "description": "Create beautiful CSS gradients with this easy-to-use tool.",
                "URL": "https://cssgradient.io/",
                "icon": "git"
              },
              {
                "name": "CSS Flexbox Generator",
                "description": "Generate flexible box layouts using CSS Flexbox.",
                "URL": "https://flexbox.webflow.com/",
                "icon": "react"
              }
            ]
            // You can add more links for other subcategories...
          },
          "Converters and tools": {
            "Images and video": [
              {
                "name": "TinyPNG",
                "description": "Compress PNG and JPEG images to reduce file size.",
                "URL": "https://tinypng.com/",
                "icon": "html5"
              },
              {
                "name": "Unsplash",
                "description": "Beautiful, free images and photos that you can download and use for any project.",
                "URL": "https://unsplash.com/",
                "icon": "git"
              }
            ],
            "Multi tools": [
              {
                "name": "GitHub",
                "description": "Host and review code, manage projects, and build software alongside millions of developers.",
                "URL": "https://github.com/",
                "icon": "github"
              },
              {
                "name": "Figma",
                "description": "Design, prototype, and gather feedback all in one place with Figma.",
                "URL": "https://www.figma.com/",
                "icon": "check-window"
              },
              {
                "name": "CodePen",
                "description": "Explore front-end code and demos in the browser.",
                "URL": "https://codepen.io/",
                "icon": "github"
              },
              {
                "name": "Netlify",
                "description": "Powerful serverless platform to build, deploy, and collaborate on web apps.",
                "URL": "https://www.netlify.com/",
                "icon": "check-window"
              },
              {
                "name": "Stack Overflow",
                "description": "Get answers to programming questions from a community of developers.",
                "URL": "https://stackoverflow.com/",
                "icon": "git"
              }
            ],
            "Find in web": [
              {
                "name": "DevDocs",
                "description": "Fast, offline, and free developer documentation browser.",
                "URL": "https://devdocs.io/",
                "icon": "palette"
              },
              {
                "name": "MDN Web Docs",
                "description": "Mozilla Developer Network: Your ultimate guide to web technologies.",
                "URL": "https://developer.mozilla.org/",
                "icon": "language"
              },
              {
                "name": "CanIUse",
                "description": "Check browser support for front-end web technologies.",
                "URL": "https://caniuse.com/",
                "icon": "typescript"
              }
            ],
            "Web Design": [
              {
                "name": "Dribbble",
                "description": "Show and tell for designers. What are you working on?",
                "URL": "https://dribbble.com/",
                "icon": "android"
              },
              {
                "name": "Behance",
                "description": "Online platform showcasing creative work from around the world.",
                "URL": "https://www.behance.net/",
                "icon": "github"
              },
              {
                "name": "Awwwards",
                "description": "Recognizing the talent and effort of the best web designers, developers, and agencies.",
                "URL": "https://www.awwwards.com/",
                "icon": "github"
              }
            ]
          },
          
          "Tutorials and Exercises": {
            "Manuals": [
              {
                "name": "MDN JavaScript Guide",
                "description": "Comprehensive guide to JavaScript on MDN Web Docs.",
                "URL": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
                "icon": "javascript"
              },
              {
                "name": "C++ Documentation",
                "description": "Official C++ documentation for learning and reference.",
                "URL": "https://en.cppreference.com/w/",
                "icon": "cplusplus"
              },
              {
                "name": "Python Documentation",
                "description": "Official Python documentation for beginners and advanced users.",
                "URL": "https://docs.python.org/3/",
                "icon": "python"
              }
            ],
            "Logic Exercises": [
              {
                "name": "CodeWars",
                "description": "Achieve code mastery through challenge.",
                "URL": "https://www.codewars.com/",
                "icon": "git"
              },
              {
                "name": "LeetCode",
                "description": "Practice coding interviews for software engineering roles.",
                "URL": "https://leetcode.com/",
                "icon": "react"
              },
              {
                "name": "HackerRank",
                "description": "Practice coding, prepare for interviews, and get hired.",
                "URL": "https://www.hackerrank.com/",
                "icon": "react"
              }
            ],
            "Game Exercises": [
              {
                "name": "CodeCombat",
                "description": "Learn programming by playing a game.",
                "URL": "https://codecombat.com/",
                "icon": "git"
              },
              {
                "name": "Codecademy",
                "description": "Learn to code interactively, for free.",
                "URL": "https://www.codecademy.com/",
                "icon": "react"
              },
              {
                "name": "Unity Learn",
                "description": "Official tutorials for Unity, a popular game development platform.",
                "URL": "https://learn.unity.com/",
                "icon": "unity"
              }
            ]
          },
          "Libraries and Collections": {
            "Examples and Inspiration": [
              {
                "name": "CodePen Collection",
                "description": "Collection of creative front-end code examples on CodePen.",
                "URL": "https://codepen.io/collection/XqeMrZ",
                "icon": "html5"
              },
              {
                "name": "GitHub Awesome",
                "description": "Curated list of awesome lists for developers.",
                "URL": "https://github.com/sindresorhus/awesome",
                "icon": "git"
              },
              {
                "name": "Devhints",
                "description": "Useful cheat sheets for developers.",
                "URL": "https://devhints.io/",
                "icon": "git"
              }
            ]
          },
          
          "SEO and Accessibility": {
            "Access check": [
              {
                "name": "Lighthouse",
                "description": "Google's automated tool for auditing web pages.",
                "URL": "https://developers.google.com/web/tools/lighthouse",
                "icon": "html5"
              },
              {
                "name": "A11Y Project",
                "description": "A community-driven effort to make web accessibility easier.",
                "URL": "https://a11yproject.com/",
                "icon": "javascript"
              },
              {
                "name": "WebAIM",
                "description": "Tools and resources to improve web accessibility.",
                "URL": "https://webaim.org/",
                "icon": "html5"
              }
            ]
          }
        } )
    }
    else {
      return (JSON.parse(localStorage.getItem('customCategories')))
    };
  }

export { clearElement, loadDefaultCategories }