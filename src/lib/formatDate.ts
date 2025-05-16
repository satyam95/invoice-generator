import { format } from "date-fns";

export const formatDate = (date: Date | null, dateFormat: string): string => {
  if (!date) return "DD/MM/YYYY";
  try {
    switch (dateFormat) {
      case "MM/DD/YYYY":
        return format(date, "MM/dd/yyyy");
      case "DD/MM/YYYY":
        return format(date, "dd/MM/yyyy");
      case "YYYY-MM-DD":
        return format(date, "yyyy-MM-dd");
      default:
        return format(date, "PPP");
    }
  } catch (error) {
    console.error("Error formatting date:", error);
    return "DD/MM/YYYY";
  }
};
