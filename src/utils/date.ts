import { format } from "date-fns";

export function getFormattedDate(date: Date): string {
  return format(date, "dd.MM.yyyy HH:mm");
}
