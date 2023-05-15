
let dateOfSingleEvent6 = document.getElementById("SingleEventdate6");
let nameOfSingleEvent6 = document.getElementById("singleEventname6");
let nameOfSingleEventbox6 = document.getElementById("eventboxsingleEventname6");
let SinglelocationOfEvent6 = document.getElementById("singleEventlocation6");


// event description
let descriptionEvent6 = document.getElementById("event6description");


window.addEventListener("DOMContentLoaded", fetchEventListApi);

async function fetchEventListApi() {
    const requestUrl = "https://localhost:7003/api/v1/EventManagementSystem/event/7";
    const request = new Request(requestUrl);
    const response = await fetch(request);
    const eventsList = await response.json();

    
    displaySingleEvents(eventsList);
}



function displaySingleEvents(response) {
    
    dateOfSingleEvent6.innerHTML = response.dateOfEvent;
    nameOfSingleEvent6.innerHTML = response.eventName;
    nameOfSingleEventbox6.innerHTML = response.eventName;
    SinglelocationOfEvent6.innerHTML = response.location;
    descriptionEvent6.innerHTML = response.description;
    
}

//registration page
let tableBody = document.getElementById("tableBody");
//let title1 = document.getElementById("Title1");
//binds listener
window.addEventListener("DOMContentLoaded", RegisteredUserForAnEvent);

async function RegisteredUserForAnEvent() {
    const requestUrl = "https://localhost:7003/api/v1/EventManagementSystem/registrations/11";
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


