# EthQL Extended

The extended variant of the EthQL Standard has a reference implementation
in the [EthQL project](http://github.com/Concensys/ethql). The implementation is
a nodeJS middleware server that uses web3.js as an interface into the underlying
Ethereum node.

It features:
- Automatic decoding of event data based on a plugin architecture
- Built in caching in the data fetching layer
- ability to reference accounts using ENS
- an extended number of ways to select blocks or transactions using a variety of methods.

The EthQL server can be setup against a self-run node or an Infura node. You can
see the schema definition [here](./ethql-extended.gql)

## Advantages of using EthQL extended
EthQL extended supports a number of ways to select blocks and filter transactions.
Additionally it does a best effort decoding against the log data. This makes it very
convenient to build dApps without additional code.

## Disadvantages of using EthQL extended
EthQL uses web3.js under the hood to query the JSON-RPC. Depending on the call, there
could be a lot of backend calls against the node. In order to reduce the number of
calls against the backend node, there is a hard limit to the number of blocks that
can be returned by the EthQL server.
