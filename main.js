var num=0;
var res=0;

entered = (x) => {
    console.log(x + " has been entered");
    num = num*10 + x;
}

add = () => {
    res = res + num;
    num = 0;
    console.log(res);
} 

sub = () => {
    res = res - num;
    num = 0;
} 

multiply = () => {
    res = res * num;
    num = 0;
} 

divide = () => {
    res = parseFloat(res)/parseFloat(num);
    num = 0;
}

printResult = () => {
    document.getElementById("result").innerHTML = "Result = " + res;
}