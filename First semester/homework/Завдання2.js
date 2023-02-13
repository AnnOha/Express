
function convert(array) {
    var ones = { '0': 'zero', '1': 'one', '2': 'two', '3':'three', '4':'four', '5':'five', '6':'six', '7':'seven', '8':'eight', '9':'nine', '-':'minus' }
    let result = [];
    for(i = 0; i < array.length; i++){
        let number_str = array[i].toString(10);
        console.log(number_str)
        if (number_str.length > 1) {
            let complex_numbers = [];
            for (let index = 0; index < number_str.length; index++) {
                const element = number_str[index];
                complex_numbers.push(ones[element]);
            }
            result.push(complex_numbers.join(','));
        } else {
            result.push(ones[number_str]);
        }
       
    }
    return result;
}

var cases = [123,32009,-6,700]
console.log(convert(cases));
