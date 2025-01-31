export const validPassword = (password) => {
    if(password.length<8 || password.length>16){
        throw new Error('Password length should be between 8 and 20 characters');
    }
    return "Password is valid";
}