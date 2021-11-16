import * as wasm from "jdrp-wasm";
import * as Ui from "./UI/ui.js";
import * as Tabs from "./UI/tabs.js";
import * as D from "./D&D/D&D.js";
import * as I from "./Item/Item.js";
// import * as Api from "./Api/Api.js";

const defaultStats = {
  min: 1,
  max: 2,
  defense: 0,
};

document.getElementById("min-damage").innerText = defaultStats.min;
document.getElementById("max-damage").innerText = defaultStats.max;
document.getElementById("defense").innerText = defaultStats.defense;

Ui.UI();
Tabs.Tabs();
I.Items();
D.DandD(defaultStats);

self.window.addEventListener("load", () => {
  const progress = document.getElementById("xp_bar");
  RPGUI.set_value(progress, wasm.xp_state());
}, false);
