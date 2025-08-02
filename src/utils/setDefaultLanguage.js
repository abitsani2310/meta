export const setDefaultLanguage = () => {
  const lan = "id";
  const country = "US";
  localStorage.setItem("language-setting", JSON.stringify(lan));
  localStorage.setItem("country", JSON.stringify(country));
};
