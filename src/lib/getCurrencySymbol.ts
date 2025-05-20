// lib/getCurrencySymbol.ts
export const getCurrencySymbol = (currencyCode: string): string => {
  const currencySymbols: Record<string, string> = {
    INR: "₹",
    USD: "$",
    EUR: "€",
    GBP: "£",
    JPY: "¥",
    CAD: "C$",
  };

  return currencySymbols[currencyCode] || currencyCode;
};
