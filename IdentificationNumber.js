class IdentificationNumber{
    constructor(dni) {
        this.dni = dni
    }

    validateDNI() {
        if (this.dni >= 0 & this.dni <=  99999999) {
            return true
        } else {
            return false
        }
    }  
    
    calculateQuotient() {
        const isValid = this.validateDNI()

        if (isValid) {
            const quotient = this.dni % 23
            return quotient
        } 
        
    }

    calculateDNILetter() {
        const quotient = this.calculateQuotient()
        if (!quotient) {
            return null
        }
        const letters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
        return letters[quotient - 1]
        
    }

    compareLetters(enteredLetter) {
        const letter = this.calculateDNILetter()

        return letter === enteredLetter
    }
};



module.exports = IdentificationNumber;