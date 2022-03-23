const IdentificationNumber = require('./IdentificationNumber');

test('should return false if the entered number is < 0', () => {
    const dni = -40080319
    const identificationNumber = new IdentificationNumber(dni)

    const isValid = identificationNumber.validateDNI();

    expect(isValid).toBe(false)
});

test('should return false if the entered number is > 99999999', () => {
    const dni = 999999999
    const identificationNumber = new IdentificationNumber(dni)

    const isValid = identificationNumber.validateDNI();

    expect(isValid).toBe(false)
});

test('should return true if the entered number is between 0 and 99999999', () => {
    const dni = 40080319
    const identificationNumber = new IdentificationNumber(dni)

    const isValid = identificationNumber.validateDNI();

    expect(isValid).toBe(true)
});

test('should return letter N when the quotient of the division of the ID number is 13', () => {
    const dni =  40080319
    const identificationNumber = new IdentificationNumber(dni);

    const dniLetter = identificationNumber.calculateDNILetter()

    expect(dniLetter).toBe('N')
});

test('should return letter K when the quotient of the division of the ID number is 13', () => {
    const dni =  38125926
    const identificationNumber = new IdentificationNumber(dni);

    const dniLetter = identificationNumber.calculateDNILetter()

    expect(dniLetter).toBe('K')
});

test('should return null when the quotient of the division of the ID number is 22', () => {
    const dni =  -38125926
    const identificationNumber = new IdentificationNumber(dni);

    const dniLetter = identificationNumber.calculateDNILetter()

    expect(dniLetter).toBe(null)
});

test('should return false if dni letter is not the same the the entered', () => {
    const dni =  38125926
    const enteredLetter = 'B';
    const identificationNumber = new IdentificationNumber(dni);

    const isTheSameLetter = identificationNumber.compareLetters(enteredLetter)

    expect(isTheSameLetter).toBe(false)
});

test('should return true if dni letter is the same the the entered', () => {
    const dni =  38125926
    const enteredLetter = 'K';
    const identificationNumber = new IdentificationNumber(dni);

    const isTheSameLetter = identificationNumber.compareLetters(enteredLetter)

    expect(isTheSameLetter).toBe(true)
});

test('should return null when no letter is found and some is entered', () => {
    const dni =  -38125926
    const enteredLetter = 'K';
    const identificationNumber = new IdentificationNumber(dni);

    const isTheSameLetter = identificationNumber.compareLetters(enteredLetter)

    expect(isTheSameLetter).toBe(false)
})