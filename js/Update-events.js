
let container = document.getElementById("containingvessel");
let eventboxinfos = document.getElementById("eventdetailbox");
let divContainer = document.getElementById("registercontainer");

window.addEventListener("DOMContentLoaded", fetchEventsListApi);

async function fetchEventsListApi() {
  const requestUrl = "https://localhost:7003/api/v1/EventManagementSystem/event";
  const request = new Request(requestUrl);
  const response = await fetch(request);
  const eventsList = await response.json();

  displayEvents(eventsList);
}


function displayEvents(response) {
  for (let i = 0; i < response.length; i++) {
    let listItem = document.createElement("li");
    listItem.className = "grid-item";
    listItem.setAttribute("data-scroll", "");
    listItem.setAttribute("data-scroll-speed", "-0.5");

    listItem.innerHTML = `<div class="event-box">
          <figure class="image">
            <img
              src="${response[i].imageUrl}"
              alt="Image"
              height="250"
            />
          </figure>
          <div class="content-box">
            <span>${response[i].dateOfEvent}</span>
            <h2>
              <a href="view-event.html?eventid=${response[i].id}">${response[i].eventName}</a>
            </h2>
            <ul>
              <li>
                <figure>
                  <img
                    src="images/icon-host.svg"
                    alt="Image"
                    height="26"
                  />
                </figure>
                <p>${response[i].location}</p>
              </li>
            </ul>
          </div>
        </div>`;

    container.appendChild(listItem);
  }
}
//single events page
window.addEventListener("DOMContentLoaded", fetchEvent);

async function fetchEvent() {
  let url = window.location.href;
  let eventId = url.split("=")[1];
  const requestUrl2 = " https://localhost:7003/api/v1/EventManagementSystem/event/" + eventId;
  const request2 = new Request(requestUrl2);
  const response2 = await fetch(request2);
  const individualevent = await response2.json();

  displaySingleEvents(individualevent);
}



function displaySingleEvents(data) {
  let usl = document.createElement('ul');
  usl.innerHTML = `
  <li><a href="index.html">Home</a></li>

  <li><a href="ViewUserdetails.html?registrationsid=${data.id}">Registration</a></li>`

  divContainer.appendChild(usl);
  //for (let i = 0; i < response.length; i++) {
  let divItems = document.createElement('div');
  divItems.className = "event-detail-box";
  divItems.innerHTML = `<h3 id = "eventboxsingleEventname1">${data.eventName}</h3>
                    <ul class="infos">
                      <li>
                        <figure>
                          <img src="images/icon-time.svg" alt="Image" />
                        </figure>
                        <span id = "SingleEventdate1">${data.dateOfEvent}</span>
                      </li>
                      <li>
                        <figure>
                          <img
                            src="images/icon-host.svg"
                            alt="Image"
                            height="26"
                          />
                        </figure>
                        <span id = "singleEventlocation1">${data.location}</span>
                      </li>
                      
                    </ul>
                    <!-- end infos -->
                    <p id = "event1description">${data.description}</p>`;

  eventboxinfos.appendChild(divItems);
  //}


}

//Dynamic registration page
let tableBody = document.getElementById("tableBody");

window.addEventListener("DOMContentLoaded", fetchUserDetailsForAnEvent);

async function fetchUserDetailsForAnEvent() {
  let url = window.location.href;
  let registrationId = url.split("=")[1];
  const requestUrl3 = "https://localhost:7003/api/v1/EventManagementSystem/registrations/" + registrationId;
  const request3 = new Request(requestUrl3);
  const response3 = await fetch(request3);
  const individualregistration = await response3.json();

  displayUserDetails(individualregistration);
}



function displayUserDetails(responseketa) {


  //for (let i = 0; i < response.length; i++) {
  let tr = document.createElement('tr');
  tr.innerHTML = `<td>${responseketa.userName}</td>
    <td>${responseketa.email}</td>`

  tableBody.appendChild(tr);
  // }


}
