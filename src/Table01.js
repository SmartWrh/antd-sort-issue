import React, {Fragment, useState} from 'react';
import {Button, Table} from "antd";
import Progress01 from "./Progress01";

const Table01 = () => {

    const [data, updateData] = useState([{title: '测试', percent: 10}, {title: '测试2', percent: 30}])

    const columns = [
        {
            title: '标题',
            dataIndex: 'title'
        },
        {
            title: '进度',
            dataIndex: 'percent',
            render: (dom) => <Progress01 percent={dom}/>
        }
    ]

    const handleClick = () => {
        const tempData = data.map(value => ({...value, percent: value.percent + 10 > 100 ? 0 : value.percent + 10}))
        updateData(tempData)
    }

    return (
        <Fragment>
            <Button
                type={'primary'}
                onClick={handleClick}>update</Button>
            <Table
                border
                columns={columns}
                dataSource={data}
                rowKey={data => data.title}/>
        </Fragment>
    )
}


export default Table01;
