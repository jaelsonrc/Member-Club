import { alertText } from "../libs/alert.js";

const userImg = document.getElementById("userInfo-urlImg");
const userName = document.getElementById("userInfo-name");
const userClientSince = document.getElementById("userInfo-since");

export function showUserInfo(userInfo) {
  try {

    if(userInfo.urlProfileImg)
      userImg.setAttribute("src", userInfo.urlProfileImg);
    else
      userImg.setAttribute("src", "./src/assets/default.png");

      const fileUrl =`./src/assets/${userInfo.name}.png`;
      checkIfFileExists(fileUrl)
      .then(exists => {
          if (exists) {    
              userImg.setAttribute("src", fileUrl);
          } 
      });

    userName.textContent = `${userInfo.name}`;
    userClientSince.textContent = `Cliente desde ${userInfo.clientSince}`;
  } catch (error) {
    console.log(error);
    alertText("Não foi possível retornar os dados do usuário.");
  }
}


async function checkIfFileExists(url) {
  try {
      const response = await fetch(url, { method: 'HEAD' });
      return response.ok; // Retorna true se o arquivo existir, caso contrário false
  } catch (error) {
      //console.log('Erro ao verificar o arquivo:', error);
      return false; // Retorna false em caso de erro
  }
}