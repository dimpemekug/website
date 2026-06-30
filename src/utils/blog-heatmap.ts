import type { CollectionEntry } from "astro:content";
import { getEntryPath } from "./contentEntry";

export interface HeatmapPostRef {
  title: string;
  href: string;
}

export interface HeatmapDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
  isFuture?: boolean;
  posts: HeatmapPostRef[];
}

export interface LatestPost {
  title: string;
  href: string;
  date: Date;
}

export interface HeatmapWindow {
  days: HeatmapDay[];
  weeks: number;
  totalPosts: number;
  activeDays: number;
  currentStreak: number;
  latestPosts: LatestPost[];
}

type BlogPost = CollectionEntry<"blog"> | CollectionEntry<"blogEn">;

const DAYS_IN_WEEK = 7;

export function getDateKey(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function getLevel(count: number): 0 | 1 | 2 | 3 | 4 {
  if (count === 0) return 0;
  if (count === 1) return 1;
  if (count === 2) return 2;
  if (count === 3) return 3;
  return 4;
}

function getStartOfWeek(date: Date) {
  const start = new Date(date);
  const dayOffset = (start.getDay() + 6) % 7;
  start.setHours(0, 0, 0, 0);
  start.setDate(start.getDate() - dayOffset);
  return start;
}

export function createRecentBlogHeatmap(
  posts: BlogPost[],
  weeks = 20,
  latestCount = 1
): HeatmapWindow {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const start = getStartOfWeek(today);
  start.setDate(start.getDate() - (weeks - 1) * DAYS_IN_WEEK);

  const postsByDate = new Map<string, HeatmapPostRef[]>();
  for (const post of posts) {
    const key = getDateKey(post.data.pubDatetime);
    const ref = { title: post.data.title, href: getEntryPath(post) };
    const existing = postsByDate.get(key);
    if (existing) {
      existing.push(ref);
    } else {
      postsByDate.set(key, [ref]);
    }
  }

  const days: HeatmapDay[] = [];
  for (let index = 0; index < weeks * DAYS_IN_WEEK; index += 1) {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    const key = getDateKey(date);
    const isFuture = date > today;
    const dayPosts = isFuture ? [] : postsByDate.get(key) ?? [];

    days.push({
      date: key,
      count: dayPosts.length,
      level: getLevel(dayPosts.length),
      isFuture,
      posts: dayPosts,
    });
  }

  let currentStreak = 0;
  for (const day of [...days].reverse()) {
    if (day.isFuture) continue;
    if (day.count === 0) break;
    currentStreak += 1;
  }

  const latestPosts = [...posts]
    .sort((a, b) => b.data.pubDatetime.getTime() - a.data.pubDatetime.getTime())
    .slice(0, Math.max(1, latestCount))
    .map(post => ({
      title: post.data.title,
      href: getEntryPath(post),
      date: post.data.pubDatetime,
    }));

  return {
    days,
    weeks,
    totalPosts: posts.length,
    activeDays: days.filter(day => day.count > 0).length,
    currentStreak,
    latestPosts,
  };
}
