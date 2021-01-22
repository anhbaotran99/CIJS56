// Bài 1 (3đ). Nhập từ bàn phím 1 dãy số, mỗi số cách nhau bởi dấu ",". Tìm và in ra những số nguyên tố có trong dãy số đó
//     VD: Input: 2, 9, 4, 5, 7
//         Output: 2, 5, 7

function isPrime(number) {
    if(number < 2) return false;
    for(let i = 2; i <= Math.sqrt(number); i++) {
        if(number % i == 0){
            return false;
        }
    }
    return true;
}

let input = prompt('Nhập số, cách nhau bởi dấu phẩy: ');
let numbers = input.split(',');
// console.log(numbers);
for(let i = 0; i < numbers.length; i++) {
    if(isPrime(numbers[i])) {
        console.log(numbers[i]);
    }
}