const { LOGOUT_LINKS } = require("../constants/navigation");
const { getProcessLog } = require("../utils/logger");

const getLogoutView = (_request, response) => {
    response.render("logout", {headTitle: "Shop - Logout", menuLinks: LOGOUT_LINKS, path: "/logout", activeLinkPath: "/logout",})
};

const killApplication = (_request, _response) => {
    getProcessLog()
    process.exit()
};

module.exports = { getLogoutView, killApplication };
