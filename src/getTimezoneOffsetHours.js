function getTimeZoneOffsetHours() {
    const date = new Date();
    return date.getTimeZoneOffsetHours() / 60;
}

module.exports = getTimeZoneOffsetHours
