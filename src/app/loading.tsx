import { Spin } from 'antd';
const Loading = () => {
    return (
        <div
        style={{
             backgroundColor: "white",
        }}>
            <Spin size="large"
                style={{
                    minHeight: "100vh",
                    color:"#4338ca",
                }}>
                <div className="content" />
            </Spin>
        </div>
    );
};

export default Loading;