// fetch version

////
const fetchNFTs = async () => {
  let nfts;
  console.log("fetching nfts");
  const api_key = "FN8guMexPXkWry3c8gKxy8nwCb0LZde-";
  const baseURL = `https://eth-mainnet.alchemyapi.io/v2/${api_key}/getNFTs/`;

  if (!collection.length) {
    var requestOptions = {
      method: "GET",
    };

    const fetchURL = `${baseURL}?owner=${wallet}`;

    nfts = await fetch(fetchURL, requestOptions).then((data) => data.json());
  } else {
    console.log("fetching nfts for collection owned by address");
    const fetchURL = `${baseURL}?owner=${wallet}&contractAddresses%5B%5D=${collection}`;
    nfts = await fetch(fetchURL, requestOptions).then((data) => data.json());
  }

  if (nfts) {
    console.log("nfts:", nfts);
    setNFTs(nfts.ownedNfts);
  }
};

const fetchNFTsForCollection = async () => {
  if (collection.length) {
    var requestOptions = {
      method: "GET",
    };
    const api_key = "FN8guMexPXkWry3c8gKxy8nwCb0LZde-";
    const baseURL = `https://eth-mainnet.alchemyapi.io/v2/${api_key}/getNFTsForCollection/`;
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
