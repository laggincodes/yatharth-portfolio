export interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export interface GitHubStats {
  username: string;
  avatarUrl: string;
  profileUrl: string;
  publicRepos: number;
  followers: number;
  totalContributions: number;
  contributions: ContributionDay[];
  isLoading: boolean;
  error?: string;
}

export interface LeetCodeStats {
  username: string;
  profileUrl: string;
  ranking: number;
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
  acceptanceRate: number;
  reputation: number;
  contributionPoints: number;
  isLoading: boolean;
  error?: string;
}

const CACHE_KEY_GH = 'portfolio_stats_github_v1';
const CACHE_KEY_LC = 'portfolio_stats_leetcode_v1';
const CACHE_TTL_MS = 30 * 60 * 1000; // 30 minutes cache

interface CacheEnvelope<T> {
  timestamp: number;
  data: T;
}

function getFromCache<T>(key: string): T | null {
  try {
    const raw = sessionStorage.getItem(key);
    if (!raw) return null;
    const envelope: CacheEnvelope<T> = JSON.parse(raw);
    if (Date.now() - envelope.timestamp < CACHE_TTL_MS) {
      return envelope.data;
    }
  } catch {
    // sessionStorage not available or parsing failed
  }
  return null;
}

function saveToCache<T>(key: string, data: T): void {
  try {
    const envelope: CacheEnvelope<T> = {
      timestamp: Date.now(),
      data,
    };
    sessionStorage.setItem(key, JSON.stringify(envelope));
  } catch {
    // storage quota or disabled
  }
}

export async function fetchGitHubStats(username = 'laggincodes'): Promise<GitHubStats> {
  const cached = getFromCache<GitHubStats>(CACHE_KEY_GH);
  if (cached) {
    return { ...cached, isLoading: false };
  }

  const profileUrl = `https://github.com/${username}`;
  let publicRepos = 7;
  let followers = 1;
  let avatarUrl = `https://github.com/${username}.png`;
  let totalContributions = 0;
  let contributions: ContributionDay[] = [];

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 6000);

  try {
    // 1. Fetch GitHub profile
    const profileRes = await fetch(`https://api.github.com/users/${username}`, {
      headers: { Accept: 'application/vnd.github.v3+json' },
      signal: controller.signal,
    });
    if (profileRes.ok) {
      const p = await profileRes.json();
      publicRepos = typeof p.public_repos === 'number' ? p.public_repos : publicRepos;
      followers = typeof p.followers === 'number' ? p.followers : followers;
      if (p.avatar_url) avatarUrl = p.avatar_url;
    }
  } catch {
    // Graceful fallback to default repo count
  }

  try {
    // 2. Fetch real contributions calendar data
    const contribRes = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
      { signal: controller.signal }
    );
    if (contribRes.ok) {
      const c = await contribRes.json();
      totalContributions = c.total?.lastYear ?? 0;
      if (Array.isArray(c.contributions)) {
        contributions = c.contributions.map((item: { date: string; count: number; level: number }) => ({
          date: item.date,
          count: item.count || 0,
          level: Math.min(Math.max(item.level ?? 0, 0), 4) as 0 | 1 | 2 | 3 | 4,
        }));
      }
    }
  } catch {
    // Contributions API failed or timed out
  } finally {
    clearTimeout(timeoutId);
  }

  const result: GitHubStats = {
    username,
    avatarUrl,
    profileUrl,
    publicRepos,
    followers,
    totalContributions,
    contributions,
    isLoading: false,
    error: contributions.length === 0 ? 'Live contribution calendar temporarily unavailable' : undefined,
  };

  if (contributions.length > 0 || publicRepos > 0) {
    saveToCache(CACHE_KEY_GH, result);
  }

  return result;
}

export async function fetchLeetCodeStats(username = 'laggincodes'): Promise<LeetCodeStats> {
  const cached = getFromCache<LeetCodeStats>(CACHE_KEY_LC);
  if (cached) {
    return { ...cached, isLoading: false };
  }

  const profileUrl = `https://leetcode.com/u/${username}/`;
  const defaultStats: LeetCodeStats = {
    username,
    profileUrl,
    ranking: 1227999,
    totalSolved: 147,
    totalQuestions: 4096,
    easySolved: 99,
    totalEasy: 974,
    mediumSolved: 43,
    totalMedium: 2136,
    hardSolved: 5,
    totalHard: 986,
    acceptanceRate: 81.0,
    reputation: 0,
    contributionPoints: 342,
    isLoading: false,
  };

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 6000);

  try {
    // Primary API endpoint
    const res = await fetch(`https://leetcode-api-faisalshohag.vercel.app/${username}`, {
      signal: controller.signal,
    });
    if (res.ok) {
      const data = await res.json();
      if (data && typeof data.totalSolved === 'number') {
        const totalSubmissions = data.totalSubmissions?.[0]?.submissions ?? 211;
        const totalAcSubmissions = data.matchedUserStats?.acSubmissionNum?.[0]?.submissions ?? 171;
        const rate = totalSubmissions > 0
          ? Math.round((totalAcSubmissions / totalSubmissions) * 1000) / 10
          : 81.0;

        const result: LeetCodeStats = {
          username,
          profileUrl,
          ranking: data.ranking ?? defaultStats.ranking,
          totalSolved: data.totalSolved,
          totalQuestions: data.totalQuestions ?? 4096,
          easySolved: data.easySolved ?? defaultStats.easySolved,
          totalEasy: data.totalEasy ?? defaultStats.totalEasy,
          mediumSolved: data.mediumSolved ?? defaultStats.mediumSolved,
          totalMedium: data.totalMedium ?? defaultStats.totalMedium,
          hardSolved: data.hardSolved ?? defaultStats.hardSolved,
          totalHard: data.totalHard ?? defaultStats.totalHard,
          acceptanceRate: rate,
          reputation: data.reputation ?? 0,
          contributionPoints: data.contributionPoint ?? defaultStats.contributionPoints,
          isLoading: false,
        };

        saveToCache(CACHE_KEY_LC, result);
        return result;
      }
    }
  } catch {
    // Endpoint unavailable or timed out
  } finally {
    clearTimeout(timeoutId);
  }

  // If live fetch failed but fallback values are honest snapshot
  return defaultStats;
}
