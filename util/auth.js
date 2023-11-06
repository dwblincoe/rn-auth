import axios from "axios";

const API_KEY = "AIzaSyBKI4Az3Nz_-gBGBOEAoCEEA9CT_G2BxT8";

async function authenticate(mode, data) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, { ...data, returnSecureToken: true });

  return response.data;
}

export async function createUser(data) {
  return authenticate("signUp", data);
}

export async function login(data) {
  return authenticate("signInWithPassword", data);
}
