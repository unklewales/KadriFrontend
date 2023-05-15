
let dateOfSingleEvent2 = document.getElementById("SingleEventdate2");
let nameOfSingleEvent2 = document.getElementById("singleEventname2");
let nameOfSingleEventbox2 = document.getElementById("eventboxsingleEventname2");
let SinglelocationOfEvent2 = document.getElementById("singleEventlocation2");


// event description
let descriptionEvent2 = document.getElementById("event2description");


window.addEventListener("DOMContentLoaded", fetchEventListApi);

async function fetchEventListApi() {
    const requestUrl = "https://localhost:7003/api/v1/EventManagementSystem/event/2";
    const request = new Request(requestUrl);
    const response = await fetch(request);
    const eventsList = await response.json();

    displaySingleEvents(eventsList);
}



function displaySingleEvents(response) {

    dateOfSingleEvent2.innerHTML = response.dateOfEvent;
    nameOfSingleEvent2.innerHTML = response.eventName;
    nameOfSingleEventbox2.innerHTML = response.eventName;
    SinglelocationOfEvent2.innerHTML = response.location;
    descriptionEvent2.innerHTML = response.description;
}

//registration page
let tableBody = document.getElementById("tableBody");
//let title1 = document.getElementById("Title1");
//binds listener
window.addEventListener("DOMContentLoaded", RegisteredUserForAnEvent);

async function RegisteredUserForAnEvent() {
    const requestUrl = "https://localhost:7003/api/v1/EventManagementSystem/registrations/6";
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