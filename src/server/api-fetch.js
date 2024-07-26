import { apiConfig } from "./api-config";
import { alertText } from "../libs/alert.js";
const MENSAGEM_CLIENTE_NAO_ENCONTRADO = 'Cliente não foi encontrado, tente outro ID!'
//const loading = document.querySelector('.loading');
export async function getClientDetails({ id }) {
  if (!id) {
    throw new Error('ID is required');
  }
  //loading.style.display = 'block';
  try {
    const url = `${apiConfig.baseURL}/clients/${id}`;

    const response = await fetch(url)
    const data = await response.json();

    if (!data.id) {
      throw new Error(MENSAGEM_CLIENTE_NAO_ENCONTRADO)
    }

    //alert('Cliente encontrado!')

    return data;
  } catch (error) {
    console.log(error)
    //alert(MENSAGEM_CLIENTE_NAO_ENCONTRADO)
    alertText(MENSAGEM_CLIENTE_NAO_ENCONTRADO);
   // throw new Error(MENSAGEM_CLIENTE_NAO_ENCONTRADO)
    return null
  } finally {
   // loading.style.display = 'none';
  }

}