
let dateOfSingleEvent1 = document.getElementById("SingleEventdate1");
let nameOfSingleEvent1 = document.getElementById("singleEventname1");
let nameOfSingleEventbox1 = document.getElementById("eventboxsingleEventname1");
let SinglelocationOfEvent1 = document.getElementById("singleEventlocation1");
let title1 = document.getElementById("titleEvent1");


// event description
let descriptionEvent1 = document.getElementById("event1description");


window.addEventListener("DOMContentLoaded", fetchEventListApi);

async function fetchEventListApi() {
    const requestUrl = "https://localhost:7003/api/v1/EventManagementSystem/event/1";
    const request = new Request(requestUrl);
    const response = await fetch(request);
    const eventsList = await response.json();

    displaySingleEvents(eventsList);
}



function displaySingleEvents(response) {
    dateOfSingleEvent1.innerHTML = response.dateOfEvent;
    nameOfSingleEvent1.innerHTML = response.eventName;
    nameOfSingleEventbox1.innerHTML = response.eventName;
    SinglelocationOfEvent1.innerHTML = response.location;
    descriptionEvent1.innerHTML = response.description;
    
    //console.log(title1.innerHTML);
}

//registration page
let tableBody = document.getElementById("tableBody");
//let title1 = document.getElementById("Title1");
//binds listener
window.addEventListener("DOMContentLoaded", RegisteredUserForAnEvent);

async function RegisteredUserForAnEvent() {
    const requestUrl = "https://localhost:7003/api/v1/EventManagementSystem/registrations/1";
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

