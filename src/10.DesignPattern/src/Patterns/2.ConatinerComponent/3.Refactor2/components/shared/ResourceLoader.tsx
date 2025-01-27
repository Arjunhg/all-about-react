import axios from "axios";
import React, { ReactNode, useEffect, useState } from "react";

type ResourceLoaderProps = {
    resourceURL: string;
    resourceName: string;
    children: ReactNode;
}

const ResourceLoader = ({
    resourceURL,
    resourceName,
    children,
}: ResourceLoaderProps) => {

    const [state, setState] = useState<null>(null)
    console.log("State is:", state)

    useEffect(() => {
        (
            async() => {
                const res = await axios.get(
                    `https://jsonplaceholder.typicode.com/${resourceURL}`
                );
                setState(res.data);
            }
        )();
    }, [resourceURL]);

    return(
        <>
            {
                React.Children.map(children, (child: any) => {
                    if(React.isValidElement(child)){
                        return React.cloneElement(child, {
                            // [resourceName]: {userId: 1, id: 1, title: 'delectus aut autem', completed: false}
                            [resourceName]: state
                            // The square brackets ([]) indicate that the key is computed dynamically from the value of the resourceName variable.
                        })
                    }
                    return child;
                })
            }
        </>
    )

}

export default ResourceLoader;