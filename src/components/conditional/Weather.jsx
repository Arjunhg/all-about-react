import React from 'react'

const Weather = ({temp}) => {

    if(temp < 15){
        return <div>It is cold outside</div>
    }else if(temp >=15 && temp <=25){
        return <div>It is nice outside</div>
    }else{
        return <div>It is hot outside</div>
    }
}

export default Weather


