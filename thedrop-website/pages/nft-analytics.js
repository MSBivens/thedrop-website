import { useState } from "react";
import NFTCard from "../components/nftCard";

const nftanalytics = () => {
  const [NFTs, setNFTs] = useState([]);

  return (
    <div className="flex flex-col items-center justify-center pt-40 py-8 gap-y-3">
      <div className="flex flex-col w-full justify-center items-center gap-y-2">
        <button
          className={
            "disabled:bg-slate-500 text-white bg-blue-400 px-4 py-2 mt-3 rounded-sm w-1/5"
          }
          onClick={() => {
            nftsForCollection;
          }}
        >
          Let's go!{" "}
        </button>
      </div>
      <div className="flex flex-wrap gap-y-12 mt-4 w-5/6 gap-x-2 justify-center">
        {NFTs.length &&
          NFTs.map((nft) => {
            return <NFTCard nft={nft}></NFTCard>;
          })}
      </div>
    </div>
  );
};

export default nftanalytics;
