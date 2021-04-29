const functions = require('./functions');

// toBe
test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2,2)).toBe(4);
})

// not.toBe
test('Adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2,2)).not.toBe(5);
})

// toBeNull
test('Should be null', () => {
    expect(functions.isNull()).toBeNull()
})

// toBeFalsy
test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy()
})

// toEqual
test('Check user', () => {
    expect(functions.createUser()).toEqual({firstName: 'Paja', lastName: 'Jureckova'})
})

// Less than and greater than
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 600;
    expect(load1 + load2).toBeLessThan(1600);
})

// regular expressions
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/);
})

// Arrays - toContain
test('Admin should be in usernames', () => {
    let usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
})

// working with async data

// Promise
// test('User fetched name should be Leanne Graham', () => {
//     expect.assertions(1);
//     return functions.fetchUser()
//         .then(data => {
//             expect(data.name).toEqual("Leanne Graham")
//         })
// })

// async await
test('User fetched name should be Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual("Leanne Graham");
})