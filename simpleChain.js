const SHA256 = require('crypto-js/sha256');

/** ====================================|
 * Class with a constructor for block   |
 * =====================================|
 */
class Block {
    constructor(data) {
        this.hash = "";
        this.height = 0;
        this.body = data;
        this.time = 0;
        this.previousBlockHash = "";
    }
}

/** ========= Blockchain Class ===================|
 * Class with a constructor for new Blockchain   |
 * ==============================================|
 */
class BlockChain {
    constructor() {
        this.chain = [];
        // Create the genesis block
        this.addBlock(new Block("First block in the chain - Genesis Block"));
    }

    addBlock(newBlock) {
        if (this.chain.length > 0) {
            // Assign previous blocks hash for subsequent blocks from Genesis
            newBlock.previousBlockHash = this.chain[this.chain.length - 1].hash
        }
        newBlock.height = this.chain.length;
        // Include timestamp following the UTC format by slicing the stringed timestamp
        newBlock.time = new Date().getTime().toString().slice(0, -3);
        // SHA256 Requires a string of data
        newBlock.hash = SHA256(JSON.stringify(newBlock)).toString();
        this.chain.push(newBlock);
    }
}