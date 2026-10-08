import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric"
  }).format(date);
}

export function readingTime(html: string) {
  const textOnly = html.replace(/<[^>]+>/g, "");
  const wordCount = textOnly.split(/\s+/).length;
  const readingTimeMinutes = ((wordCount / 200) + 1).toFixed();
  return `${readingTimeMinutes} min read`;
}

type WorkLike = {
  data: {
    company: string;
    dateStart: Date;
    dateEnd: Date | string;
  };
};

/**
 * Collapses consecutive roles at the same company into one group, so a
 * promotion shows up as a second role under a single company heading.
 * Expects entries already sorted newest first.
 */
export function groupWorkByCompany<T extends WorkLike>(entries: T[]) {
  const groups: { company: string; roles: T[] }[] = [];

  for (const entry of entries) {
    const current = groups.at(-1);
    if (current && current.company === entry.data.company) {
      current.roles.push(entry);
    } else {
      groups.push({ company: entry.data.company, roles: [entry] });
    }
  }

  return groups.map(group => ({
    company: group.company,
    dateStart: group.roles[group.roles.length - 1].data.dateStart,
    dateEnd: group.roles[0].data.dateEnd,
    roles: group.roles,
  }));
}

export function dateRange(startDate: Date, endDate?: Date | string): string {
  const startMonth = startDate.toLocaleString("default", { month: "short" });
  const startYear = startDate.getFullYear().toString();
  let endMonth;
  let endYear;

  if (endDate) {
    if (typeof endDate === "string") {
      endMonth = "";
      endYear = endDate;
    } else {
      endMonth = endDate.toLocaleString("default", { month: "short" });
      endYear = endDate.getFullYear().toString();
    }
  }

  return `${startMonth}${startYear} - ${endMonth}${endYear}`;
}