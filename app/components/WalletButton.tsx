'use client';

import { Wallet } from 'lucide-react';

export function WalletButton() {
  const handleConnect = () => {
    // OnchainKit wallet connection will be triggered here
    console.log('Connect wallet clicked');
  };

  return (
    <button
      onClick={handleConnect}
      className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-accent transition-colors font-medium"
    >
      <Wallet className="w-4 h-4" />
      <span>Connect Wallet</span>
    </button>
  );
}
