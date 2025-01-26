// import { PropsWithChildren, Children } from "react";
import { ReactNode } from "react";

export type SplitScreenProps = {
    children: [] | [ReactNode, ReactNode];
    leftWidth?: number;
    rightWidth?: number;
}

// type SplitScreenProps = PropsWithChildren<{
//     leftWidth?: number;
//     rightWidth?: number;
// }>


const SplitScreen = ({ 
    children, 
    leftWidth, 
    rightWidth
} : SplitScreenProps) => {

    const [left, right] = children;

    // const childrenArray = Children.toArray(children);
    // if(childrenArray.length !== 2) {
    //     throw new Error("SplitScreen can only have two children");
    // }

    // console.log("Chidlren array is: ", childrenArray);

    // const [left, right] = childrenArray;

    /*
    Take the first element of childrenArray and assign it to left

    Take the second element and assign it to right

    <SplitScreen>
        <Left />   // First child → mapped to `left`
        <Right />  // Second child → mapped to `right`
    </SplitScreen>
    */

    const leftW = `${leftWidth}rem`;
    const rightW = `${rightWidth}rem`;

    return(
        <section className="flex w-screen">
            <div style={{width: leftW}}>{left}</div>
            <div style={{width: rightW}}>{right}</div>
        </section>
    )
}

export default SplitScreen;