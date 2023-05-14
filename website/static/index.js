// Import the required libraries
const Web3 = require('web3');
const fs = require('fs');
const PinataSDK = require('@pinata/sdk');
const FormData = require('form-data');

// Initialize the Web3 object
const web3 = new Web3('http://localhost:8545');

// Set up the Pinata SDK client
const pinata = PinataSDK('<YOUR_API_KEY>', '<YOUR_API_SECRET>');

// Read in the image file
const imageFile = fs.readFileSync('<PATH_TO_IMAGE>');

// Upload the image to Pinata
const formData = new FormData();
formData.append('file', imageFile);
const pinataOptions = {
  pinataMetadata: {
    name: 'DR Image',
  },
};
const result = await pinata.pinFileToIPFS(formData, pinataOptions);

// Define the NFT metadata
const metadata = {
  name: 'DR Image NFT',
  description: 'NFT representing a DR image',
  image: `https://gateway.pinata.cloud/ipfs/${result.IpfsHash}`,
  attributes: [
    {
      trait_type: 'Prediction',
      value: JSON.stringify(prediction),
    },
  ],
};

// Define the ERC-721 contract ABI
// const contractABI = <CONTRACT_ABI>;

// // Define the contract address
// const contractAddress = '<CONTRACT_ADDRESS>';

// // Create a new contract instance
// const contractInstance = new web3.eth.Contract(contractABI, contractAddress);

// // Define the token ID and recipient address
// const tokenId = 1;
// const recipientAddress = '<RECIPIENT_ADDRESS>';

// // Mint the NFT
// await contractInstance.methods
//   .mint(recipientAddress, tokenId, JSON.stringify(metadata))
//   .send({ from: '<SENDER_ADDRESS>', gas: 3000000 });

// // Get the NFT metadata
// const nftMetadata = await contractInstance.methods.tokenURI(tokenId).call();

// console.log(nftMetadata);
