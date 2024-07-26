const progressRemaining = document.querySelector(
  ".milestone aside .items-baseline"
);

export function showProgress(userInfo) {
  const { totalCuts, cutsNeeded, cutsRemaining } = userInfo.loyaltyCard;


  progressRemaining.innerHTML = `
  <h3 class="title-md text-base-gray-600">${cutsRemaining}</h3>
  <span class="text-md text-base-gray-500"> ${
    cutsRemaining > 1 ? "cortes restantes" : "corte restante"
  } 
  </span>
`;

  const progressBar = document.querySelector("progress");
  progressBar.setAttribute("value", `${totalCuts}`);
  progressBar.setAttribute("max", `${cutsNeeded}`);

  const progressCurrent = document.querySelector(".progress-text");
  progressCurrent.textContent = `${totalCuts} de ${cutsNeeded}`;
}
