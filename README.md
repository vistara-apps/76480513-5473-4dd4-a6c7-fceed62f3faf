# Propsperity - Fractional Real Estate on Base

A Next.js Base Mini App for fractional real estate NFT ownership, powered by Farcaster.

## Features

- 🏠 **Tokenized Property Investment**: Purchase fractionalized NFTs representing shares in high-value real estate
- 🗳️ **Co-ownership Governance**: Community-driven decision making for property management
- 🎯 **Farcaster-Native**: Seamless integration with Farcaster identity and social features
- ⚡ **Gasless Transactions**: Powered by Coinbase Paymaster for smooth UX
- 🔗 **Base Blockchain**: Built on Base L2 for fast, low-cost transactions

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (Ethereum L2)
- **Wallet**: OnchainKit + Coinbase Wallet
- **Social**: Farcaster MiniKit
- **Styling**: Tailwind CSS with BASE theme
- **TypeScript**: Full type safety

## Getting Started

1. **Install dependencies**:
```bash
npm install
```

2. **Set up environment variables**:
```bash
cp .env.local.example .env.local
# Add your OnchainKit API key
```

3. **Run development server**:
```bash
npm run dev
```

4. **Open in browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── PropertyGrid.tsx # Property listings
│   ├── PropertyCard.tsx # Individual property card
│   ├── StatsBar.tsx    # Statistics display
│   ├── WalletButton.tsx # Wallet connection
│   └── Providers.tsx   # Context providers
├── layout.tsx          # Root layout
├── page.tsx            # Home page
└── globals.css         # Global styles

public/
└── .well-known/
    └── farcaster.json  # Farcaster manifest
```

## Base Mini App Integration

This app follows official Base Mini Apps patterns:

- ✅ OnchainKitProvider for blockchain integration
- ✅ MiniKit for Farcaster context and actions
- ✅ Proper manifest configuration
- ✅ BASE theme with CSS variables
- ✅ Mobile-first responsive design

## Deployment

Deploy to Vercel or any Next.js-compatible platform:

```bash
npm run build
npm start
```

## Learn More

- [Base Documentation](https://docs.base.org)
- [OnchainKit Docs](https://onchainkit.xyz)
- [Farcaster MiniKit](https://miniapps.farcaster.xyz)
- [Next.js Documentation](https://nextjs.org/docs)

## License

MIT
