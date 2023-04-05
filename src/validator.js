const validator = {
    isValid: (creditCardNumber) => {
        const length = creditCardNumber.length;
        let count = 0;
    
        for(let i = 0; i < length; i++) {
            let currentDigit = parseInt(creditCardNumber[i]);
    
            if((i+2) % 2 == 0)
                if((currentDigit *= 2) > 9)
                    currentDigit -= 9;
    
            count += currentDigit;
        }
    
        return(count % 10) === 0;
    },

    maskify : (creditCardNumber) => {
        const visibleDigits = 4;
        const maskedDigits = creditCardNumber.length - visibleDigits;
        return "#".repeat(Math.max(0, maskedDigits)) + creditCardNumber.substr(maskedDigits);
      }};
export default validator;