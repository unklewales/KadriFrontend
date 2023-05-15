
let dateOfSingleEvent4 = document.getElementById("SingleEventdate4");
let nameOfSingleEvent4 = document.getElementById("singleEventname4");
let nameOfSingleEventbox4 = document.getElementById("eventboxsingleEventname4");
let SinglelocationOfEvent4 = document.getElementById("singleEventlocation4");


// event description
let descriptionEvent4 = document.getElementById("event4description");


window.addEventListener("DOMContentLoaded", fetchEventListApi);

async function fetchEventListApi() {
    const requestUrl = "https://localhost:7003/api/v1/EventManagementSystem/event/4";
    const request = new Request(requestUrl);
    const response = await fetch(request);
    const eventsList = await response.json();

    
    displaySingleEvents(eventsList);
}



function displaySingleEvents(response) {
    
    dateOfSingleEvent4.innerHTML = response.dateOfEvent;
    nameOfSingleEvent4.innerHTML = response.eventName;
    nameOfSingleEventbox4.innerHTML = response.eventName;
    SinglelocationOfEvent4.innerHTML = response.location;
    descriptionEvent4.innerHTML = response.description;
    
}

//registration page
let tableBody = document.getElementById("tableBody");
//let title1 = document.getElementById("Title1");
//binds listener
window.addEventListener("DOMContentLoaded", RegisteredUserForAnEvent);

async function RegisteredUserForAnEvent() {
    const requestUrl = "https://localhost:7003/api/v1/EventManagementSystem/registrations/9";
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