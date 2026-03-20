import type { ScoreStatus, AnswerOutcome } from "./types";
import type { SelectOption } from "@/shared/types/common";

export const SCORE_STYLE_MAP: Record<ScoreStatus, {
  wrapper: string;
  text: string;
  badge: string;
  label: string;
  stroke: string
}> = {
  excellent: {
    wrapper: "bg-success/5",
    text: "text-success",
    badge: "bg-success/15 text-success hover:bg-success/20",
    stroke: "stroke-success",
    label: "Excellent",
  },
  passed: {
    wrapper: "bg-primary/5",
    text: "text-primary",
    badge: "bg-primary/15 text-primary hover:bg-primary/20",
    stroke: "stroke-primary",
    label: "Passed",
  },
  failed: {
    wrapper: "bg-destructive/5",
    text: "text-destructive",
    badge: "bg-destructive/15 text-destructive hover:bg-destructive/20",
    stroke: "stroke-destructive",
    label: "Needs Improvement",
  },
} as const;

export const FILTER_OPTIONS: SelectOption<AnswerOutcome>[] = [
  { label: "Correct", value: "correct" },
  { label: "Incorrect", value: "incorrect" },
  { label: "Skipped", value: "skipped" }
] as const;