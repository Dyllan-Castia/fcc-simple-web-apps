const themes = [{name: "moogie", message: "moogalishous"}, {name: "boogie", message: "Boogalishous"}, {name: "floogie", message: "Floogalishous"}];

const body = document.body;
const themeBtn = document.getElementById("theme-switcher-button");
const options = document.getElementById("theme-dropdown");
const items = options.querySelectorAll(".menuitem");
const liveRegion = document.querySelector('[aria-live="polite"]');

themeBtn.addEventListener("click", () => {
  const isOpen = themeBtn.getAttribute("aria-expanded") === "true";
  options.hidden = isOpen;
  themeBtn.setAttribute("aria-expanded", String(!isOpen)); 
})

items.forEach(item => {
  item.addEventListener("click", () => {
    const themeName = item.textContent.trim().toLowerCase();

    themes.forEach(t => {
      body.classList.remove(`theme-${t.name}`);
    });

    body.classList.add(`theme-${themeName}`);

    const theme = themes.find(t => t.name === themeName);
    if (theme) {
      liveRegion.hidden = false;          
      liveRegion.textContent = theme.message;
    }

    options.hidden = true;
    themeBtn.setAttribute("aria-expanded", "false");
  });
});
