
import { showUserInfo } from "./showUserInfo.js";
import {showHistory} from "./showHistory.js";
import {showFidelity} from "./showFidelity.js";
import {showProgress} from "./showProgress.js";

document.addEventListener("DOMContentLoaded", async () => {
  generateEmptyUser();
});

function generateEmptyUser() {
  const client  = {
    id: "000-000-000-000",
    name: "",
    picture: "src/assets/profile-pics/default.png",
    clientSince: "",
    appointmentHistory: [],
    loyaltyCard: {
      totalCuts: 0,
      cutsNeeded: 10,
      cutsRemaining: 10,
    },
  };

  showUserInfo(client);
  showHistory(client);
  showFidelity(client);
  showProgress(client);

}
