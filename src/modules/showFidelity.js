const cardHeading = document.querySelector(".fidelity header div span");
const cardId = document.querySelector(".fidelity .user-tag .subtitle-md");
const cardPoints = document.querySelector(".fidelity .stamps");



const ordinalText = {
  1: "primeiro",
  2: "segundo",
  3: "terceiro",
  4: "quarto",
  5: "quinto",
  6: "sexto",
  7: "sétimo",
  8: "oitavo",
  9: "nono",
  10: "décimo",
};

export function showFidelity(userInfo) {
  const { totalCuts, cutsNeeded } = userInfo?.loyaltyCard;
  cardPoints.innerHTML = "";

  cardHeading.textContent = `Ao fazer cortes de cabelo, o ${ordinalText[cutsNeeded]} sai de graça!`;
  cardId.textContent = `ID: ${userInfo.id}`;

  for (let i = 0; i < cutsNeeded; i++) {
    const cardStamp = document.createElement("div");
    cardStamp.classList.add("box");

    if (i < totalCuts) {
      cardStamp.classList.add("stamp-checked");
      const imgCheck = document.createElement("img");
      imgCheck.setAttribute("src", "./src/assets/PinCheck.png");
      cardStamp.appendChild(imgCheck);
    } else if (i === cutsNeeded - 1) {
      cardStamp.classList.add("stamp-gift");
      const imgGift = document.createElement("img");
      imgGift.classList.add("Check");
      imgGift.setAttribute("src", "./src/assets/icons/Gift-Solid.svg");
      cardStamp.appendChild(imgGift);
    }else{
      cardStamp.classList.add("stamp-empty");
    }

    cardPoints.appendChild(cardStamp);
  }
}
