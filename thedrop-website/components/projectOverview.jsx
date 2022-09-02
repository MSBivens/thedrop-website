export const projectOverview = ({ projectMetadata }) => {
  return (
    <div className="w-1/4 flex flex-col ">
      <div className="flex flex-col y-gap-2 px-2 py-3 bg-slate-100 rounded-b-md h-110 ">
        <div className="">
          <h2 className="text-xl text-gray-800">{contract.name}</h2>
          <p className="text-gray-600">Symbol: {projectMetadata.symbol}</p>
          <p className="text-gray-600">
            Collection Size: {projectMetadata.totalSupply}
          </p>
          <p className="text-gray-600">Type: {projectMetadata.tokenType}</p>
        </div>
      </div>
    </div>
  );
};
