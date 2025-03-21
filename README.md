# deLender - A Peer-to-Peer Lending Platform on ICP Blockchain

deLender is a decentralized peer-to-peer (P2P) lending platform built on the Internet Computer (ICP) blockchain, allowing users to lend and borrow funds without intermediaries. It leverages smart contracts (canisters) to facilitate secure, transparent, and trustless transactions between lenders and borrowers.

## `Features`

- **Decentralized and Trustless**
- **Smart Contract Automation via Canisters**
- **Collateralized & Non-Collateralized Loans**
- **Stable Interest Rates & Risk Mitigation**
- **User Reputation & Rating System**
- **Transparent Transactions**

## `Use Cases`

- **Microloans & SME Financing for small businesses**
- **Crypto-backed Loans without selling assets**
- **Decentralized Credit Markets based on on-chain reputation & identity**

## `Why ICP`

- **Scalability**
- **Security**
- **Low Cost**

## `Setup Local Environment`

To get started, you might want to explore the project directory structure and the default configuration file. Working with this project in your development environment will not affect any production deployment or identity tokens.

To learn more before you start working with `deLender`, see the following documentation available online:

- [Quick Start](https://internetcomputer.org/docs/current/developer-docs/setup/deploy-locally)
- [SDK Developer Tools](https://internetcomputer.org/docs/current/developer-docs/setup/install)
- [Motoko Programming Language Guide](https://internetcomputer.org/docs/current/motoko/main/motoko)
- [Motoko Language Quick Reference](https://internetcomputer.org/docs/current/motoko/main/language-manual)

If you want to start working on your project right away, you might want to try the following commands:

```bash
cd deLender/
dfx help
dfx canister --help
```

## Running the project locally

If you want to test your project locally, you can use the following commands:

```bash
# Starts the replica, running in the background
dfx start --background

# Deploys your canisters to the replica and generates your candid interface
dfx deploy
```

Once the job completes, your application will be available at `http://localhost:4943?canisterId={asset_canister_id}`.

If you have made changes to your backend canister, you can generate a new candid interface with

```bash
npm run generate
```

at any time. This is recommended before starting the frontend development server, and will be run automatically any time you run `dfx deploy`.

If you are making frontend changes, you can start a development server with

```bash
npm start
```

Which will start a server at `http://localhost:8080`, proxying API requests to the replica at port 4943.

### Note on frontend environment variables

If you are hosting frontend code somewhere without using DFX, you may need to make one of the following adjustments to ensure your project does not fetch the root key in production:

- set`DFX_NETWORK` to `ic` if you are using Webpack
- use your own preferred method to replace `process.env.DFX_NETWORK` in the autogenerated declarations
  - Setting `canisters -> {asset_canister_id} -> declarations -> env_override to a string` in `dfx.json` will replace `process.env.DFX_NETWORK` with the string in the autogenerated declarations
- Write your own `createActor` constructor
