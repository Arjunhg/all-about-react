
export const getProperty = (obj, path) => {
    const keys = path.split(".");
    let result = obj;

    for( const key of keys){
        if(result && key in result){
            result = result[key];
        }else{
            return undefined;
        }
    }

    return result;
}

// merge two objects
export const merge = (obj1, obj2) => ({...obj1, ...obj2});

// deep clone object
export const clone = (obj) => JSON.parse(JSON.stringify(obj));

// deep camparision if two objects are equal
export const deepEqual = (obj1, obj2) => JSON.stringify(obj1) === JSON.stringify(obj2);