const fs = require('fs');



    fs.readFile('puzzle-input.txt', 'utf8', function(err, data) {
    // if (err) throw err;
    const dataWithoutLineBreaks = data.split(/\n/);

    const arrayOfSums = [];
    let temporaryArray = [];
    for (let index = 0; index < dataWithoutLineBreaks.length; index++) {
        
    if (dataWithoutLineBreaks[index].length > 1){
    temporaryArray.push(parseInt(dataWithoutLineBreaks[index]))};

    if (dataWithoutLineBreaks[index].length < 1){
        const temporaryArraySum = temporaryArray.reduce((partialSum, a) => partialSum + a, 0);
        arrayOfSums.push(temporaryArraySum);
        temporaryArray = [];
    }




    }
    console.log(Math.max(...arrayOfSums));

});






