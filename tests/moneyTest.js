import {formatCurrency} from '../scripts/utils/money.js'

console.log('tesst cases forcurrency formatting ');
// this is a manual testing and its too hard everytime to check
if(formatCurrency(1000)=== '10.00'){
    console.log('currency test passed');
}
else{
    console.log('currency test failed');

}

if(formatCurrency(0)=== '0.00'){
    console.log('currency test passed');
}
else{
    console.log('currency test failed');

}

if(formatCurrency(2000.6)=== '20.01'){
    console.log('currency test passed');
}
else{
    console.log('currency test failed');

}
if(formatCurrency(2000.2)=== '20.01'){
    console.log('currency test passed');
}
else{
    console.log('currency test failed');

}
