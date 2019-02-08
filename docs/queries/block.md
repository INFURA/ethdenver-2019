The following is query that uses every field available on a block. Since there are no arguments
provided in this block query, it will return the latest known block.

```graphql
{
  block {
  	number
    hash
    parent {
      transactionCount
      ommerCount
    }
    nonce
    transactionsRoot
    transactionCount
    stateRoot
    receiptsRoot
    miner {
      address
    }
    extraData
    gasLimit
    gasUsed
    timestamp
    logsBloom
    mixHash
    difficulty
    totalDifficulty
    ommerCount
    ommers {
      number
      hash
    }
    ommerAt(index: 0) {
      number
      hash
    }
    ommerHash
    transactions {
      to {
        address
      }

      from {
        address
      }
    }

    transactionAt(index: 0) {
      to {
        address
      }

      from {
        address
      }
    }
  	logs(filter: {addresses:["0x78eef34fa547df4c3c35d0750586ee60a33fa942"]}) {
    	topics
    }
	}
}```
