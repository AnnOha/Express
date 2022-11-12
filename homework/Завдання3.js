let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
let teens = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifthteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
let tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
let hundreds = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nive hundred']
let thousands  = ['', 'one thousands', 'two thousands', 'three thousands', 'four thousands', 'five thousands', 'six thousands', 'seven thousands', 'eight thousands', 'nive thousands']

function convert_tens(num) {
  if ((num >= 11) && (num <= 19))
      return teens[num - 10]
  else if (num >= 10)
      return tens[Math.floor(num / 10)] + " " + ones[num % 10]
  else if (num < 10)
      return ones[num % 10]
} 

function convert_hundreds(num) {
  if (num >= 100)
      return hundreds[Math.floor(num / 100)] + " " + convert_tens(num % 100)
  else 
      return convert_tens(num)
}

function convert_thousands(num) {
  if (num >= 1000)
      return thousands[Math.floor(num / 1000)] + " " + convert_hundreds(num % 1000)
  else 
      return convert_hundreds(num)
}

function convert(num) {
      if ((num == 0) || (num == -0))
          return 'zero'
      else if (num < 0) {
          num = -num
          return "minus " + convert_thousands(num)
      }
      else
          return convert_thousands(num)
}

let num = [10, 5, 7, 55, -64, 844, -6, 11, 43, -1]
for (let i = 0; i < num.length; i++)
  console.log(convert(num[i]))