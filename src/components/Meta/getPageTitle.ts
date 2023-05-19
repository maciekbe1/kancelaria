export const getPageTitle = (path: string) => {
  switch (path) {
    case "/":
      return "strona główna";
    case "/zespol":
      return "zespół kancelarii";
    case "/specjalizacje":
      return "specjalizacje";
    case "/privacy-policy":
      return "polityka prywatności";
    default:
      return "";
  }
};
