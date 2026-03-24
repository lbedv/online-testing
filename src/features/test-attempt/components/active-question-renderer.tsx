import { Card, CardContent, CardHeader } from "@/components/ui/card"
import type { QuestionType, AnswerMap, AnswerSubmitView } from "@/shared/types/answer"
import { TrueFalseInput, MultipleChoiceInput, NumericInput, TextInput } from "./question-inputs";
import type { QuestionClientView } from "../types"
import { QUESTION_TYPE_LABELS } from '@/shared/types/answer';

function getTypedAnswer<T extends QuestionType>(
  rawValue: AnswerSubmitView["userAnswer"]
): AnswerMap[T] | undefined {
  return rawValue as AnswerMap[T] | undefined;
}

interface ActiveQuestionRendererProps {
  currentQuestion: QuestionClientView
  currentIndex: number
  questionsCount: number
  currentAnswer: AnswerSubmitView["userAnswer"]
  setAnswer: ( 
    questionId: string, 
    value: AnswerSubmitView["userAnswer"]
  ) => void
}

export function ActiveQuestionRenderer({
  currentQuestion,
  currentIndex,
  questionsCount,
  currentAnswer,
  setAnswer,
}: ActiveQuestionRendererProps) {
  const questionNumber = currentIndex + 1;

  const renderInput = () => {
    const type = currentQuestion.answer.questionType

    switch (type) {
      case "trueFalse":
        return (
          <TrueFalseInput
            value={getTypedAnswer<"trueFalse">(currentAnswer)}
            onChange={(val) =>
              setAnswer(currentQuestion.questionId, val)
            }
          />
        )

      case "multipleChoice":
        return (
          <MultipleChoiceInput
            options={currentQuestion.answer.options ?? []}
            value={getTypedAnswer<"multipleChoice">(currentAnswer) ?? []}
            onChange={(val) =>
              setAnswer(currentQuestion.questionId, val)
            }
          />
        )

      case "numeric":
        return (
          <NumericInput
            value={getTypedAnswer<"numeric">(currentAnswer)}
            onChange={(val) =>
              setAnswer(currentQuestion.questionId, val)
            }
          />
        )

      case "textInput":
        return (
          <TextInput
            value={getTypedAnswer<"textInput">(currentAnswer)}
            onChange={(val) =>
              setAnswer(currentQuestion.questionId, val)
            }
          />
        )

      default:
        return null
    }
  }

  return (
    <Card 
      key={currentQuestion.questionId} 
      className="flex flex-col w-full animate-in fade-in slide-in-from-right-4 duration-200 ease-out"
    >
      <CardHeader className="pb-4 shrink-0">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-md font-medium">
            Question {questionNumber} of {questionsCount}
          </span>
          <span className="capitalize text-xs bg-muted px-2 py-0.5 rounded-md">
            {QUESTION_TYPE_LABELS[currentQuestion.answer.questionType]}
          </span>
        </div>
        <h2 className="text-lg font-medium text-foreground leading-relaxed">
          {currentQuestion.questionText}
        </h2>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-start">
        {renderInput()}
      </CardContent>
    </Card>
  )
}
