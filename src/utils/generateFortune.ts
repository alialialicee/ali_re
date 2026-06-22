import type { FortuneResult, UserInput } from '../types';
import { absoluteTaboos, avoidActions, avoidColors, avoidObjects, avoidPeople, avoidPlaces, avoidTimes, days, finalWarnings, summaries } from '../data/fortunes';

const hashString = (value: string) => {
  let hash = 2166136261;
  for (let i = 0; i < value.length; i += 1) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
};

const seededRandom = (seed: number) => () => {
  seed = Math.imul(seed + 0x6d2b79f5, 1);
  let t = seed;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

const pick = <T>(items: T[], random: () => number) => items[Math.floor(random() * items.length)];

export function generateFortune(input: UserInput): FortuneResult {
  const today = new Date().toISOString().slice(0, 10);
  const seed = hashString(`${input.name}|${input.birthDate}|${input.birthTime}|${input.gender}|${today}`);
  const random = seededRandom(seed);
  const color = pick(avoidColors, random);
  const place = pick(avoidPlaces, random);
  const time = pick(avoidTimes, random);

  const dailyTaboos = days.map((day, index) => {
    const target = index % 3 === 0 ? pick(avoidPeople, random) : index % 3 === 1 ? pick(avoidObjects, random) : pick(avoidPlaces, random);
    const action = pick(avoidActions, random);
    return { day, taboo: `${time}, ${target}을(를) 조심하세요. ${action}` };
  });

  return {
    name: input.name.trim(),
    summary: pick(summaries, random),
    dailyTaboos,
    absoluteTaboo: pick(absoluteTaboos, random),
    finalWarning: pick(finalWarnings, random),
    avoidColor: color,
    avoidPlace: place,
    avoidTime: time,
  };
}
