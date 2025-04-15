const { MENU_LINKS } = require("../constants/navigation");

const getHomeView = (_request, response) => {
    response.render("home", {headTitle: "Shop - Home", menuLinks: MENU_LINKS, path: "/", activeLinkPath: "/"})
};

module.exports = { getHomeView };
