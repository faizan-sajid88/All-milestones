let sudokuArray = [0, 0, 0, 2, 6, 0, 7, 0, 1]


function sudokuSolution(data){

    // filter numbers not equal to zero

    let presentValues = new Set(data.filter(num => num !==0))
    let missingNumbers= [];

// we know sudoku has 1 to 9 numbers first we filter number from array then  push other numbers in missing number array

    for (let i = 1; i <=9 ; i++) {
        if(!presentValues.has(i)){
            missingNumbers.push(i)
        }
    }
    
// then check wich number are equal to zero then replace missing number with zero
for (let i = 0; i < data.length; i++) {
        if(data[i] === 0){
            data[i] = missingNumbers.shift()
        }
    }
return data
    }

    let result =  sudokuSolution(sudokuArray)
  console.log(result)