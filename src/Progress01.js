import React, {useEffect} from 'react';
import {Progress} from "antd";


const Progress01 = props => {

    useEffect(() => console.log('Progress01/useEffect'), [])

    return <Progress {...props}/>
}


export default Progress01;
