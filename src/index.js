/**
 * Должна быть стрелочной функцией без фигурных скобок сразу возвращать значение
 * @param {string} string
 * @returns {string}
 */
export const capitalizeString = (string) => string.split(' ').map(item => `${item[0].toUpperCase()}${item.slice(1)}`).join(' ');

/**
 * Должна быть function declaration
 * @param {string} string
 * @returns {string}
 */
export const fenceString = fenceStrings;
function fenceStrings(string) {
    const arr = string.split('');
    return arr.map((item, index) => index % 2 == 0 ? `${item[0].toLowerCase()}` : `${item[0].toUpperCase()}`).join('');
};

/**
 * Должна быть function expression
 * @param {'uppercase'|'lowercase'|'capitalize'|'fence'} action
 * @param {string} string
 * @returns {string}
 */
export const reducerIf = function (action, string) {
    if (action === 'uppercase') {
        return string.toUpperCase();
    } else if (action === 'lowercase') {
        return string.toLowerCase();
    } else if (action === 'capitalize') {
        return string.split(' ').map(item => `${item[0].toUpperCase()}${item.slice(1)}`).join(' ');
    } else if (action === 'fence') {
        return string.split('').map((item, index) => index % 2 == 0 ? `${item[0].toLowerCase()}` : `${item[0].toUpperCase()}`).join('');
    } else {
        return string;
    }
}

/**
 * Стрелочная
 * @param {'uppercase'|'lowercase'|'capitalize'|'fence'} action
 * @param {string} string
 * @returns {string}
 */
export const reducerSwitch = 0;

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsForOf = (string) => {
    for (let a of string) {
        console.log(a);
    }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsFor = (string) => {
    for (let i = 0; i < string.length; i++) {
        console.log(string[i]);
    }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsWhile = (string) => {
    let i = 0;
    while (i < string.length) {
        console.log(string[i]);
        i++;
    }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsSplit = (string) => {
    string.split('').forEach(element => {
        console.log(element);
    });
}
