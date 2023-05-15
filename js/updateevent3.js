
let dateOfSingleEvent3 = document.getElementById("SingleEventdate3");
let nameOfSingleEvent3 = document.getElementById("singleEventname3");
let nameOfSingleEventbox3 = document.getElementById("eventboxsingleEventname3");
let SinglelocationOfEvent3 = document.getElementById("singleEventlocation3");


// event description
let descriptionEvent3 = document.getElementById("event3description");


window.addEventListener("DOMContentLoaded", fetchEventListApi);

async function fetchEventListApi() {
    const requestUrl = "https://localhost:7003/api/v1/EventManagementSystem/event/3";
    const request = new Request(requestUrl);
    const response = await fetch(request);
    const eventsList = await response.json();

    
    displaySingleEvents(eventsList);
}



function displaySingleEvents(response) {
    
    dateOfSingleEvent3.innerHTML = response.dateOfEvent;
    nameOfSingleEvent3.innerHTML = response.eventName;
    nameOfSingleEventbox3.innerHTML = response.eventName;
    SinglelocationOfEvent3.innerHTML = response.location;
    descriptionEvent3.innerHTML = response.description;
    
}

//registration page
let tableBody = document.getElementById("tableBody");
//let title1 = document.getElementById("Title1");
//binds listener
window.addEventListener("DOMContentLoaded", RegisteredUserForAnEvent);

async function RegisteredUserForAnEvent() {
    const requestUrl = "https://localhost:7003/api/v1/EventManagementSystem/registrations/7";
        const request = new Request(requestUrl);
        const response = await fetch(request);
        const registeredUser = await response.json(); 

        displayRegisteredUserForAnEvent(registeredUser);
}

function displayRegisteredUserForAnEvent(response) {
    
     
         let tr = document.createElement('tr');
         tr.innerHTML = `<td>${response.userName}</td>
         <td>${response.email}</td>`
        
         tableBody.appendChild(tr);
    
 }

