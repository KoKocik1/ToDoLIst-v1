exports.getDate = function () {
    const options = {
        weekday: "long",
        day: "numeric",
        morth: "long"
    };
    return new Date().toLocaleDateString("en-US", options);
}
exports.getDay = function () {
    const options = {
        weekday: "long",
    };
    return new Date().toLocaleDateString("en-US", options);
}