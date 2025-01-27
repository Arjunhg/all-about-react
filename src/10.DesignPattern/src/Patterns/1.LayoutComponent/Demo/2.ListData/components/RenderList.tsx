type RenderListProps = {
    data: any[];
    resourceItem: string;
    dataToRender: any;
}

const RenderList = ( {data, resourceItem, dataToRender: ItemComponent} : RenderListProps ) => {

    // Rename dataToRender to ItemComponent

    return(
        <div>
            {
                data.map((item, i) => (
                    <ItemComponent key={i} {...{[resourceItem]: item}} />
                ))
            }
        </div>
    )

}

export default RenderList;