import { Spin } from 'antd';
const Loading = () => {
    return (
        <div>
            <Spin tip="Loading" size="large">
                <div className="content" />
            </Spin>
        </div>
    );
};

export default Loading;