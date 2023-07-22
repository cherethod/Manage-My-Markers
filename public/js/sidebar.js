import { clearElement, loadDefaultCategories  } from './functions.js';
import {loadSidebarMenuData, searcherListeners} from './searcher.js';

// import { setInputActive, categoryElement, subcategoryElement, linkElement, resetEntryFormValues, loadEntries, hideConfigContainers, URLRegex, insertLink, managementListeners, isEditing, deleteBtnSVG } from "./manage-markers.js";
const sideBar = document.querySelector('#contentContainer').children[0];
const extensionSideBar = document.querySelector('#sidebar-extension');
const sidebarElements = document.querySelectorAll('.sidebar__btn');
const matchedResultsList = document.querySelector('#matchedResultsList');
const searchFilterMenu = document.getElementById('searchFilters');
const searchFilterSettings = document.getElementById('filterSettings');
const contentContainer = document.querySelector('#contentContainer');

// SIDEBAR FUCNCTIONS


const showMatchedResults = (results) => {
  matchedResultsList.innerHTML = '';

  const fragment = document.createDocumentFragment();
  results.forEach((result) => {
    const categoryTemplate = document.getElementById('matchedCategoryTemplate');
    const categoryNode = categoryTemplate.content.cloneNode(true);
    const categoryName = categoryNode.querySelector('.result__category--name');
    categoryName.textContent = result.category;

    const subcategoriesContainer = document.createElement('div');

    result.elements.forEach((match) => {
      const markerTemplate = document.getElementById('matchedItemTemplate');
      const markerNode = markerTemplate.content.cloneNode(true);
      const markerText = markerNode.querySelector('.result__item--link');
      markerText.textContent = `Name: ${match.name}, Description: ${match.description}, URL: ${match.URL}`;
      subcategoriesContainer.appendChild(markerNode);
    });

    const counter = categoryNode.querySelector('span');
    const itemsFound = result.elements.length;
    if (itemsFound > 0) {
      counter.textContent = itemsFound;
    }

    fragment.appendChild(categoryNode);
    fragment.appendChild(subcategoriesContainer);
  });

  matchedResultsList.appendChild(fragment);
};


const toggleSidebarContent = (id) => {
    const sidebarExtensions = document.querySelector('#sidebar-extension');
    for (let i=0; i < sidebarExtensions.children.length; i++) {
      const elem = sidebarExtensions.children[i];
        if (elem.classList.contains('active')) elem.classList.remove('active');
    }
  
  
      switch (id) {
        case 'filesBtn1':
          return '.sidebar__nav--container';
        case 'filesBtn2':
          return '.sidebar__searcher--container';
        // Add more cases for other buttons if needed
        default:
          return '';
      }
};

const toggleSidebarPosition = (side) => {
  if (side === 'left') {
    if (contentContainer.classList.contains('right')) contentContainer.classList.remove('right');
    contentContainer.classList.add('left');
  }
  if (side === 'right') {
    if (contentContainer.classList.contains('left')) contentContainer.classList.remove('left');
    contentContainer.classList.add('right');
  }
}
const removeSideBarActiveBtn = () => {
    for (let i = 0; i < sidebarElements.length; i++) {
      const element = sidebarElements[i];
      if (element.classList.contains('active')) {
        element.classList.remove('active');
        element.style.border = 'none';
      }
    }
};  



const sidebarListeners = () => {
  const sidebarElements = document.querySelectorAll('.sidebar__btn');

  sidebarElements.forEach(sidebarbtn => {
    sidebarbtn.addEventListener('click', (e) => {
        const parentContainer = e.target.closest('.sidebar__btn');
        if (parentContainer.classList.contains('active')) {
        parentContainer.classList.remove('active');
        
        document.querySelector(toggleSidebarContent(parentContainer.id)).classList.remove('active')
        // parentContainer.style.border = 'none';
        document.getElementById('sidebar-extension').style.width = '0px';
        // toggleSidebarContent(e);
        } else {
        removeSideBarActiveBtn();
        parentContainer.classList.add('active');
        document.querySelector(toggleSidebarContent(parentContainer.id)).classList.add('active')
        // parentContainer.style.borderLeft = '2px solid blue';
        document.getElementById('sidebar-extension').style.width = '250px';
        // toggleSidebarContent(e);
        }
    });
    });

    searchFilterMenu.addEventListener('click', (e)=> {
    const filterMenu = e.target.closest('#searchFilters');
    // console.log(e);
    if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'SPAN' && e.target.tagName !== 'LABEL' && e.target.id !== 'filterMenu') {
      filterMenu.classList.toggle('active');
    }
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SPAN' || e.target.tagName === 'LABEL') {
      const searchFilterOptions = searchFilterSettings.querySelectorAll('input');
      searchFilterOptions.forEach((option) => {
        if (e.target.value === 'filter-all' && option.value !== 'filter-all') {
          option.checked = false;
        }
        else if (e.target.value !== 'filter-all' && option.value ==='filter-all') {
          option.checked = false;
        }
      })
    }
  })

}

loadSidebarMenuData();

export { showMatchedResults, toggleSidebarContent, removeSideBarActiveBtn, sideBar, sidebarListeners, toggleSidebarPosition, searchFilterMenu  }