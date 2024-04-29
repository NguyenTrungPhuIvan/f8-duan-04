var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var tabs = $$(".vacation__list-title");
var panes = $$(".vacation__list-desc");
var line = $(".vacation__separate");

var tabs_first_active = $(".vacation__list-title.vacation__list-title-active");
console.log(tabs);

line.style.left = tabs_first_active.offsetLeft + "px";
line.style.width = tabs_first_active.offsetWidth + "px";

tabs.forEach((tab, index) => {
    tab.onclick = function () {
        var pane = panes[index];
        $(".vacation__list-desc.vacation__list-desc-active").classList.remove(
            "vacation__list-desc-active"
        );
        pane.classList.add("vacation__list-desc-active");

        $(".vacation__list-title.vacation__list-title-active").classList.remove(
            "vacation__list-title-active"
        );
        tab.classList.add("vacation__list-title-active");
        line.style.left = tab.offsetLeft + "px";
        line.style.width = tab.offsetWidth + "px";
    };
});
