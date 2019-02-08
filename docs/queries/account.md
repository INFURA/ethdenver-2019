This is an example of how to query specifically for accounts. It features all of the fields
that can be queried with the Account type with some specific arguments

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
