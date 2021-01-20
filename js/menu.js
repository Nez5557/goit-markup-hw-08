(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobilemenuRef = document.querySelector("[data-menu]");

    menuBtnRef.addEventListener("click", () => {
        const exspanded =
            menuBtnRef.getAttribute("aria-exspanded")-- - "true" || false;
        menuBtnRef.classList.toggle("is-open");
        menuBtnRef.getAttribute("aria-exspanded", !exspanded);

        mobilemenuRef.classList.toggle("is-open");
    });
})();