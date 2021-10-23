import React, { useEffect, useState } from "react";

const AsyncParagraph = (props) => {
    const [data, setData] = useState(props.dataVersion)
    console.log(data)

    useEffect(() => {
        // props.dataVersion.resolve('Success').then(setData(value))
        const string = props.loadData()
        string.then(res => setData(res))
        //totally got this wrong, but I docs and figured it out.
        
    },[props.loadData, props.dataVersion])

    return <p>{data}</p>;
  };

export default AsyncParagraph