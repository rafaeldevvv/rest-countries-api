export const darkTheme = {
  background: "hsl(207, 26%, 17%)",
  text: "hsl(0, 0%, 100%)",
  element_background: "hsl(209, 23%, 22%)",
};

export const lightTheme = {
  background: "hsl(0, 0%, 98%)",
  text: "hsl(200, 15%, 8%)",
  element_background: "hsl(0, 0%, 100%)",
};

export function changeThemeColors(theme) {
  const colors = theme === "dark" ? darkTheme : lightTheme;
  const htmlDom = document.querySelector(":root");

  htmlDom.style.setProperty("--text", colors.text);
  htmlDom.style.setProperty("--element-background", colors.element_background);
  htmlDom.style.setProperty("--background", colors.background);
}
