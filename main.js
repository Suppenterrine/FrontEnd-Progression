const menu = document.getElementById("menu");
const content = document.getElementById("content");
let el;
let elBefore;
let indexBefore = [-1];
let showContent = false;

Array.from(document.getElementsByClassName("menu-item"))
    .forEach((item, index) => {

        item.onmouseover = () => {
            if (showContent !== true) {
                document.getElementById("content-items").style.display = "block";
            }
            
            indexBefore.push(index);
            
            menu.style.setProperty("--active-index", index)
            el = document.querySelector(`[data-id="${index}"]`);
            el.style.setProperty("display", "block");
            document.querySelectorAll("#subheader-id").forEach(item => {
                item.innerHTML = index+1;
            });

            elBefore = document.querySelector(`[data-id="${indexBefore.shift()}"]`);
            elBefore.style.setProperty("display", "none");
        }
    });