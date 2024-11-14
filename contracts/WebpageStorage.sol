pragma solidity ^0.8.24;

contract WebpageStorage {
    struct Webpage {
        string cid;
        address owner;
        uint256 timestamp;
    }
    mapping(string => Webpage) public webpages;
    mapping(address => string[]) public userWebpages;
    // mapping(uint256 => Proposal) public proposals;
    // mapping(address => mapping(uint256 => bool)) public hasVoted;

    event WebpageStored(
        string domain,
        string cid,
        address owner,
        uint256 timestamp
    );

    function storeWebPage(string memory domain, string memory cid) public {
        require(bytes(domain).length > 0, "Domain cannot be empty.");
        require(bytes(cid).length > 0, "CID cannot be empty.");

        webpages[domain] = Webpage(cid, msg.sender, block.timestamp);
        userWebpages[msg.sender].push(domain);
        emit WebpageStored(domain, cid, msg.sender, block.timestamp);
    }

    function getWebpage(
        string memory domain
    ) public view returns (string memory, address, uint256) {
        Webpage memory webpage = webpages[domain];
        require(bytes(webpage.cid).length > 0, "Page web introuvable.");
        return (webpage.cid, webpage.owner, webpage.timestamp);
    }
    function getUserWebpages(
        address user
    ) public view returns (string[] memory) {
        return userWebpages[user];
    }
}
