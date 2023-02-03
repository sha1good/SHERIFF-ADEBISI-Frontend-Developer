import axios from "axios";


const BASEURL = "https://brainstormforce-app.onrender.com/api";

export const publicRequest = axios.create({
  baseURL: BASEURL,
  withCredentials: true
 });
