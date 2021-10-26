
const getRandomString = (length) => {
    if(length > 7){
        length = 7
    }

    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;

    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor((Math.random() *
            charactersLength)) + 1);
    }

    return result;
}

const emailString = getRandomString(Math.floor(Math.random() * 20));

const getNumber = (length) => {
    let newNumber = '';

    for(let i = 1; i < length; i++){
        if(i === 2) {
            newNumber += 1;
        }

        newNumber = newNumber.concat((Math.floor(Math.random() * 8) + 1).toString());
    }

    return newNumber.toString();
}

const getStreetAddress = () => {
    let streetAddressNumber = (Math.floor(Math.random() * 500) + 1).toString();

    let streetNameOptions = [
        'Gondor Way',
        'Shelobs Cavern Road',
        'Fool Of A Took Lane',
        'Isengard Street',
        'Fellowship Blvd'
    ]

    return `${streetAddressNumber} ${streetNameOptions[Math.floor(Math.random() * 4)]}`
}

const getName = (type) => {
    let nameOptions;

    if(type === 'first') {
        nameOptions = [
            'Gandalf',
            'Legolas',
            'Frodo',
            'Samwise',
            'Aragorn',
            'Gimili',
            'Boromir',
            'Eomer',
            'Theodin',
            'Faramir'
        ]
    } else if(type === 'last') {
        nameOptions = [
            'The Brave',
            'The Cowardly',
            'The Curmudgeonly',
            'The Average Looking',
            'The Adventerous',
            'The Shy',
            'The Socially Awkward',
            'The Clumsy',
            'The Pitchy',
            'The Illiterate'
        ]
    }
    return `${nameOptions[Math.floor(Math.random() * 9) + 1]}`
}

const getCity = () => {
    let cityNameOptions = [
        'Gondor',
        'Mordor',
        'Isengard',
        'The Shire',
        'The Gray Havens'
    ]

    return cityNameOptions[Math.floor(Math.random() * 4)]
}

const getMonth = () => {
    const months = [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
    ];

    return `${months[Math.floor(Math.random() * 12) + 1]}`
}

const getYear = () => {
    const today = new Date();
    const thisYear = today.getFullYear();

    const years = [];

    for (let i = 1; i < 11; i++) {
        years.push(`${thisYear + i}`,);
    }

    return `${years[Math.floor(Math.random() * 12) + 1]}`
}

const data = {
    name: {
        first: getName('first'),
        last: getName('last')
    },
    email: `wbx.test.email+${emailString}@gmail.com`,
    phoneNumber: getNumber(10),
    address: getStreetAddress(),
    city: getCity(),
    state: 'GA',
    zip: getNumber(5),
    cardNumber: '4242424242424242',
    cvv: getNumber(3),
    month: getMonth(),
    year: getYear()
}

console.log(data);

url = window.location.href

if(true) {
    const fillInput = (selector, content) => {
        const selectedElement = document.querySelectorAll(selector);

        if(selectedElement.length > 1) {
            selectedElement.forEach((element) => {
                element.value = content
            })
        }else {
            selectedElement[0].value = data.inputType
        }
    }

    const fillSelect = (selector, content) => {
        document.querySelectorAll(selector)[0].value = content;
    }

    fillInput('input[aria-label="First Name"]', data.name.first);
    fillInput('input[aria-label="Last Name"]', data.name.last);
    fillInput('input[type="email"]', data.email);
    fillInput('input[type="tel"]', data.phoneNumber);
    fillInput('input.street1', data.address);
    fillInput('input.city', data.city);
    fillInput('input.zip', data.zip);
    fillInput('input[aria-label="First Name"]', data.name.first);
    fillInput('input.cc-number', data.cardNumber);
    fillInput('input[aria-label="Credit Card CVV"]', data.cvv);
    fillSelect('select.date-month', data.month);
    fillSelect('select.date-year', data.year);
}