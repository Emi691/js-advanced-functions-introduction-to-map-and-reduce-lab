// Your code here
function mapToNegativize(sourceArray){
    let newArray = []
    sourceArray.forEach(element => newArray.push(0 - element))
    return newArray
}

function mapToNoChange(sourceArray){
    let newArray = []
    sourceArray.forEach(element => newArray.push(element))
    return newArray
}

function mapToDouble(sourceArray){
    let newArray = []
    sourceArray.forEach(element => newArray.push(element * 2))
    return newArray
}

function mapToSquare(sourceArray){
    let newArray = []
    sourceArray.forEach(element => newArray.push(element ** 2))
    return newArray
}

function reduceToTotal(sourceArray, startingPoint = 0){
    let total = startingPoint
    sourceArray.forEach(element => total = element + total)
    return total
}

function reduceToAllTrue(sourceArray){
    for(let i = 0; i < sourceArray.length; i++) {
        if (!!sourceArray[i] === false){
            return false
        }
    }
    return true
}

function reduceToAnyTrue(sourceArray){
    for(let i = 0; i < sourceArray.length; i++) {
        if (!!sourceArray[i] === true){
            return true
        }
    }
    return false
}