These are all of the fields available to an account

```grapql
{
  account(address: "0x78eef34fa547df4c3c35d0750586ee60a33fa942") {
    address
    balance
    transactionCount
    code
    storage(slot: "0x0")
  }
}
```
