import 'antd/dist/antd.css';
import {Tabs} from 'antd';
import Table01 from "./Table01";
import Table02 from "./Table02";

const {TabPane} = Tabs;

function App() {
    return (
        <div style={{margin: '86px'}}>
            <Tabs defaultActiveKey="1">
                <TabPane tab="Tab 1" key="1">
                    <Table01/>
                </TabPane>
                <TabPane tab="Tab 2" key="2">
                    <Table02/>
                </TabPane>
            </Tabs>
        </div>
    );
}

export default App;
