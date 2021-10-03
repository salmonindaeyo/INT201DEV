let scores = [82,75,48,64,36];

let scores2 = scores.map(c=>c*2);

console.log(scores2)


////////////////////

let scores = [82,75,48,64,36];

let score3 = scores.map(c=> {
    if(c>50){
        return 'pass'
    }
    return 'fail'
})

console.log(score3)