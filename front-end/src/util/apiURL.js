export const apiURL = () => {
  return window.location.hostname === "localhost"
    ? "http://localhost:3333"
    : "https://calm-depths-83461.herokuapp.com";
};
