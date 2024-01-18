import { menuEntries } from "./modules/menuentries.js";
import { createEntry } from "./modules/menu.js";
import { burgerManager } from "./modules/burgerManager.js";
import { catalogue } from "./modules/catalogue.js";

globalThis.catalogue = catalogue;

console.dir(menuEntries);
console.dir(catalogue);

const navMenu = document.querySelector("#navMenu");

createEntry(menuEntries, navMenu);
burgerManager();