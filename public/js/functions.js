// import { categories } from './menuFunctions.js';
const clearElement = (parentElement) => {
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
                  "name": "Icon 1",
                  "description": "Icon 1",
                  "URL": "https://example.com/icon1",
                  "icon": "css3"
                },
                {
                  "name": "Icon 2",
                  "description": "Icon 2",
                  "URL": "https://example.com/icon2",
                  "icon": "typescript"
                }
              ],
              "Gradients": [
                {
                  "name": "Gradient 1",
                  "description": "Gradient 1",
                  "URL": "https://example.com/gradient1",
                  "icon": "vuedotjs"
                },
                {
                  "name": "Gradient 2",
                  "description": "Gradient 2",
                  "URL": "https://example.com/gradient2",
                  "icon": "android"
                }
              ],
              "Clip and patterns": [
                {
                  "name": "Clip 1",
                  "description": "Clip 1",
                  "URL": "https://example.com/clip1",
                  "icon": "git"
                },
                {
                  "name": "Clip 2",
                  "description": "Clip 2",
                  "URL": "https://example.com/clip2",
                  "icon": "dashboard-dots"
                }
              ],
              "Color combinations": [
                {
                  "name": "Combination 1",
                  "description": "Combination 1",
                  "URL": "https://example.com/combination1",
                  "icon": "palette"
                },
                {
                  "name": "Combination 2",
                  "description": "Combination 2",
                  "URL": "https://example.com/combination2",
                  "icon": "git-fork"
                }
              ],
              "Shapes": [
                {
                  "name": "Shape 1",
                  "description": "Shape 1",
                  "URL": "https://example.com/shape1",
                  "icon": "language"
                },
                {
                  "name": "Shape 2",
                  "description": "Shape 2",
                  "URL": "https://example.com/shape2",
                  "icon": "puzzle"
                }
              ],
              "Fonts combination": [
                {
                  "name": "Font combination 1",
                  "description": "Font combination 1",
                  "URL": "https://example.com/font-combination1",
                  "icon": "cpu"
                },
                {
                  "name": "Font combination 2",
                  "description": "Font combination 2",
                  "URL": "https://example.com/font-combination2",
                  "icon": "book-stack"
                }
              ],
              "Loaders and Animations": [
                {
                  "name": "Loader 1",
                  "description": "Loader 1",
                  "URL": "https://example.com/loader1",
                  "icon": "screenshot"
                },
                {
                  "name": "Loader 2",
                  "description": "Loader 2",
                  "URL": "https://example.com/loader2",
                  "icon": "cloud-upload"
                }
              ]
            },
            "Generators": {
              "CSS": [
                {
                  "name": "CSS Generator 1",
                  "description": "CSS Generator 1",
                  "URL": "https://example.com/css-generator1",
                  "icon": "git"
                },
                {
                  "name": "CSS Generator 2",
                  "description": "CSS Generator 2",
                  "URL": "https://example.com/css-generator2",
                  "icon": "react"
                }
              ]
            },
            "Converters and tools": {
              "Images and video": [
                {
                  "name": "Image 1",
                  "description": "Image 1",
                  "URL": "https://example.com/image1",
                  "icon": "html5"
                },
                {
                  "name": "Image 2",
                  "description": "Image 2",
                  "URL": "https://example.com/image2",
                  "icon": "git"
                }
              ],
              "Multi tools": [
                {
                  "name": "Tool 1",
                  "description": "Tool 1",
                  "URL": "https://example.com/tool1",
                  "icon": "github"
                },
                {
                  "name": "Tool 2",
                  "description": "Tool 2",
                  "URL": "https://example.com/tool2",
                  "icon": "check-window"
                }
              ],
              "Find in web": [
                {
                  "name": "Find 1",
                  "description": "Find 1",
                  "URL": "https://example.com/find1",
                  "icon": "palette"
                },
                {
                  "name": "Find 2",
                  "description": "Find 2",
                  "URL": "https://example.com/find2",
                  "icon": "language"
                }
              ],
              "Web Design": [
                {
                  "name": "Design 1",
                  "description": "Design 1",
                  "URL": "https://example.com/design1",
                  "icon": "android"
                },
                {
                  "name": "Design 2",
                  "description": "Design 2",
                  "URL": "https://example.com/design2",
                  "icon": "github"
                }
              ]
            },
            "Tutorials and Exercises": {
              "Manuals": [
                {
                  "name": "Manual 1",
                  "description": "Manual 1",
                  "URL": "https://example.com/manual1",
                  "icon": "javascript"
                },
                {
                  "name": "Manual 2",
                  "description": "Manual 2",
                  "URL": "https://example.com/manual2",
                  "icon": "cplusplus"
                }
              ],
              "Logic Exercises": [
                {
                  "name": "Logic exercise 1",
                  "description": "Logic exercise 1",
                  "URL": "https://example.com/logic-exercise1",
                  "icon": "git"
                },
                {
                  "name": "Logic exercise 2",
                  "description": "Logic exercise 2",
                  "URL": "https://example.com/logic-exercise2",
                  "icon": "react"
                }
              ],
              "Game Exercises": [
                {
                  "name": "Game exercise 1",
                  "description": "Game exercise 1",
                  "URL": "https://example.com/game-exercise1",
                  "icon": "git"
                },
                {
                  "name": "Game exercise 2",
                  "description": "Game exercise 2",
                  "URL": "https://example.com/game-exercise2",
                  "icon": "react"
                }
              ]
            },
            "Libraries and Collections": {
              "Examples and Inspiration": [
                {
                  "name": "Example 1",
                  "description": "Example 1",
                  "URL": "https://example.com/example1",
                  "icon": "typescript"
                },
                {
                  "name": "Example 2",
                  "description": "Example 2",
                  "URL": "https://example.com/example2",
                  "icon": "git"
                }
              ]
            },
            "SEO and Accessibility": {
              "Access check": [
                {
                  "name": "Check 1",
                  "description": "Check 1",
                  "URL": "https://example.com/check1",
                  "icon": "html5"
                },
                {
                  "name": "Check 2",
                  "description": "Check 2",
                  "URL": "https://example.com/check2",
                  "icon": "javascript"
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