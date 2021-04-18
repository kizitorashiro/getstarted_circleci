function getTimeZoneOffsetHours() {
    const date = new Date();
    return date.getTimeZoneOffset() / 60;
}

module.exports = getTimeZoneOffsetHours
