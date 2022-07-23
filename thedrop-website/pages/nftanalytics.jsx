import { useState } from "react";
import { NFTCard } from "../components/nftCard";

// Testing contract address: 0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d

export default function NftAnalytics() {
  // Toggle content displays
  const [displayGallery, setDisplayGallery] = useState(false);
  const handleGallery = () => {
    setDisplayGallery(!displayGallery);
  };

  // General API const
  const api_key = "kygVl8vLhN5FdS4zpb2MHi5pcGNLQytg";
  const api_call = "getNFTsForCollection/";
  const baseURL = `https://eth-mainnet.alchemyapi.io/v2/${api_key}/${api_call}`;

  //Data const
  const [collection, setCollectionAddress] = useState("");
  const [NFTs, setNFTs] = useState([]);

  // API Calls
  const fetchNFTsForCollection = async () => {
    if (collection.length) {
      var requestOptions = {
        method: "GET",
      };
      const fetchURL = `${baseURL}?contractAddress=${collection}&withMetadata=${"true"}`;
      const nfts = await fetch(fetchURL, requestOptions).then((data) =>
        data.json()
      );
      if (nfts) {
        console.log("NFTs in collection:", nfts);
        setNFTs(nfts.nfts);
      }
    }
  };

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
            fetchNFTsForCollection();
          }}
        >
          Let's go!{" "}
        </button>
      </div>
      <div className="flex flex-wrap gap-y-12 mt-4 w-5/6 gap-x-2 justify-center">
        <button
          className={
            "disabled:bg-slate-500 text-white bg-blue-400 px-4 py-2 mt-3 rounded-sm w-1/5"
          }
          onClick={() => setDisplayGallery(false)}
        >
          Stats{" "}
        </button>
        <button
          className={
            "disabled:bg-slate-500 text-white bg-blue-400 px-4 py-2 mt-3 rounded-sm w-1/5"
          }
          onClick={handleGallery}
        >
          Gallery{" "}
        </button>
      </div>
      <div
        className={
          displayGallery
            ? "flex flex-wrap gap-y-12 mt-4 w-5/6 gap-x-2 justify-center"
            : "hidden"
        }
      >
        {NFTs.length &&
          NFTs.map((nft) => {
            return <NFTCard nft={nft}></NFTCard>;
          })}
      </div>
    </div>
  );
}

// export default NftAnalytics;
