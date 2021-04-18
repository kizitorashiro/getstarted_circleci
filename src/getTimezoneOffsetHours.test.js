const getTimezoneOffsetHours = require('./getTimezoneOffsetHours');
test('getTimezoneOffsetHours -9', () => {
    expect(getTimezoneOffsetHours()).toBe(-9);
});
