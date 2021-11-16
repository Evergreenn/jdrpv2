export function UI() {
    const map_button = document.getElementById("map_button");
    const map = document.getElementById("map");

    const caracter_button = document.getElementById("caracter_button");
    const caracter = document.getElementById("caracter");

    const bag_button = document.getElementById("bag_button");
    const bag = document.getElementById("bag");

    const mySidepanel = document.getElementById("mySidepanel");
    const openbtn = document.getElementById("openbtn");
    const closebtn = document.getElementById("closebtn");

    const textarea = document.getElementById("text");

    map_button.addEventListener("click", (e) => {
        e.preventDefault();
        toogleUi(map, map_button);
    });

    caracter_button.addEventListener("click", (e) => {
        e.preventDefault();
        toogleUi(caracter, caracter_button);
    });

    bag_button.addEventListener("click", (e) => {
        e.preventDefault();
        toogleUi(bag, bag_button);
    });

    const toogleUi = (t, b) => {
        if (t.classList.contains("display-none")) {
            b.classList.add("down");
            t.classList.add("display");
            t.classList.remove("display-none");
        } else {
            b.classList.remove("down");
            t.classList.add("display-none")
            t.classList.remove("display");
        }
    }

    const keyboardEvents = (event) => {
        if (event.defaultPrevented) {
            return;
        }

        switch (event.key) {
            case "c":
                toogleUi(caracter, caracter_button);
                break;
            case "b":
                toogleUi(bag, bag_button);
                break;
            case "m":
                toogleUi(map, map_button);
                break;
            default:
                return;
        }
        event.preventDefault();
    }

    window.addEventListener("keydown", keyboardEvents, true);


    textarea.addEventListener("focus", (e) => {
        window.removeEventListener("keydown", keyboardEvents, true);
    })

    textarea.addEventListener('blur', (e) => {
        window.addEventListener("keydown", keyboardEvents, true);
    });


    openbtn.addEventListener("click", () => {
        mySidepanel.classList.add("open");
        mySidepanel.classList.remove("close");
    });

    closebtn.addEventListener("click", () => {
        mySidepanel.classList.add("close");
        mySidepanel.classList.remove("open");
    });

}