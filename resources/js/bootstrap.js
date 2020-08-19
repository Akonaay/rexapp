window._ = require("lodash");

try {
    window.jquery = require("jquery");

    require("bootstrap");
} catch (e) {}

window.axios = require("axios");

window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
