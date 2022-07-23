const textMin = require('./src/js/textMinimizer');

test('words lenght must be 7', () => {
    expect(textMin('Burger Ala Melvin Easy and quick food making')).toEqual(
        'Burger Ala Melvin Easy and quick ...'
    );
});

test('words length must not add "..." when less than 5', () => {
    expect(textMin('Burger')).toEqual('Burger');
});
