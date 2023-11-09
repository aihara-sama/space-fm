interface IPrices {
  monthly: string;
  annual: string;
}

export interface IPlan {
  type: "Begginer" | "Starter" | "Space Pro";
  prices: IPrices;
  features: string[];
}

export const plans: IPlan[] = [
  {
    type: "Begginer",
    prices: { monthly: "0.0", annual: "0.0" },
    features: ["Some Feature"],
  },
  {
    type: "Starter",
    prices: { monthly: "29", annual: "348" },
    features: ["Some Feature"],
  },
  {
    type: "Space Pro",
    prices: { monthly: "39", annual: "468" },
    features: ["Some Feature"],
  },
];
