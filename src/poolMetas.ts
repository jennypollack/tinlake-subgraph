export type network = string // 'mainnet' | 'kovan' does not work in AssemblyScript
export type version = number // 2 | 3

// NOTE: interfaces are not supported by AssemblyScript
export class PoolMeta {
  shortName: string
  id: string // root contract address
  shelf: string // shelf contract address
  pile: string // pile contract address
  nftFeed: string // NFT or NAV feed contract address
  assessor: string // assessor contract address
  juniorTranche: string
  seniorTranche: string // senior tranche contract address
  seniorToken: string
  juniorToken: string
  networkId: network
  startBlock: number // block where root contract was deployed
  version: version
}

// NOTE: the following addresses all need to be lower case. Also note that AssemblyScript does not support
// .toLowerCase()
export let poolMetas: PoolMeta[] = [

  // Mainnet production
  // CF1
  {
    shortName: 'ConsolFreight 1',
    id: '0xf8b4ef7781ba8e1b3df6370f71d526d00aad1ee2',
    shelf: '0x454c86ba7e0cbd959cfa76aa2db799f9d7a816e4',
    pile: '0x95b74ef13ff280a89ce3d7bbefc822c210e9939f',
    nftFeed: '0xab351d3e54c975bfa0c2edafb6fab03f94762111',
    assessor: '0x1aba642c1aac9f8da36f7df73eda4ca73e054084',
    seniorTranche: '0x4c1bfb4e3ecbd6200358038e3f560ab6dee9bcb6',
    juniorTranche: null,
    seniorToken: null,
    juniorToken: null,
    networkId: 'mainnet',
    startBlock: 10002000,
    version: 2
  },
  // PC
  {
    shortName: 'Paperchain Pilot',
    id: '0x90abc0adb789111b4b865fdb3350b14a6e78794e',
    shelf: '0x3d0e477f328e48daa315aa503a6edf5b67f2d387',
    pile: '0xa6bf7d7779383f6e078d0969f5b85b391994fced',
    nftFeed: '0xe231faaea039766fcbb72cbb7d70ce18f0a28b8e',
    assessor: '0x41203b4c2b497334c01f9ce6f88ab42bd485199d',
    seniorTranche: '0xf49599f60bad647b9f82b7c5ef7736af13ff89ac',
    juniorTranche: null,
    seniorToken: null,
    juniorToken: null,
    networkId: 'mainnet',
    startBlock: 10103234,
    version: 2
  },
  // CF2
  {
    shortName: 'ConsolFreight 2',
    id: "0x0b985e7c5811c368528a0fc990455f4b448f7d77",
    shelf: '0x56ba49ea5f0930d80d14bf077d4bbee0b398bb06',
    pile: '0x27865916b3e6208b54eb7b3c481b3157e0ac1b0e',
    nftFeed: '0x7cdc05188b81e2cb11c6332b460233e654d8a3d4',
    assessor: '0x78bae79c9867bbe393c90cb13401ca1217a2fbee',
    seniorTranche: '0xae1845a50316fb6e571c569e78338c76d715a899',
    juniorTranche: null,
    seniorToken: null,
    juniorToken: null,
    networkId: 'mainnet',
    startBlock: 10304149,
    version: 2
  },
  // NS
  {
    shortName: 'New Silver 1',
    id: '0xeb33ab19d17d62950b16e843005fcdda62d5f551',
    shelf: '0x5fb8479d021e5881a4874fdf15e549355c57b885',
    pile: '0x1f1ea72b9a1edf799f27ea3a5d18262e92a845a6',
    nftFeed: '0x3fbcddee1f5efc545828560869353287ec901c04',
    assessor: '0xfee2b69eddd98397b6cbf816e805ad52bd4407c7',
    seniorTranche: '0x05791d754ef5788532287de5a730645f2bbcf78f',
    juniorTranche: null,
    seniorToken: null,
    juniorToken: null,
    networkId: 'mainnet',
    startBlock: 10498700,
    version: 2
  },
  // CF3
  {
    shortName: 'ConsolFreight 3',
    id: '0xe02d16927c7f73e48dd7aef4c86fa9aaedfe8abf',
    shelf: '0xadafacda038d05e9b20845c66a6955143e3e50a7',
    pile: '0xa1044556e2cd8e0d3c143fe0f02640727a5a380b',
    nftFeed: '0xf4846f411e8ab969ef869a5e30dc10a68cf5d2b0',
    assessor: '0x1f7adb00e86935a8ba83d8d51dc56d8cadf7b1da',
    seniorTranche: '0x6f038b9987baa1b0acc2b4b96c4050e204acdddd',
    juniorTranche: null,
    seniorToken: null,
    juniorToken: null,
    networkId: 'mainnet',
    startBlock: 10595436,
    version: 2
  },
  // HTC1
  {
    shortName: 'Harbor Trade 1',
    id: '0xa5caefbaa3902c3567ec2ba650a7ee4b19ea0d28',
    shelf: '0x406504500ac3efba725f14b6c7ac1e0047ecf520',
    pile: '0x9c623e8864c9fcd56a2b87826198687ec9d03665',
    nftFeed: '0x7b01145a8d736207ac46bdb831e7759264b05e6b',
    assessor: '0xaa298fd9206a4d66346124b6358fc4fc803398e5',
    seniorTranche: '0x473bd32f890855138ed085582d80099f11ad7767',
    juniorTranche: null,
    seniorToken: null,
    juniorToken: null,
    networkId: 'mainnet',
    startBlock: 10661341,
    version: 2
  },
  // PC2
  {
    shortName: 'Paperchain Series 2',
    id: '0x23e11b3f2cd3d73f68a4a3af436e2ed3459d0260',
    shelf: '0x3cf4deecad850a2b09fc2c8ea223943b57d1d4d2',
    pile: '0x3c3b4b2cc7dbc4409563e74a174ac3c4c4780dfb',
    nftFeed: '0x67ba167bebed75cbc7bd6b5e9f7cb7749f5a6a50',
    assessor: '0x6377737c28921fab9497e2a9f30fe8147a3bdfe4',
    seniorTranche: '0xf2c43699306dab17ec353886272bdfb4f443ad84',
    juniorTranche: null,
    seniorToken: null,
    juniorToken: null,
    networkId: 'mainnet',
    startBlock: 10783663,
    version: 2
  },
]

// lookup that contains the pool by associated address or poolId
export let poolMetaByIdentifier = new Map<string, PoolMeta>()
for (let i = 0; i < poolMetas.length; i++) {
  poolMetaByIdentifier.set(poolMetas[i].id, poolMetas[i])
  poolMetaByIdentifier.set(poolMetas[i].shelf, poolMetas[i])
  poolMetaByIdentifier.set(poolMetas[i].pile, poolMetas[i])
  poolMetaByIdentifier.set(poolMetas[i].nftFeed, poolMetas[i])
  poolMetaByIdentifier.set(poolMetas[i].assessor, poolMetas[i])
  poolMetaByIdentifier.set(poolMetas[i].seniorTranche, poolMetas[i])
  poolMetaByIdentifier.set(poolMetas[i].juniorTranche, poolMetas[i])
  poolMetaByIdentifier.set(poolMetas[i].seniorToken, poolMetas[i])
  poolMetaByIdentifier.set(poolMetas[i].juniorToken, poolMetas[i])
}

export let poolStartBlocks = new Map<number, boolean>()
for (let i = 0; i < poolMetas.length; i++) {
  poolStartBlocks.set(poolMetas[i].startBlock, true)
}
