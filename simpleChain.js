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
        this.previousblockhash = "";
    }
}

/** =========Blockchain Class ===================|
 * Class with a constructor for new Blockchain   |
 * ==============================================|
 */
class BlockChain {
    constructor() {
        this.chain = [];
    }

    addBlock(newBlock) {
        this.chain.push(newBlock);
    }
}