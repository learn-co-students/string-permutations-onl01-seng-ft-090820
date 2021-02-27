function findAllPermutations(str){
    let array = [];
    if (str.length < 2) {
        return [str]
    }
    for (let i = 0; i < str.length; i++) {
        let start = str[i]
        let remainder = str.slice(0, i) + str.slice(i + 1)
        let subArray = findAllPermutations(remainder)
        subArray.forEach(permutation => {
            array.push(start + permutation)
        })
    }
    return array
}