var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
function convert(num) {
    if  (num == 0)
            return 'zero'
    else
        return ones[num % 10]
}
var cases = [4,6,7]
for (let i = 0; i < cases.length; i++)
    console.log(Array(convert(cases[i])))