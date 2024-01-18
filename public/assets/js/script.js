import { menuEntries } from "./modules/menuentries.js";
import { createEntry } from "./modules/menu.js";
import { burgerManager } from "./modules/burgerManager.js";

console.dir(menuEntries);

const navMenu = document.querySelector("#navMenu");

createEntry(menuEntries, navMenu);
burgerManager();