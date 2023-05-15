let dateOfEvent1 = document.getElementById("eventdate1");
let nameOfEvent1 = document.getElementById("eventname1");
let locationOfEvent1 = document.getElementById("eventlocation1");
let dateOfEvent2 = document.getElementById("eventdate2");
let nameOfEvent2 = document.getElementById("eventname2");
let locationOfEvent2 = document.getElementById("eventlocation2");
let dateOfEvent3 = document.getElementById("eventdate3");
let nameOfEvent3 = document.getElementById("eventname3");
let locationOfEvent3 = document.getElementById("eventlocation3");
let dateOfEvent4 = document.getElementById("eventdate4");
let nameOfEvent4 = document.getElementById("eventname4");
let locationOfEvent4 = document.getElementById("eventlocation4");
let dateOfEvent5 = document.getElementById("eventdate5");
let nameOfEvent5 = document.getElementById("eventname5");
let locationOfEvent5 = document.getElementById("eventlocation5");
let dateOfEvent6 = document.getElementById("eventdate6");
let nameOfEvent6 = document.getElementById("eventname6");
let locationOfEvent6 = document.getElementById("eventlocation6");

window.addEventListener("DOMContentLoaded", fetchEventListApi);

async function fetchEventListApi() {
    const requestUrl = "https://localhost:7003/api/v1/EventManagementSystem/event";
    const request = new Request(requestUrl);
    const response = await fetch(request);
    const eventsList = await response.json();

    displayEvents(eventsList);

}

function displayEvents(response) {
    dateOfEvent1.innerHTML = response[0].dateOfEvent;
    nameOfEvent1.innerHTML = response[0].eventName;
    locationOfEvent1.innerHTML = response[0].location;
    dateOfEvent2.innerHTML = response[1].dateOfEvent;
    nameOfEvent2.innerHTML = response[1].eventName;
    locationOfEvent2.innerHTML = response[1].location;
    dateOfEvent3.innerHTML = response[2].dateOfEvent;
    nameOfEvent3.innerHTML = response[2].eventName;
    locationOfEvent3.innerHTML = response[2].location;
    dateOfEvent4.innerHTML = response[3].dateOfEvent;
    nameOfEvent4.innerHTML = response[3].eventName;
    locationOfEvent4.innerHTML = response[3].location;
    dateOfEvent5.innerHTML = response[4].dateOfEvent;
    nameOfEvent5.innerHTML = response[4].eventName;
    locationOfEvent5.innerHTML = response[4].location;
    dateOfEvent6.innerHTML = response[6].dateOfEvent;
    nameOfEvent6.innerHTML = response[6].eventName;
    locationOfEvent6.innerHTML = response[6].location;
}





