
'use strict'
import { activeIconSelector } from './iconSelector.js';
import { loadSidebarMenuData, searchMarkers, showMatchedResults, toggleSidebarContent, removeSideBarActiveBtn, sidebarElements, sideBar  } from './sidebar.js'
import { loadDefaultCategories } from './functions.js';

// import { deleteEntryWarning, customWarning, understoodWarning } from './alerts.js';
import { setInputActive, categoryElement,  resetEntryFormValues, loadEntries, managementListeners} from './manage-markers.js'
import{ getCategory, showCategoryList, getSubCategory, addNewSubcategory, addNewCategory, manageCategoriesListeners } from './manage-categories.js'

let categories = loadDefaultCategories();

const contentContainer = document.querySelector('#contentContainer');
//LISTENERS
const enableEntriesListeners = () => {
  sidebarElements.forEach(sidebarbtn => {
    sidebarbtn.addEventListener('click', (e) => {
        const parentContainer = e.target.closest('.sidebar__btn');
        if (parentContainer.classList.contains('active')) {
        parentContainer.classList.remove('active');
        
        document.querySelector(toggleSidebarContent(parentContainer.id)).classList.remove('active')
        parentContainer.style.border = 'none';
        document.getElementById('sidebar-extension').style.width = '0px';
        // toggleSidebarContent(e);
        } else {
        removeSideBarActiveBtn();
        parentContainer.classList.add('active');
        document.querySelector(toggleSidebarContent(parentContainer.id)).classList.add('active')
        parentContainer.style.borderLeft = '2px solid blue';
        document.getElementById('sidebar-extension').style.width = '250px';
        // toggleSidebarContent(e);
        }
    });
    });


  document.querySelector('#searchToolInput').addEventListener('input', (e)=> {
    if (e.target.value.length > 0) {
      const query = e.target.value;
      const results = searchMarkers(query);
      showMatchedResults(results);
  
    }
  });
  manageCategoriesListeners();
  managementListeners();

  
  /* Move sidebar to left */
  document.getElementById('posLeftSide').addEventListener('click', () => {
    contentContainer.style.flexDirection = 'row';
    sideBar.style.flexDirection = 'row';
  });

  /* Move sidebar to right */
  document.getElementById('posRightSide').addEventListener('click', () => {
    contentContainer.style.flexDirection = 'row-reverse';
    sideBar.style.flexDirection = 'row-reverse';
  });

  /* Deactive setting options menu on leave */
  
  document.querySelector('#dbConfigNav').addEventListener('mouseleave', ()=>{
    if (document.querySelector('#dbConfigOptions').classList.contains('active')) document.querySelector('#dbConfigOptions').classList.remove('active')
  });  
}

/* Load base functions and set defaults values */
setInputActive(false);
categoryElement.appendChild(getCategory());

enableEntriesListeners();
loadSidebarMenuData();
activeIconSelector();
resetEntryFormValues();

loadEntries();
export {categories}
