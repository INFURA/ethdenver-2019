# Ethql simplified

The Simplified variant of EthQL is designed for inclusion direction into nodes such
as Geth. Because it is implemented directly in the client, this variant benefits
from the native data look ups. It does not rely on translation through the JSON RPC
interface in order to resolve the query.

Take a look at the schema definition [here](./geth-ethql.gpl).

## Advantages
- It is baked right into the client, so there is no need for additional middleware servers
- It does not have a query limit and the lookups are extremely fast.
- It has Mutation operations so it has 1:1 coverage over the existing JSON RPC.

## Disadvantages
Because it is so close to the client storage, the output from this interace is currently
very raw.  It does not support event decoding, so all log data must be decoded at the
application level. It is also missing some of the extended filtering and selecting
that the Extended version supports.
