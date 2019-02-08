Query the logs with a filter

```graphql
{
  logs(filter: {
    fromBlock: 3831517
    topics:[["0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"]]
  }){
    index
    account {
      address
    }
    data
    transaction{
      index
      hash
    }
    topics
  }
}
```
