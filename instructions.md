# Bitcoin Knots

## Congratulations on Choosing Bitcoin Knots!

Thank you for choosing Bitcoin Knots to run your node! By using Knots, you’re supporting a version of Bitcoin that prioritizes efficiency, security, and flexibility. With Bitcoin Knots’ enhanced configuration options, you can fine-tune your node to help keep the network clean and resilient, actively reducing unnecessary load from spam or parasitic transactions.

Every node strengthens the Bitcoin network, and your decision to use Bitcoin Knots contributes directly to a more decentralized and spam-resistant ecosystem. Your node not only validates and secures transactions but also sets an example for a more sustainable, user-focused Bitcoin network.

Welcome to the community of Bitcoin Knots users, and thank you for helping Bitcoin grow stronger!

## Configuration

Bitcoin Knots provides additional configuration options that offer greater control over how your node handles specific types of transactions and data. These settings are unique to Bitcoin Knots and can be fine-tuned to suit your preferences or requirements. While these advanced options can improve your node's performance and security, they should be used with care. For most users, the default settings are recommended.

### Key Bitcoin Knots-Specific Settings

1. **Data Carrier Size**  
   This setting determines the maximum size (in bytes) of data that can be embedded in `OP_RETURN` outputs within transactions. `OP_RETURN` allows users to store arbitrary data on the blockchain, but larger data sizes can increase storage requirements and network load, contributing to spam. Users may with to disable Datacarrier in the config entirely if they want to set a strict non-spam mempool policy.

   - **Default Value**: 42 bytes  
   - **Why This Value?**: Set to 42 bytes by default in Bitcoin Knots to keep data payloads minimal, helping to prevent blockchain bloat. By reducing the maximum data size allowed, Bitcoin Knots aims to maintain efficient node performance and prevent excessive use of blockchain space, while still enabling basic data storage for essential applications.

2. **Reject Parasites**  
   This setting enables your node to filter out "parasitic" transactions i.e. those that consume resources but provide minimal value to the network. By rejecting these transactions, your node helps to keep the transaction pool clean, reducing unnecessary load and resource consumption.

   - **Default Value**: Enabled
   - **Why This Setting?**: Enabled by default in Bitcoin Knots to help minimize network congestion and reduce spammy, low-value transactions that can impact node performance. This setting ensures that your node focuses on processing valuable transactions, supporting a healthier and more efficient network.

3. **Reject Tokens**  
   Bitcoin Knots includes an option to reject token-based transactions that may be incompatible with certain Bitcoin node objectives. Token transactions can increase resource consumption on the network, so this setting offers users control over whether to interact with these types of transactions.

   - **Default Value**: Disabled 
   - **Why This Setting?**: Disabled by default to ensure compatibility with all Bitcoin-based applications, including those that may involve token-like systems. Users can enable this option (By enabling the option under config --> mempool --> Reject Tokens) if they prefer not to support token transactions, reducing potential network and resource strain caused by token-related activity.


## Initial Synchronization

When first starting Bitcoin Knots, your node will need to download and verify the entire blockchain, a process called "syncing." The duration of this sync can vary based on your Internet speed, system resources, and the number of peers connected to your node. Generally, syncing can take between 2-7 days to go from the genesis block to the current blockchain height. During this period, it’s best to keep your device on and connected to the internet.

> **Tip:** To reduce sync time ensure no other bandwidth-heavy applications are running concurrently, you may want to increase the dbcache config option but this may cause instability depending on your device's specs.

## Using a Wallet

Enter your QuickConnect QR code **OR** your raw RPC credentials (both located in `Properties`) into any wallet that supports connecting to a remote node over Tor. For a full list of compatible wallets, as well as guides for setup, please see the [documentation](https://docs.start9.com/latest/service-guides/bitcoin/bitcoin-integrations).

## Pruning

Beginning with version 25.0.0.1, pruning is now handled automatically depending on the available space. If there is insufficient free space, pruning will be automatically configured. Users also have the option to adjust pruning settings manually.

Pruning is a process by which your node discards old blocks and transactions after it verifies them. Pruned nodes and archival nodes are both "full nodes" in that they are fully validating—they validate every block and transaction. Archival nodes store the entire blockchain and are useful to people interested in doing general or historical analysis, or being a provider of blockchain data to others (e.g., a block explorer). They are also required for the best experience with many popular wallets and other Bitcoin tools.

If you choose to prune, the target on your server is configurable and set by default to a minimum of 550 MB (0.55 GB), meaning the resulting blockchain will occupy a negligible amount of storage space. The maximum amount of blockchain data you can retain depends on the storage capacity of your device. The config menu will not permit you to select a target that exceeds a certain percentage of your device's available capacity. For most use cases, we recommend sticking with a very low pruning setting.

### Unique Features and Benefits of Bitcoin Knots

1. **Optional Network Filters and Advanced Transaction Policy Control**  
   Bitcoin Knots enables more refined control over which transactions your node relays or accepts. By implementing advanced transaction policies, Knots gives users the flexibility to shape how their node interacts with the network, making it easier to avoid spam, dust, and potentially resource-draining transactions. This added layer of control can be particularly beneficial for those who want a node that operates with more curated network participation.

2. **Community and Open Development**  
   Unlike Bitcoin Core, Bitcoin Knots is a community-driven project with an open development process that encourages contributions from a wider variety of developers. This means that Knots often incorporates experimental features or optimizations faster than Core. Users who value an open-source, community-focused approach may appreciate that Knots includes unique features and enhancements based on community feedback and contributions.

3. **Focus on Network Integrity and Health**  
   Bitcoin Knots emphasizes network health by incorporating default settings that filter out spam-like transactions or inefficient transaction types. With Knots, users contribute to a network that prioritizes legitimate transaction activity, which strengthens the Bitcoin ecosystem by making it less vulnerable to bloat or resource-draining activity.

4. **Innovative Features Under Active Development**  
   Bitcoin Knots is frequently updated with experimental features that often take longer to be adopted (if at all) by Bitcoin Core. For example, Knots may test new privacy measures, network optimization techniques, or transaction policies that appeal to advanced users and node operators. By running Bitcoin Knots, users are often among the first to experience and benefit from Bitcoin innovations and optimizations.

5. **Dedicated to Reducing Blockchain Bloat**  
   Bitcoin Knots incorporates unique bloat-reduction techniques, such as stricter data carrier size limits and dust transaction filtering. These help to keep the blockchain leaner and more efficient, making it easier for new users to run nodes without large storage demands. This focus on bloat reduction aligns with Bitcoin Knots’ philosophy of a streamlined, effective, and sustainable network.

6. **Compatibility with Bitcoin Core**  
   Despite its unique features, Bitcoin Knots remains compatible with Bitcoin Core, meaning users can switch between the two without needing significant reconfiguration. This interoperability makes Knots a flexible option for those who want advanced features without sacrificing compatibility with the broader Bitcoin ecosystem.

---
