const getTimeZoneOffsetHours = require('./getTimezoneOffsetHours');
test('getTimezoneOffsetHours -9', () => {
    expect(getTimeZoneOffsetHours()).toBe(-9);
});
