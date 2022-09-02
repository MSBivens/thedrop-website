import { useState } from "react";
import { NFTCard } from "../components/nftCard";
import { projectOverview } from "../components/projectOverview";
import { Network, Alchemy } from "alchemy-sdk";

// Testing contract address BAYC: 0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d

export default function NftAnalytics() {
  const settings = {
    apiKey: "demo", // Replace with your Alchemy API Key.
    network: Network.ETH_MAINNET, // Replace with your network.
  };

  const alchemy = new Alchemy(settings);

  const searchProject = async () => {
    alchemy.nft
      .getContractMetadata(`${collection}`)
      .then(console.log)
      .then((response) => {
        const collectionMetadata =
          response.data.contractMetadata.collectionMetadata;
      });
    alchemy.nft.getNftsForContract(`${collection}`).then(console.log);
  };

  //Data const
  const [collection, setCollectionAddress] = useState("");
  const [collectionMetadata, setCollectionMetadata] = useState([]);

  return (
    <div className="flex flex-col items-center justify-center pt-32 py-8 gap-y-3">
      <div className="flex flex-col w-full justify-center items-center gap-y-2">
        <input
          className="w-2/5 bg-slate-100 py-2 px-2 rounded-lg text-gray-800 focus:outline-blue-300 disabled:bg-slate-50 disabled:text-gray-50"
          onChange={(e) => {
            setCollectionAddress(e.target.value);
          }}
          value={collection}
          type={"text"}
          placeholder="Add the collection address"
        ></input>
        <button
          className={
            "disabled:bg-slate-500 text-white bg-blue-400 px-4 py-2 mt-3 rounded-sm w-1/5"
          }
          onClick={() => {
            searchProject();
          }}
        >
          Let&#39;s go!{" "}
        </button>
      </div>
      <div className="flex flex-wrap gap-y-12 mt-4 w-5/6 gap-x-2 justify-center">
        <p>{collection.address}</p>
      </div>
    </div>
  );
}

// export default NftAnalytics;
