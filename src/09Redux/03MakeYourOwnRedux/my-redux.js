export function myCreateStore(reducer){
    let state;
    let listeners = []; ///multiple store can have multiple listeners
    const store = {
        getState(){
            return state;
        },
        dispatch(action){
            state = reducer(state, action);
            listeners.forEach(listener => {
                listener();
            })
        },
        subscribe(listener){
            listeners.push(listener);
            return function(){
                const listenerIndex = listeners.indexOf(listener);
                listeners.splice(listenerIndex, 1);
            };
        }
    };

    store.dispatch({type: '@@INIT'});
    return store;
}