import { cn } from "@/shared/lib/utils";
import { formatAnswers } from "../utils/answer-utils";
import type { AnswerResultView } from "@/shared/types/answer";
import type { AnswerOutcome } from "../types";
import { ANSWER_STYLES_MAP } from "../constants";

interface QuestionAnswerBlockProps {
  answer: AnswerResultView
  answerOutcome: AnswerOutcome
}

export function QuestionAnswerBlock({ answer, answerOutcome }: QuestionAnswerBlockProps) {
  const { userText, correctText } = formatAnswers(answer, answerOutcome === "skipped");

  return (
    <div className="flex w-full gap-4 flex-col sm:flex-row">
      <AnswerDisplay
        isUserAnswer
        answer={userText}
        answerOutcome={answerOutcome}
      />
      <AnswerDisplay
        answer={correctText}
      />
    </div>
  );
}

export function AnswerDisplay({
  answer,
  answerOutcome = "correct", 
  isUserAnswer = false
}: { 
  answer: string
  answerOutcome?: AnswerOutcome
  isUserAnswer?: boolean
}) {
  const label = isUserAnswer ? "Your Answer" : "Correct Answer";
  const visualState = isUserAnswer ? answerOutcome : "correct";

  return (
    <div className="flex-1 flex flex-col gap-1.5">
      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      <div
        className={cn(
          "rounded-lg border px-4 py-3 text-sm",
          ANSWER_STYLES_MAP[visualState]
        )}
      >
        {answer}
      </div>
    </div>
  )
}