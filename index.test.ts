const highestStum = require('./index');



test('checks if highest sum is correct', () => {
    let string = `1
    2
    3
    4
    
    1
    2
    3
    
    4
    5
    
    4`;
    console.log(string);
    
    expect(highestStum(string)).toBe(10)
  })