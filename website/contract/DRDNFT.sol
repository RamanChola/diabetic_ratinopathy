
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract DiabeticRetinopathyNFT is ERC721 {
    struct Prediction {
        uint256 patientId;
        string leftEyeImageUrl;
        string rightEyeImageUrl;
        uint256[] predictionResults;
    }

    mapping (uint256 => Prediction) private _predictions;

    constructor() ERC721("Diabetic Retinopathy NFT", "DRNFT") {}

    function createPredictionNFT(address _to, uint256 _tokenId, uint256 _patientId, string memory _leftEyeImageUrl, string memory _rightEyeImageUrl, uint256[] memory _predictionResults) public {
        _predictions[_tokenId] = Prediction(_patientId, _leftEyeImageUrl, _rightEyeImageUrl, _predictionResults);
        _safeMint(_to, _tokenId);
    }

    function getPredictionResults(uint256 _tokenId) public view returns (uint256, string memory, string memory, uint256[] memory) {
        Prediction storage prediction = _predictions[_tokenId];
        return (prediction.patientId, prediction.leftEyeImageUrl, prediction.rightEyeImageUrl, prediction.predictionResults);
    }
}
