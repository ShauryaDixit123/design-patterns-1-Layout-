export const SplitScreen = ({
  children,
  weightLeft: weightLeft,
  weightRight: weightRight,
}) => {
  const [left, right] = children;

  return (
    <div className="flex" style={{ display: "flex" }}>
      <div className={`flex-1`} style={{ flex: "0.5" }}>
        {left}
      </div>
      <div
        className={`flex-1`}
        style={{ backgroundColor: "blue", flex: "0.5" }}
      >
        {right}
      </div>
    </div>
  );
};
