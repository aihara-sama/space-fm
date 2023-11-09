interface ICard {
  image: string;
  price: string;
  amount: number;
  timeLeft: string;
  avatars: string[];
  title: string;
}

export const cards: ICard[] = [
  {
    image: "/images/svg/nfts/nft1.svg",
    avatars: [
      "/images/svg/nfts/avatars/avatar1.svg",
      "/images/svg/nfts/avatars/avatar2.svg",
      "/images/svg/nfts/avatars/avatar3.svg",
      "/images/svg/nfts/avatars/avatar4.svg",
    ],
    price: "0.25 ETH",
    amount: 1,
    timeLeft: "3h 50m 2s left",
    title: "ArtCrypto",
  },
  {
    image: "/images/svg/nfts/nft2.svg",
    avatars: [
      "/images/svg/nfts/avatars/avatar1.svg",
      "/images/svg/nfts/avatars/avatar2.svg",
      "/images/svg/nfts/avatars/avatar3.svg",
      "/images/svg/nfts/avatars/avatar4.svg",
    ],
    price: "0.25 ETH",
    amount: 1,
    timeLeft: "3h 50m 2s left",
    title: "This NFT",
  },
  {
    image: "/images/svg/nfts/nft3.svg",
    avatars: [
      "/images/svg/nfts/avatars/avatar1.svg",
      "/images/svg/nfts/avatars/avatar2.svg",
      "/images/svg/nfts/avatars/avatar3.svg",
      "/images/svg/nfts/avatars/avatar4.svg",
    ],
    price: "0.25 ETH",
    amount: 1,
    timeLeft: "3h 50m 2s left",
    title: "NameCrypto",
  },
  {
    image: "/images/svg/nfts/nft4.svg",
    avatars: [
      "/images/svg/nfts/avatars/avatar1.svg",
      "/images/svg/nfts/avatars/avatar2.svg",
      "/images/svg/nfts/avatars/avatar3.svg",
      "/images/svg/nfts/avatars/avatar4.svg",
    ],
    price: "0.25 ETH",
    amount: 1,
    timeLeft: "3h 50m 2s left",
    title: "KingCrypto",
  },
];
