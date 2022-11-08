"use strict";
var styles = `
.localSave-Button{
    cursor: pointer;
}
`;
var styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
const checkedPosts = new Array();
function createLocalSave(parent) {
    const localSave = document.createElement("div");
    localSave.classList.add("localSave-Button");
    localSave.dataset.article = parent.id;
    localSave.id = "localSave-" + parent.id;
    const saveImg = document.createElement("img");
    saveImg.src = "";
    localSave.appendChild(saveImg);
    checkedPosts.push(parent.id);
    console.log();
    return localSave;
}
function onLoad() {
    let saveHeaders = document.querySelectorAll(".post-header");
    console.debug(saveHeaders);
    saveHeaders.forEach((value) => {
        var _a;
        var parent = (_a = value.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
        if (parent && !checkedPosts.includes(parent.id))
            value.appendChild(createLocalSave(parent));
    });
}
console.log("Loading Local");
setInterval(() => onLoad(), 1000);
