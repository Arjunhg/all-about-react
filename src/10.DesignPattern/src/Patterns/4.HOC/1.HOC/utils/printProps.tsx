
export const printProps = (Component: any) => {

    return (props: any) => {
        console.log('Props:', props);
        return <Component {...props} />
    }
}

/*

--> Cake-Making machine : Represents out Component
--> the function printProps wraps this machine and adds an extra step: it prints out the recipe (props) every time the cake is made.
--> printProps function returns another function. This new function is a react component that will wrap the orignal Component.

*/