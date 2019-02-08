All fields available for a transaction.

```grapql
{
  transaction(hash: "0x4becbdeac95272626b7a8efbde5924c7281a6046a5416d5975f3fcc89c4c4488") {
    hash
    nonce
    index
    from {
      address
    }
    to {
      address
    }
    value
    gasPrice
    gas
    inputData
    block {
      number
    }
    status
    gasUsed
    cumulativeGasUsed
    createdContract {
      code
    }
    logs {
      topics
    }
  }
}
```
