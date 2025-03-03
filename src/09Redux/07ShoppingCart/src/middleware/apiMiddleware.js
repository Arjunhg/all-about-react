import { fetchError } from "../store/slices/productSlice";

export const apiMiddleware = ({dispatch}) => (next) => (action) =>{
    // console.log("Store",store);
    // console.log("Next",next);
    // console.log("Action",action);

    const BASE_URL = 'https://fakestoreapi.com';
    if(action.type==='api/makeCall'){
        next(action); //will show api/makeCall in redux dev tools
        const { url, onSuccessType, onStart, onError } = action.payload;
        // console.log("URL",url); 

        dispatch({
            type: onStart
        })

        fetch(`${BASE_URL}/${url}`)
        .then(res => res.json())
        .then(data => {
            // console.log("data",data);
            dispatch({ type: onSuccessType, payload: data });;
            // dispatch(onSuccessType(data));
        })
        .catch(() => {
            dispatch({
                type: onError
            });
        })
    }else{
        next(action);
    }
    // next(action);
}