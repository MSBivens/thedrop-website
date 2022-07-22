import { useState } from "react";
import NFTCard from "../components/nftCard";
// import fetch from "fetch";

const nftanalytics = () => {
  const [NFTs, setNFTs] = useState([]);

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const apiKey = "demo";
  const baseURL = `https://eth-mainnet.alchemyapi.io/nft/v2/${apiKey}/getNFTsForCollection`;
  const contractAddr = "0x61fce80d72363b731425c3a2a46a1a5fed9814b2";
  const tokenId = "0x1ea2";
  const withMetadata = "false";
  const fetchURL = `${baseURL}?contractAddress=${contractAddr}&startToken=${tokenId}&withMetadata=${withMetadata}`;

  fetch(fetchURL, requestOptions)
    .then((response) => response.json())
    .then((response) => JSON.stringify(response, null, 2))
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));

  return (
    <div className="flex flex-col items-center justify-center pt-40 py-8 gap-y-3">
      <div className="flex flex-col w-full justify-center items-center gap-y-2">
        <button
          className={
            "disabled:bg-slate-500 text-white bg-blue-400 px-4 py-2 mt-3 rounded-sm w-1/5"
          }
          onClick={() => {
            fetch;
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
