
'use strict'
import { activeIconSelector } from './iconSelector.js';
import { sidebarListeners, toggleSidebarPosition } from './sidebar.js'
import { loadDefaultCategories } from './functions.js';
import { searcherListeners} from './searcher.js';
// import { deleteEntryWarning, customWarning, understoodWarning } from './alerts.js';
import { setInputActive, categoryElement,  resetEntryFormValues, loadEntries, managementListeners} from './manage-markers.js'
import{ getCategory, showCategoryList, getSubCategory, addNewSubcategory, addNewCategory, manageCategoriesListeners } from './manage-categories.js'

let categories = loadDefaultCategories();

//LISTENERS
const enableEntriesListeners = () => {

  manageCategoriesListeners();
  managementListeners();
  sidebarListeners();
  searcherListeners();
  /* Move sidebar to left */
  document.getElementById('posLeftSide').addEventListener('click', () => {
    toggleSidebarPosition('left');
    // contentContainer.style.flexDirection = 'row';
    // sideBar.style.flexDirection = 'row';
  });

  /* Move sidebar to right */
  document.getElementById('posRightSide').addEventListener('click', () => {
    toggleSidebarPosition('right');
    
    // contentContainer.style.flexDirection = 'row-reverse';
    // sideBar.style.flexDirection = 'row-reverse';
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
activeIconSelector();
resetEntryFormValues();

loadEntries();
// export {categories}
