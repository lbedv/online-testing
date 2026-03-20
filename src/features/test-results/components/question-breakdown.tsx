import { Badge } from "@/components/ui/badge"
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { QuestionAnswerBlock } from "./question-answer-block"
import { cn } from "@/shared/lib/utils"
import { QUESTION_TYPE_LABELS, ANSWER_ICON_MAP } from "../constants"
import type { QuestionResult } from "../types"

interface QuestionBreakdownProps {
  question: QuestionResult
  value: string
}

export function QuestionBreakdown({ question: q, value }: QuestionBreakdownProps) {
  const outcome = q.answerOutcome
  const { label, icon: StatusIcon, color } = ANSWER_ICON_MAP[outcome]

  return (
    <AccordionItem value={value} className="border-b">
      <AccordionTrigger
        className="hover:bg-muted/50 hover:no-underline px-6 py-4 transition-colors"
        aria-label={`Question ${q.questionNumber}: ${label}`}
      >
        <div className="flex flex-1 items-center gap-3 text-left mr-4">
          <StatusIcon className={cn("h-5 w-5 shrink-0", color)} />

          <div className="flex flex-1 flex-col gap-0.5 min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-foreground">
                Q{q.questionNumber}
              </span>
              <Badge variant="outline" className="hidden text-[10px] px-1.5 py-0 h-4 sm:inline-flex">
                {QUESTION_TYPE_LABELS[q.answer.questionType]}
              </Badge>
            </div>
            <span className="truncate text-sm text-muted-foreground">
              {q.questionText}
            </span>
          </div>

          <div className="hidden shrink-0 sm:flex items-center gap-1.5">
            <span className={cn("text-sm font-semibold", color)}>
              {q.pointsEarned}/{q.pointsPossible}
            </span>
            <span className="text-xs text-muted-foreground">pts</span>
          </div>
        </div>
      </AccordionTrigger>

      <AccordionContent className="bg-muted/30 px-6 py-4 border-t">
        <div className="flex flex-col gap-4 md:flex-row md:gap-8">
          <QuestionAnswerBlock
            answer={q.answer}
            answerOutcome={outcome} 
          />
          <div className="flex items-center gap-1.5 sm:hidden">
            <span className="text-xs text-muted-foreground">Points:</span>
            <span className={cn("text-sm font-semibold", color)}>
              {q.pointsEarned}/{q.pointsPossible}
            </span>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  )
}