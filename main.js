let x= 9;
console.log(x);
function isOddOrEven(numberToCheck){
  const isEven = numberToCheck % 2 == 0;
  
  if (isEven)
    return console.log('The number ${numberToCheck} is Even'),
      newNum=numberToCheck;
  
  else newNum = (numberToCheck + 1);
  console.log('The number is now even at:' + newNum)
}
isOddOrEven(x);
console.log(newNum);

for(let y = 1; y<= newNum; y++){
  for (let s =(newNum - y); s<= newNum -y; s++){
    str=' ';
    console.log(str.repeat(s),"0 ".repeat(y))
  }
}
for (let y= 1, z = (newNum - y); y<=newNum - 1; y++, z--){
  str=' ';
  console.log(str.repeat(y), "0 ".repeat(z));
}