// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component


const headerContainer = document.querySelector('.header-container')


function headerCreator(){
    const headerElement = document.createElement('div');
    const dateElement = document.createElement('span');
    const titleElement = document.createElement('h1');
    const tempElement = document.createElement('span');
    
    headerElement.classList.add('header');
    dateElement.classList.add('date');
    tempElement.classList.add('temp');
    
    
    dateElement.textContent = 'MARCH 28, 2019';
    titleElement.textContent = "Lambda Times"
    tempElement.textContent = '98°';
    
    headerElement.appendChild(dateElement);
    headerElement.appendChild(titleElement);
    headerElement.appendChild(tempElement);

    headerContainer.appendChild(headerElement)

}

headerCreator();



