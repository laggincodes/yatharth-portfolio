import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, GitCommit, Code2, ExternalLink, RefreshCw } from 'lucide-react';
import { GithubIcon, LeetCodeIcon, CatPawIcon } from './Icons';
import { useDesktopPointer } from '../utils/useDesktopPointer';
import {
  fetchGitHubStats,
  fetchLeetCodeStats,
  type GitHubStats,
  type LeetCodeStats,
  type ContributionDay,
} from '../services/statsService';

const PINK_LEVEL_COLORS_DARK = [
  '#382632', // Level 0 (None) - warm plum surface subtle
  '#6B344F', // Level 1 (Low)
  '#96476F', // Level 2 (Moderate)
  '#BD718F', // Level 3 (High) - deep rose
  '#E8A0BA', // Level 4 (Highest) - primary warm pink
];

const PINK_LEVEL_COLORS_LIGHT = [
  '#EFD0DC', // Level 0 (None) - warm rose blush
  '#D98BA8', // Level 1 (Low) - muted rose
  '#C87998', // Level 2 (Moderate) - dusty pink
  '#B26182', // Level 3 (High) - deeper rose
  '#9E526F', // Level 4 (Highest) - deep rose
];

export const DeveloperDashboard: React.FC = () => {
  const isDesktop = useDesktopPointer();
  const [ghStats, setGhStats] = useState<GitHubStats | null>(null);
  const [lcStats, setLcStats] = useState<LeetCodeStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [hoveredDay, setHoveredDay] = useState<{
    date: string;
    count: number;
    x: number;
    y: number;
  } | null>(null);
  const [catPurring, setCatPurring] = useState(false);

  useEffect(() => {
    let isMounted = true;
    async function loadStats() {
      setLoading(true);
      try {
        const [gh, lc] = await Promise.all([
          fetchGitHubStats('laggincodes'),
          fetchLeetCodeStats('laggincodes'),
        ]);
        if (isMounted) {
          setGhStats(gh);
          setLcStats(lc);
        }
      } catch {
        // Fallbacks are safely handled in services
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadStats();
    return () => {
      isMounted = false;
    };
  }, []);

  // Compute weeks (columns) and month labels for the contribution calendar
  const calendarData = useMemo(() => {
    if (!ghStats?.contributions || ghStats.contributions.length === 0) {
      return { weeks: [], monthLabels: [] };
    }

    const days = ghStats.contributions;
    const weeks: (ContributionDay | null)[][] = [];
    let currentWeek: (ContributionDay | null)[] = [];

    // First day offset (0 = Sunday, 1 = Monday, etc.)
    const firstDayOfWeek = new Date(days[0].date).getDay();
    for (let i = 0; i < firstDayOfWeek; i++) {
      currentWeek.push(null);
    }

    days.forEach((day) => {
      currentWeek.push(day);
      if (currentWeek.length === 7) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
    });

    if (currentWeek.length > 0) {
      while (currentWeek.length < 7) {
        currentWeek.push(null);
      }
      weeks.push(currentWeek);
    }

    // Month labels: detect week columns where a new month starts
    const monthLabels: { weekIdx: number; name: string }[] = [];
    let lastMonth = -1;

    weeks.forEach((w, wIdx) => {
      // Find the first non-null day in this week
      const validDay = w.find((d) => d !== null);
      if (validDay) {
        const date = new Date(validDay.date);
        const m = date.getMonth();
        if (m !== lastMonth) {
          monthLabels.push({
            weekIdx: wIdx,
            name: date.toLocaleString('en-US', { month: 'short' }),
          });
          lastMonth = m;
        }
      }
    });

    return { weeks, monthLabels };
  }, [ghStats]);

  const handleCatClick = () => {
    setCatPurring(true);
    setTimeout(() => setCatPurring(false), 2400);
  };

  return (
    <section
      id="activity"
      className="relative w-full min-h-[100svh] bg-[#F3DCE5] dark:bg-[#211820] flex flex-col justify-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 lg:px-16 border-t border-[#E3B9CA] dark:border-[#543746] transition-colors duration-200"
      aria-label="Developer Activity Dashboard"
    >
      <div className="max-w-[1200px] w-full mx-auto space-y-10 sm:space-y-12 lg:space-y-14 my-auto">
        {/* Section Header with Subtle Feline Detail */}
        <div className="border-b border-[#E3B9CA] dark:border-[#543746] pb-6 sm:pb-8 transition-colors duration-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end justify-between">
            <div className="lg:col-span-7 space-y-3 sm:space-y-4">
              {/* Eyebrow */}
              <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#725965] dark:text-[#C6AFBB]">
                <span className="text-[#9E526F] dark:text-[#E8A0BA] font-semibold font-mono">02</span>
                <span className="text-[#E3B9CA] dark:text-[#543746]">/</span>
                <span className="font-semibold">ACTIVITY & PRACTICE</span>

                {/* Subtle Cat Badge Easter Egg (Desktop Only) */}
                {isDesktop && (
                  <button
                    type="button"
                    onClick={handleCatClick}
                    title="A purring companion keeping watch on the metrics"
                    className="hidden [@media(hover:hover)_and_(pointer:fine)]:lg:inline-flex ml-2 items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono lowercase tracking-normal text-[#9E526F] dark:text-[#E8A0BA] bg-[#D98BA8]/20 hover:bg-[#D98BA8]/30 transition-all cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#D98BA8]"
                  >
                    <CatPawIcon size={12} className="text-[#9E526F] dark:text-[#E8A0BA]" />
                    <span>{catPurring ? 'purr... stats verified' : 'stats kitten'}</span>
                  </button>
                )}
              </div>

              {/* Editorial Title */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#30212A] dark:text-[#F7EAF0] tracking-tight leading-tight">
                The work,{' '}
                <span className="font-display italic font-normal text-[#9E526F] dark:text-[#E8A0BA]">
                  in numbers.
                </span>
              </h2>
            </div>

            {/* Description */}
            <div className="lg:col-span-5 flex flex-col justify-end">
              <p className="text-sm sm:text-base text-[#725965] dark:text-[#C6AFBB] font-normal leading-relaxed">
                A live snapshot of my open-source activity and problem-solving practice. Real, attributable statistics pulled directly from GitHub and LeetCode.
              </p>
            </div>
          </div>
        </div>

        {/* 2-Column Responsive Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* ========================================================== */}
          {/* LEFT COLUMN: GitHub Activity Dashboard (7 cols)            */}
          {/* ========================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-[#F8E6ED] dark:bg-[#30212C] border border-[#E3B9CA] dark:border-[#543746] rounded-xl p-5 sm:p-7 flex flex-col justify-between space-y-6 shadow-[0_4px_20px_-2px_rgba(48,33,42,0.06)] dark:shadow-[0_4px_20px_-2px_rgba(33,24,32,0.4)] transition-colors duration-200"
          >
            {/* Top Bar: Identity & Quick Stats */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#E3B9CA]/70 dark:border-[#543746]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#EFD0DC] dark:bg-[#382632] flex items-center justify-center text-[#30212A] dark:text-[#F7EAF0] border border-[#E3B9CA] dark:border-[#543746]">
                    <GithubIcon size={20} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold font-mono text-[#30212A] dark:text-[#F7EAF0]">
                        @laggincodes
                      </span>
                      <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-[#D98BA8]/20 text-[#9E526F] dark:text-[#E8A0BA]">
                        GitHub
                      </span>
                    </div>
                    <span className="text-xs text-[#725965] dark:text-[#C6AFBB]">
                      Open-source repositories & builds
                    </span>
                  </div>
                </div>

                <a
                  href="https://github.com/laggincodes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-[#9E526F] dark:text-[#E8A0BA] hover:underline"
                >
                  <span>Profile</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>

              {/* Metric Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-lg bg-[#EFD0DC]/70 dark:bg-[#291D26] border border-[#E3B9CA]/70 dark:border-[#543746]">
                  <div className="text-xs font-mono text-[#725965] dark:text-[#C6AFBB] uppercase tracking-wider">
                    Past Year
                  </div>
                  <div className="text-xl sm:text-2xl font-bold font-mono text-[#30212A] dark:text-[#F7EAF0] mt-0.5">
                    {ghStats?.totalContributions ? `${ghStats.totalContributions}` : '577'}
                  </div>
                  <div className="text-[11px] text-[#9E526F] dark:text-[#E8A0BA] font-mono mt-0.5">
                    contributions
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-[#EFD0DC]/70 dark:bg-[#291D26] border border-[#E3B9CA]/70 dark:border-[#543746]">
                  <div className="text-xs font-mono text-[#725965] dark:text-[#C6AFBB] uppercase tracking-wider">
                    Repositories
                  </div>
                  <div className="text-xl sm:text-2xl font-bold font-mono text-[#30212A] dark:text-[#F7EAF0] mt-0.5">
                    {ghStats?.publicRepos ?? 7}
                  </div>
                  <div className="text-[11px] text-[#725965] dark:text-[#C6AFBB] font-mono mt-0.5">
                    public source
                  </div>
                </div>

                <div className="col-span-2 sm:col-span-1 p-3 rounded-lg bg-[#EFD0DC]/70 dark:bg-[#291D26] border border-[#E3B9CA]/70 dark:border-[#543746]">
                  <div className="text-xs font-mono text-[#725965] dark:text-[#C6AFBB] uppercase tracking-wider">
                    Status
                  </div>
                  <div className="flex items-center gap-1.5 mt-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-mono uppercase text-[#30212A] dark:text-[#F7EAF0] font-semibold">
                      Active
                    </span>
                  </div>
                  <div className="text-[11px] text-[#725965] dark:text-[#C6AFBB] font-mono mt-0.5">
                    daily cadence
                  </div>
                </div>
              </div>
            </div>

            {/* Pink Contribution Graph (Calendar) */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-[#725965] dark:text-[#C6AFBB]">
                <span className="flex items-center gap-1.5 uppercase tracking-wider">
                  <GitCommit size={13} className="text-[#9E526F] dark:text-[#E8A0BA]" />
                  Contribution Calendar (Past 365 Days)
                </span>
                <span className="hidden sm:inline text-[11px] text-[#9E526F] dark:text-[#E8A0BA]">
                  Palette: Soft Blush
                </span>
              </div>

              {/* Scrollable SVG Grid Container */}
              <div className="relative overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-[#E3B9CA] dark:scrollbar-thumb-[#543746]">
                {calendarData.weeks.length > 0 ? (
                  <svg
                    width="770"
                    height="130"
                    className="select-none block font-mono"
                    role="img"
                    aria-label="GitHub Contribution Graph"
                  >
                    {/* Month labels along top (y=12) */}
                    {calendarData.monthLabels.map((m) => (
                      <text
                        key={`${m.name}-${m.weekIdx}`}
                        x={28 + m.weekIdx * 14}
                        y={12}
                        className="fill-[#725965] dark:fill-[#C6AFBB] text-[10px]"
                      >
                        {m.name}
                      </text>
                    ))}

                    {/* Day labels on left */}
                    <text x={0} y={35} className="fill-[#725965] dark:fill-[#C6AFBB] text-[9px]">
                      Mon
                    </text>
                    <text x={0} y={63} className="fill-[#725965] dark:fill-[#C6AFBB] text-[9px]">
                      Wed
                    </text>
                    <text x={0} y={91} className="fill-[#725965] dark:fill-[#C6AFBB] text-[9px]">
                      Fri
                    </text>

                    {/* Week columns and day squares */}
                    {calendarData.weeks.map((week, wIdx) => {
                      const colX = 28 + wIdx * 14;
                      return week.map((day, dIdx) => {
                        if (!day) return null;
                        const cellY = 22 + dIdx * 14;
                        const isHovered = hoveredDay?.date === day.date;

                        return (
                          <rect
                            key={day.date}
                            x={colX}
                            y={cellY}
                            width={11}
                            height={11}
                            rx={2.5}
                            data-date={day.date}
                            data-count={day.count}
                            className="cursor-pointer transition-colors duration-150"
                            style={{
                              fill: document.documentElement.classList.contains('dark')
                                ? PINK_LEVEL_COLORS_DARK[day.level]
                                : PINK_LEVEL_COLORS_LIGHT[day.level],
                              stroke: isHovered ? '#D98BA8' : 'none',
                              strokeWidth: isHovered ? 1.5 : 0,
                            }}
                            onMouseEnter={(e) => {
                              const rect = e.currentTarget.getBoundingClientRect();
                              setHoveredDay({
                                date: day.date,
                                count: day.count,
                                x: rect.left + rect.width / 2,
                                y: rect.top,
                              });
                            }}
                            onMouseLeave={() => setHoveredDay(null)}
                          />
                        );
                      });
                    })}
                  </svg>
                ) : (
                  <div className="h-[120px] flex items-center justify-center text-xs font-mono text-[#725965] dark:text-[#C6AFBB]">
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <RefreshCw size={13} className="animate-spin text-[#9E526F] dark:text-[#E8A0BA]" />
                        Loading live contribution calendar...
                      </span>
                    ) : (
                      <span>Real activity calendar synced from @laggincodes</span>
                    )}
                  </div>
                )}

                {/* Floating Tooltip */}
                {hoveredDay && (
                  <div className="absolute top-0 right-0 z-20 pointer-events-none bg-[#30212A] dark:bg-[#211820] text-[#FBEAF0] dark:text-[#F7EAF0] border border-[#D98BA8]/50 dark:border-[#E8A0BA]/50 px-2.5 py-1 rounded text-[11px] font-mono shadow-lg">
                    <span className="font-semibold text-[#D98BA8] dark:text-[#E8A0BA]">{hoveredDay.count}</span>{' '}
                    {hoveredDay.count === 1 ? 'contribution' : 'contributions'} on {hoveredDay.date}
                  </div>
                )}
              </div>

              {/* Legend & Explorer Button */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs font-mono text-[#725965] dark:text-[#C6AFBB]">
                <div className="flex items-center gap-1.5">
                  <span className="text-[11px]">Less</span>
                  <div className="flex items-center gap-1">
                    {[0, 1, 2, 3, 4].map((lvl) => (
                      <span
                        key={lvl}
                        className="w-2.5 h-2.5 rounded-[2px]"
                        style={{
                          backgroundColor: document.documentElement.classList.contains('dark')
                            ? PINK_LEVEL_COLORS_DARK[lvl]
                            : PINK_LEVEL_COLORS_LIGHT[lvl],
                        }}
                      />
                    ))}
                  </div>
                  <span className="text-[11px]">More</span>
                </div>

                <a
                  href="https://github.com/laggincodes?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-mono uppercase tracking-wider text-[#9E526F] dark:text-[#E8A0BA] hover:underline"
                >
                  <span>Explore Repositories</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* ========================================================== */}
          {/* RIGHT COLUMN: LeetCode Practice Dashboard (5 cols)         */}
          {/* ========================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 bg-[#F8E6ED] dark:bg-[#30212C] border border-[#E3B9CA] dark:border-[#543746] rounded-xl p-5 sm:p-7 flex flex-col justify-between space-y-6 shadow-[0_4px_20px_-2px_rgba(48,33,42,0.06)] dark:shadow-[0_4px_20px_-2px_rgba(33,24,32,0.4)] transition-colors duration-200"
          >
            {/* Header: LeetCode Brand Identity */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#E3B9CA]/70 dark:border-[#543746]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#FFA116]/15 flex items-center justify-center text-[#FFA116] border border-[#FFA116]/30">
                    <LeetCodeIcon size={22} className="text-[#FFA116]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold font-mono text-[#30212A] dark:text-[#F7EAF0]">
                        @laggincodes
                      </span>
                      <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-[#FFA116]/15 text-[#B8732A] dark:text-[#FFA116]">
                        LeetCode
                      </span>
                    </div>
                    <span className="text-xs text-[#725965] dark:text-[#C6AFBB]">
                      Algorithms & Data Structures
                    </span>
                  </div>
                </div>

                <a
                  href="https://leetcode.com/u/laggincodes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-[#9E526F] dark:text-[#E8A0BA] hover:underline"
                >
                  <span>Profile</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>

              {/* Total Solved Hero Metric */}
              <div className="p-4 rounded-lg bg-[#EFD0DC]/70 dark:bg-[#291D26] border border-[#E3B9CA]/70 dark:border-[#543746] flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-[#725965] dark:text-[#C6AFBB]">
                    Problems Solved
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold font-mono text-[#30212A] dark:text-[#F7EAF0] mt-1">
                    {lcStats?.totalSolved ?? 147}
                    <span className="text-sm font-normal text-[#725965] dark:text-[#C6AFBB] ml-1.5">
                      / {lcStats?.totalQuestions ?? 4096}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#725965] dark:text-[#C6AFBB]">
                    Acceptance Rate
                  </div>
                  <div className="text-xl sm:text-2xl font-bold font-mono text-[#9E526F] dark:text-[#E8A0BA] mt-1">
                    {lcStats?.acceptanceRate ?? 81.0}%
                  </div>
                </div>
              </div>

              {/* Difficulty Breakdown Bars */}
              <div className="space-y-3 pt-1">
                {/* Easy */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-[#2B855D] dark:text-[#78CCA6] font-semibold">Easy</span>
                    <span className="text-[#30212A] dark:text-[#F7EAF0]">
                      <span className="font-semibold">{lcStats?.easySolved ?? 99}</span>
                      <span className="text-[#725965] dark:text-[#C6AFBB] text-[11px]"> / {lcStats?.totalEasy ?? 974}</span>
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#E3B9CA] dark:bg-[#382632] overflow-hidden">
                    <div
                      className="h-full bg-[#2B855D] dark:bg-[#78CCA6] rounded-full transition-all duration-700"
                      style={{
                        width: `${Math.min(
                          100,
                          ((lcStats?.easySolved ?? 99) / (lcStats?.totalEasy ?? 974)) * 100 * 3.5
                        )}%`,
                      }}
                    />
                  </div>
                </div>

                {/* Medium */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-[#B8732A] dark:text-[#FFA116] font-semibold">Medium</span>
                    <span className="text-[#30212A] dark:text-[#F7EAF0]">
                      <span className="font-semibold">{lcStats?.mediumSolved ?? 43}</span>
                      <span className="text-[#725965] dark:text-[#C6AFBB] text-[11px]"> / {lcStats?.totalMedium ?? 2136}</span>
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#E3B9CA] dark:bg-[#382632] overflow-hidden">
                    <div
                      className="h-full bg-[#FFA116] rounded-full transition-all duration-700"
                      style={{
                        width: `${Math.min(
                          100,
                          ((lcStats?.mediumSolved ?? 43) / (lcStats?.totalMedium ?? 2136)) * 100 * 5.5
                        )}%`,
                      }}
                    />
                  </div>
                </div>

                {/* Hard */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-[#C75877] dark:text-[#F293A6] font-semibold">Hard</span>
                    <span className="text-[#30212A] dark:text-[#F7EAF0]">
                      <span className="font-semibold">{lcStats?.hardSolved ?? 5}</span>
                      <span className="text-[#725965] dark:text-[#C6AFBB] text-[11px]"> / {lcStats?.totalHard ?? 986}</span>
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#E3B9CA] dark:bg-[#382632] overflow-hidden">
                    <div
                      className="h-full bg-[#C75877] dark:bg-[#F293A6] rounded-full transition-all duration-700"
                      style={{
                        width: `${Math.min(
                          100,
                          ((lcStats?.hardSolved ?? 5) / (lcStats?.totalHard ?? 986)) * 100 * 15
                        )}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Supplementary Details & LeetCode CTA */}
            <div className="pt-2 border-t border-[#E3B9CA]/70 dark:border-[#543746] space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-[#725965] dark:text-[#C6AFBB]">
                <span>Global Ranking</span>
                <span className="text-[#30212A] dark:text-[#F7EAF0] font-semibold">
                  #{Number(lcStats?.ranking ?? 1227999).toLocaleString()}
                </span>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-[#725965] dark:text-[#C6AFBB]">
                <span>Primary Language</span>
                <span className="text-[#30212A] dark:text-[#F7EAF0] font-semibold flex items-center gap-1">
                  <Code2 size={12} className="text-[#9E526F] dark:text-[#E8A0BA]" />
                  C++ / Algorithms
                </span>
              </div>

              <a
                href="https://leetcode.com/u/laggincodes/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[42px] mt-2 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider font-semibold text-[#30212A] dark:text-[#F7EAF0] bg-[#EFD0DC] dark:bg-[#382632] hover:bg-[#D98BA8]/25 dark:hover:bg-[#E8A0BA]/25 border border-[#E3B9CA] dark:border-[#543746] transition-all cursor-pointer"
              >
                <span>View LeetCode Submissions</span>
                <ArrowUpRight size={14} className="text-[#9E526F] dark:text-[#E8A0BA]" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
