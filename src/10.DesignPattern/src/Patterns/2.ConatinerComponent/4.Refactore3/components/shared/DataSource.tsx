import React, { ReactNode, useEffect, useState } from "react";

type DataSourceProps = {
    getDataFunc: () => void;
    resourceName: string;
    children: ReactNode;
}

const DataSource = ({
    getDataFunc = () => {},
    resourceName,
    children
}: DataSourceProps) => {

    const [state, setState] = useState<any>(null);

    useEffect(() => {
        (
            async() => {
                const data = await getDataFunc();
                setState(data);
            }
        )();
    }, [getDataFunc])

    return(
        <>
            {
                React.Children.map(children , (child: any) => {
                    if(React.isValidElement(child)){
                        return React.cloneElement(child, {
                            [resourceName]: state
                        })
                    }
                    return child;
                })
            }
        </>
    )

}

export default DataSource;