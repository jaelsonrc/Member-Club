import { alertText } from "../libs/alert.js";

const userHistoryList = document.querySelector("#appointments");
const userHistoryHeading = document.querySelector(".history header .text-xs");

export function showHistory(userInfo) {
  try {
    const userInfoAppointmentHistory = userInfo?.appointmentHistory;
    userHistoryList.innerHTML = "";
    userHistoryHeading.textContent =
    userInfoAppointmentHistory?.length > 1
      ? `${userInfoAppointmentHistory?.length} cortes`
      : `${userInfoAppointmentHistory?.length} corte`;
      
    if (userInfoAppointmentHistory?.length > 0) {


      
   
      userInfoAppointmentHistory.forEach((appointment) => {
   

        // Creating li element
        const itemContainer = document.createElement("li");
        itemContainer.classList.add("history-card");
        itemContainer.classList.add("flex");
        itemContainer.classList.add("items-center");
        itemContainer.classList.add("space-between");

        // Creating time container
        const timeContainer = document.createElement("div");
        timeContainer.classList.add("time");

        const date = document.createElement("p");
        date.classList.add("subtitle-sm");
        date.textContent = `${appointment.date}`;

        const hour = document.createElement("p");
        hour.classList.add("text-xs");
        hour.textContent = `${appointment.time}`;

        timeContainer.append(date, hour);

        // Creating check container
        const checkContainer = document.createElement("div");
        checkContainer.classList.add("check");

        const check = document.createElement("img");
        check.setAttribute("src", "./src/assets/seal-check.svg");
        checkContainer.append(check);

        // Adding elements to li
        itemContainer.append(timeContainer, checkContainer);

        // Adding li to ul
        userHistoryList.appendChild(itemContainer);
  
      });
    }
  } catch (error) {
    console.log(error);
    alertText("Erro ao buscar histórico do usuário");
  }
}
