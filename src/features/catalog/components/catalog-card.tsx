import PathConstants from "@/routes/path-constants"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Link } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { HelpCircle, User, Users } from "lucide-react"
import { IconStat } from "@/components/common"
import type { CatalogTest } from "../types"
import { DIFFICULTY_CONFIG } from "../constants"

interface CatalogCardProps {
  test: CatalogTest
}

/**
 * CatalogCard component - Displays a single test card in the catalog with metadata.
 * Shows test title, author name,description, difficulty, question and and attempt counts.
 * Provides actions to take the test or edit if user is the owner and test is still in draft.
 */
export function CatalogCard({ test }: CatalogCardProps) {
  const isOwner = test.ownership === "mine"
  const badgeConfig = DIFFICULTY_CONFIG[test.difficulty]

  return (
    <Card className="flex flex-col transition-shadow hover:shadow-md">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1.5">
            <CardTitle className="text-base font-semibold leading-snug text-foreground">
              {test.title}
            </CardTitle>
            {!isOwner && (
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <User className="h-3 w-3" />
                {test.author.firstName} {test.author.lastName}
              </span>
            )}
          </div>
          <div className="flex shrink-0 items-center gap-1.5">
            <Badge variant={badgeConfig.variant}>
              {badgeConfig.label}
            </Badge>
          </div>
        </div>
        <CardDescription className="line-clamp-2 text-sm leading-relaxed">
          {test.description}
        </CardDescription>
      </CardHeader>

      <CardFooter className="mt-auto flex flex-col gap-3 pt-0 items-start">
        {/* stats row - left aligned */}
        <div className="flex flex-wrap gap-x-4 gap-y-1.5">
          <IconStat
            icon={<HelpCircle className="h-3.5 w-3.5" />}
            value={`${test.questionsCount} questions`}
          />
          <IconStat
            icon={<Users className="h-3.5 w-3.5" />}
            value={`${test.attemptsCount} attempts`}
          />
        </div>

        {/* Take Test button */}
        <Button asChild size="sm" className="w-full">
          <Link to={PathConstants.TEST_ATTEMPT} params={{ id: test.id }}>
            Take Test
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
