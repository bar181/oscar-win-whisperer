export interface VoteBreakdown {
  first: number;
  second: number;
  third: number;
  fourth: number;
  fifth: number;
}

export interface VoterSegment {
  name: string;
  weight: string;
  score: number;
  votes: VoteBreakdown;
}

export interface Movie {
  rank: number;
  title: string;
  director: string;
  overallScore: number;
  imageUrl?: string;
  segments: VoterSegment[];
}