// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

<div class="tabs">
<div class="topics">
  <span class="title">TRENDING TOPICS:</span>
</div>
</div>

const topicContainer = document.querySelector('.tabs');

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        const data = response.data;
        const tabsContainer = document.createElement('div');
        tabsContainer.classList.add('tab');
        tabsContainer.textContent = topic;
        const tabsContainer = document.createElement('div');
        return tabsContainer;   
    };
    
    
    data.forEach{function(topic) 
            const tabsContainer = document.createElement('div');
            const topicElement = document.createElement('div');
            const titleElement = document.createElement('span');


            tabsContainer.classList.add("tabs");
            tabsContainer.appendChild(topicElement);
            tabsContainer.appendChild(titleElement);

            topicElement.textContent =
            titleElement.textContent =

            topicContainer.appendChild(tabsContainer);
    });

    .catch( error => {
        console.log("Error:", err);
    });







// const topicContainer = document.querySelector('.tabs');

// axios.get('https://lambda-times-backend.herokuapp.com/topics')
//     .then(response => {
//         const data = response.data;

//         data.forEach{function(topic) 
//             const tabsContainer = document.createElement('div');
//             tabsContainer.classList.add("tabs");
//         };
//             const topicElement = document.createElement('div');
//             const titleElement = document.createElement('span');
                                
//             tabsContainer.appendChild(topicElement);
//             tabsContainer.appendChild(titleElement);

//             topicElement.textContent =
//             titleElement.textContent =

//             topicContainer.appendChild(tabsContainer);
//     });

//     .catch(error ()=> {
//         console.log(error);
//     });