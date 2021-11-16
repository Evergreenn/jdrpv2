const axios = require("axios").default;

const _getItemFromInventory = () => {
  //WasmCallhere

  const test = {
    id: "toto",
    className: "rpgui-icon sword rpgui-cursor-grab-open tooltip",
    type: "weapon",
    properties: {
      weapon: {
        damage: {
          min: 1,
          max: 4,
        },
      },
    },
    img: "",
  };

  const lala = {
    id: "oui",
    className: "rpgui-icon shield rpgui-cursor-grab-open tooltip",
    type: "shield",
    properties: {
      defense: 5,
    },
    img: "",
  };

  return [test, lala];
};

const createHTMLNode = (item, locationId) => {
  // console.log(item);

  let itemFormated;

  if (item.object !== null) {
    if (item.object.equipement.armor !== null) {
      itemFormated = formatArmorItem(item);
    } else if (item.object.equipement.weapon !== null) {
      itemFormated = formatWeaponItem(item);
    } else {
      itemFormated = formatJewelItem(item);
    }
  } else {
    itemFormated = formatConsumable(item);
  }

  if (locationId === "bag") {
    const slots = document.getElementById("bag").getElementsByClassName(
      "empty-slot",
    );
    // const emptySLot = slots.find(element)
    const toto = Array.from(slots);
    const emptySLot = toto.filter((el) => el.childElementCount === 0);

    const element = emptySLot[0];

    element.appendChild(itemFormated[0]);
    itemFormated[0].appendChild(itemFormated[1]);
  }
};

const formatArmorItem = (item) => {
  const itemNode = document.createElement("div");
  // console.log("url('http://localhost:8000/" + item.consumable.asset + "')");
  itemNode.style.backgroundImage = "url('http://localhost:8000/" +
    item.object.asset + "')";
  itemNode.style.backgroundRepeat = "no-repeat";
  itemNode.style.width = "100%";
  itemNode.style.height = "100%";
  itemNode.className = "rpgui-cursor-grab-open tooltip";
  itemNode.id = item.object.id;
  itemNode.draggable = true;
  // itemNode.dataset.type = item.consumable.item_type
  itemNode.dataset.type = item.object.equipement.slot;
  //TODO
  itemNode.dataset.stats = btoa(JSON.stringify(item.object.equipement.armor));

  const TooltipNode = document.createElement("div");
  TooltipNode.innerHTML = "<h3>" + item.object.name +
    "</h3><hr><p> Armor type: " +
    item.object.equipement.armor.armor_type + "</p>" +
    "<p>Armor: " + item.object.equipement.armor.armor + "</p>" +
    "<p>Armor Class: " + item.object.equipement.armor.class + "</p>";
  //+ "<p>"+item.equipement.armor.resistances+"</p>";
  TooltipNode.className = "tooltiptext rpgui-container framed-golden-2";

  return [itemNode, TooltipNode];
};

const formatWeaponItem = (item) => {
};

const formatJewelItem = (item) => {
};

const formatConsumable = (item) => {
  const itemNode = document.createElement("div");
  // console.log("url('http://localhost:8000/" + item.consumable.asset + "')");
  itemNode.style.backgroundImage = "url('http://localhost:8000/" +
    item.consumable.asset + "')";
  itemNode.style.backgroundRepeat = "no-repeat";
  itemNode.style.width = "100%";
  itemNode.style.height = "100%";
  itemNode.className = "rpgui-cursor-grab-open tooltip";
  itemNode.id = item.consumable.id;
  itemNode.draggable = true;
  // itemNode.dataset.type = item.consumable.item_type
  itemNode.dataset.type = "potion";
  itemNode.dataset.stats = btoa(JSON.stringify(null));

  const TooltipNode = document.createElement("div");
  TooltipNode.innerHTML = "<h3>" + item.consumable.name + "</h3><hr><p>" +
    item.consumable.description + "</p>";
  TooltipNode.className = "tooltiptext rpgui-container framed-golden-2";

  return [itemNode, TooltipNode];
};

export const Items = () => {
  axios.get("http://localhost:8000/api/generationarmor/11")
    .then((response) => {
      response.data.forEach((element) => {
        createHTMLNode(element, "bag");
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
