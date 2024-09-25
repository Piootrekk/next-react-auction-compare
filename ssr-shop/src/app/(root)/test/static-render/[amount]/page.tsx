type StaticRenderTestProps = {
  params: {
    amount: string;
  };
};

const StaticRenderTest: React.FC<StaticRenderTestProps> = ({
  params: { amount },
}) => {
  return (
    <div className="container">
      <h1 className="text-3xl font-bold pb-8">Static Render: {amount}</h1>
      <div className="justify-center flex flex-row flex-wrap items-center my-12 gap-y-8">
        <div className="flex flex-wrap gap-1">
          {Array.from({ length: parseInt(amount!) }).map((_, index) => (
            <div key={index} className="w-2 h-2 bg-secondary"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StaticRenderTest;
