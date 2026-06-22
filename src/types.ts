export type Gender = 'male' | 'female' | 'other';

export interface UserInput {
  name: string;
  birthDate: string;
  birthTime: string;
  gender: Gender;
}

export interface FortuneResult {
  name: string;
  summary: string;
  dailyTaboos: { day: string; taboo: string }[];
  absoluteTaboo: string;
  finalWarning: string;
  avoidColor: string;
  avoidPlace: string;
  avoidTime: string;
}
