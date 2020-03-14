module.exports = function toReadable (number) {
    const smallNumber = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
     'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const decimalNumber = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let arrNumber;
    if (number <= 19){
        function smallNumberFunc(){
            return smallNumber[number];
        }
        return smallNumberFunc();
    }
    else if (number >= 20 && number <= 99){
        function decimalNumberFunc(){
            arrNumber = number.toString().split('');
            if(arrNumber[1] === '0'){
                return decimalNumber[arrNumber[0]];
            }
            else{
                return decimalNumber[arrNumber[0]] + ' ' + smallNumber[arrNumber[1]];
            }
        }
        return decimalNumberFunc();
    }
    else if (number >= 100 && number <= 999){
        function hardNumberFunc(){
            arrNumber = number.toString().split('');
            if (arrNumber[1] > '1' && arrNumber[2] === '0') {
                return smallNumber[arrNumber[0]] + ' hundred ' + decimalNumber[arrNumber[1]];
            }
            else if (arrNumber[1] === '0' && arrNumber[2] != '0'){
                return smallNumber[arrNumber[0]] + ' hundred ' + smallNumber[arrNumber[2]];
            }
            else if(arrNumber[1] === '0' && arrNumber[2] === '0'){
                return smallNumber[arrNumber[0]] + ' hundred';
            }
            else if(arrNumber[1] === '1' && arrNumber[2] >= '0'){
                let temp = arrNumber.slice(-2).join('');
                return smallNumber[arrNumber[0]] + ' hundred ' + smallNumber[temp];
            }
            else {
                return smallNumber[arrNumber[0]] + ' hundred ' + decimalNumber[arrNumber[1]] + ' ' + smallNumber[arrNumber[2]];
            }
        }
        return hardNumberFunc();
    }
}
