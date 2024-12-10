let arr = [1,"2","hr",0];
function filter_list(l){
    let newArr=[];
    for(let i = 0;i<l.length;i++){
        if(typeof(l[i]) == "number"){
            newArr.push(l[i])
        }
    }
    return newArr;
}
console.log(filter_list(arr))

// Question:
// Write a JavaScript function that filters
// out all non-integer elements from a given
// array and returns a new array containing only numbers.