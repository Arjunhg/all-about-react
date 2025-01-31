export const toUpperCase = (str) => str.toUpperCase();
export const toLowerCase = (str) => str.toLowerCase();

export const capilatilize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const reverse = (str) => str.split('').reverse().join('');