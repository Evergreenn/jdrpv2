export function Tabs() {

    document.getElementById("stats_tab").className += " down" ;
    document.getElementById("stats_content").style.display = "block";


    document.querySelectorAll(".tab-item").forEach(el => el.addEventListener('click', event => {

        const tabcontent = document.getElementsByClassName("tabcontent");
        for (let i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        const tablinks = document.getElementsByClassName("tab-item");
        for (let i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" down", "");
        }

        const id = event.currentTarget.id.split("_")[0];
        document.getElementById(id+"_content").style.display = "block";
        event.currentTarget.className += " down";
    }));

}