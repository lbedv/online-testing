import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import type { QuestionType, AnswerMap, AnswerSubmitView } from "@/shared/types/answer"
import type { QuestionClientView } from "../types"

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
    switch (currentQuestion.answer.questionType) {
      case "trueFalse": {
        const currentValue = getTypedAnswer<"trueFalse">(currentAnswer);
        return (
          <RadioGroup
            value={currentValue === undefined ? "" : String(currentValue)}
            onValueChange={(currentValue) =>
              setAnswer(currentQuestion.questionId, currentValue === "true")
            }
            className="space-y-3"
          >
            {["true", "false"].map((val) => {
              const isSelected = String(currentValue) === val;

              return (
                <Label
                  key={val}
                  htmlFor={val}
                  className={`flex items-center space-x-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                    isSelected
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-muted-foreground/50"
                  }`}
                >
                  <RadioGroupItem value={val} id={val} />
                  <span className="capitalize">{val}</span>
                </Label>
              );
            })}
          </RadioGroup>
        )
      }

      
      case "multipleChoice": {
        const selectedOptions = getTypedAnswer<"multipleChoice">(currentAnswer) ?? [];

        return (
          <div className="space-y-3">
            {currentQuestion.answer.options?.map((option, index) => {
              const optionId = `option-${index}`
              const isChecked = selectedOptions.includes(option.id)

              return (
                <div key={optionId} className="flex items-center space-x-3">
                  <Checkbox
                    id={optionId}
                    checked={isChecked}
                    onCheckedChange={(checked) => {
                      const newSelection = checked
                        ? [...selectedOptions, option.id]
                        : selectedOptions.filter((o) => o !== option.id)
                      setAnswer(currentQuestion.questionId, newSelection)
                    }}
                  />
                  <Label htmlFor={optionId} className="cursor-pointer">
                    {option.label}
                  </Label>
                </div>
              )
            })}
          </div>
        )
      }

      case "numeric": {
        const numericValue = getTypedAnswer<"numeric">(currentAnswer);
        return (
          <Input
            type="number"
            placeholder="Enter your answer..."
            value={numericValue ?? ""}
            onChange={(e) => {
              const value = e.target.value
              setAnswer(currentQuestion.questionId, value === "" ? undefined : Number(value))
            }}
            className="max-w-xs"
          />
        )
      }
      case "textInput": {
        const textValue = getTypedAnswer<"textInput">(currentAnswer);
        return (
          <Textarea
            placeholder="Type your answer here..."
            value={textValue ?? ""}
            onChange={(e) => setAnswer(currentQuestion.questionId, e.target.value || undefined)}
            rows={4}
            className="resize-none"
          />
        )
      }
      default:
        return null
    }
  }

  return (
    <Card className="flex-1">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-md font-medium">
            Question {questionNumber} of {questionsCount}
          </span>
          <span className="capitalize text-xs bg-muted px-2 py-0.5 rounded-md">
            {currentQuestion.answer.questionType}
          </span>
        </div>
        <h2 className="text-lg font-medium text-foreground leading-relaxed">
          {currentQuestion.questionText}
        </h2>
      </CardHeader>
      <CardContent>{renderInput()}</CardContent>
    </Card>
  )
}
