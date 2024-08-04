import useDots from "./useDots";

const Loading = (WrappedComponent) => {
  return ({ isLoading, ...props }) => {
    const dots = useDots();
    if (isLoading) {
      return <div>Loading{dots}</div>;
    }
    return <WrappedComponent {...props} />;
  };
};

export default Loading;
