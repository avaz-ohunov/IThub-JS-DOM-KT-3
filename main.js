// main.js

"use strict";

// По умолчанию подсписки свёрнуты
let submenuAll = document.body.querySelectorAll(".submenu");
for(let submenu of submenuAll) {submenu.hidden = true};

for(let li of menu.querySelectorAll("li")) {
    let span = document.createElement("span");
    span.classList.add("show");
    li.prepend(span);
    span.append(span.nextSibling);
}

menu.onclick = function(event) {
    if(event.target.tagName != "SPAN") return;

    let childrenList = event.target.parentNode.querySelector("ul");
    if(!childrenList){
        alert("Больше информации на www.wikipedia.org");
        return;
    }
    
    childrenList.hidden = !childrenList.hidden;

    if(childrenList.hidden) {
        event.target.classList.add("hide");
        event.target.classList.remove("show");
    } else {
        event.target.classList.add("show");
        event.target.classList.remove("hide");
    }
}
  