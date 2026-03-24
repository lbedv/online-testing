import { Textarea } from "@/components/ui/textarea"

export function TextInput({
  value,
  onChange,
}: {
  value: string | undefined
  onChange: (val: string | undefined) => void
}) {
  return (
    <Textarea
      value={value ?? ""}
      placeholder="Type your answer here..."
      onChange={(e) => onChange(e.target.value || undefined)}
      rows={4}
      className="resize-none"
    />
  )
}