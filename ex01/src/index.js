let myArr = [];
function*multiplication(x) {
    for ( let i = 0; i < x; i++) {
        x*=2;
        yield x;   
        

        myArr.push(x);
        return myArr; 
    }
}
var num = multiplication(3);
for ( let x of num) {
    console.log(num.next());
    console.log(num.next());
    console.log(num.next());
}


module.exports = multiplication;
