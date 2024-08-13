import { ethers } from 'ethers';

class EthersUtils {
  private static provider: ethers.providers.Web3Provider | null = null;

  static getProvider(): ethers.providers.Web3Provider | null {
    if (typeof window !== 'undefined' && 'ethereum' in window) {
      if (!this.provider) {
        this.provider = new ethers.providers.Web3Provider(window.ethereum as ethers.providers.ExternalProvider);
      }
      return this.provider;
    }
    return null;
  }

  static async requestAccount(): Promise<string | null> {
    const provider = this.getProvider();
    if (provider) {
      await provider.send('eth_requestAccounts', []);
      const signer = provider.getSigner();
      return await signer.getAddress();
    }
    return null;
  }

  static async getSigner(): Promise<ethers.providers.JsonRpcSigner> {
    const provider = this.getProvider();
    if (!provider) throw new Error('No Ethereum provider found');
    await provider.send("eth_requestAccounts", []);
    return provider.getSigner();
  }

  static async getContract(address: string, abi: ethers.ContractInterface): Promise<ethers.Contract> {
    const signer = await this.getSigner();
    return new ethers.Contract(address, abi, signer);
  }
}

export default EthersUtils;