


function grade(score:number): void {
    
    if (score>=90){
console.log('Your grade is A')

}else if (score>=80 &&  score<=90) {
console.log('Your grade is B')
}

else if (score>=70 &&  score<=80) {
console.log('Your grade is C')
}
else if (score>=50 &&  score<=70) {
console.log('Your grade is D')
}else if (score<50)  {
console.log('Your grade is F')
}

}

grade(50)