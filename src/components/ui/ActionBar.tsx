type ActionBarProps = {
    title?: string;
    children?: React.ReactElement | React.ReactNode;
  };
  
  const ActionBar = ({ title, children }: ActionBarProps) => {
    return (
      <div>
        <h1 className="py-5 text-lg font-bold">{title}</h1>
        <div style={{ display: "flex" }}>{children}</div>
      </div>
    );
  };
  
  export default ActionBar;