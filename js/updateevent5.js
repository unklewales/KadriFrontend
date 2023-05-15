
let dateOfSingleEvent5 = document.getElementById("SingleEventdate5");
let nameOfSingleEvent5 = document.getElementById("singleEventname5");
let nameOfSingleEventbox5 = document.getElementById("eventboxsingleEventname5");
let SinglelocationOfEvent5 = document.getElementById("singleEventlocation5");


// event description
let descriptionEvent5 = document.getElementById("event5description");


window.addEventListener("DOMContentLoaded", fetchEventListApi);

async function fetchEventListApi() {
    const requestUrl = "https://localhost:7003/api/v1/EventManagementSystem/event/5";
    const request = new Request(requestUrl);
    const response = await fetch(request);
    const eventsList = await response.json();

    
    displaySingleEvents(eventsList);
}



function displaySingleEvents(response) {
    
    dateOfSingleEvent5.innerHTML = response.dateOfEvent;
    nameOfSingleEvent5.innerHTML = response.eventName;
    nameOfSingleEventbox5.innerHTML = response.eventName;
    SinglelocationOfEvent5.innerHTML = response.location;
    descriptionEvent5.innerHTML = response.description;
    
}

//registration page
let tableBody = document.getElementById("tableBody");
//let title1 = document.getElementById("Title1");
//binds listener
window.addEventListener("DOMContentLoaded", RegisteredUserForAnEvent);

async function RegisteredUserForAnEvent() {
    const requestUrl = "https://localhost:7003/api/v1/EventManagementSystem/registrations/10";
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

