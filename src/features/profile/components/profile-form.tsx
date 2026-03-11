import React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Save } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FormInput } from "@/components/common"
import { ProfileSchema, type ProfileFormData } from "../schemas"

interface ProfileFormProps {
  initialFirstName: string
  initialLastName: string
  initialEmail: string
}

export function ProfileForm({
  initialFirstName,
  initialLastName,
  initialEmail,
}: ProfileFormProps) {
  const [isLoading, setIsLoading] = React.useState(false)
  
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
  } = useForm<ProfileFormData>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      firstName: initialFirstName,
      lastName: initialLastName,
      email: initialEmail,
    },
  })

  const onSubmit = (data: ProfileFormData) => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      reset(data)
      toast.success("Profile updated successfully.", {
        position: "top-right"
      })
    }, 2000)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Profile Information</CardTitle>
        <CardDescription>
          Update your display name and email address.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormInput
              id="profile-first-name"
              label="First Name"
              error={errors.firstName?.message}
              placeholder="Your first name"
              {...register("firstName")}
            />

            <FormInput
              id="profile-last-name"
              label="Last Name"
              error={errors.lastName?.message}
              placeholder="Your last name"
              {...register("lastName")}
            />
          </div>

          <FormInput
            id="profile-email"
            label="Email Address"
            type="email"
            error={errors.email?.message}
            placeholder="you@example.com"
            {...register("email")}
          />

          <div className="flex justify-end pt-2">
            <Button
              type="submit"
              disabled={!isDirty || isLoading}
            >
              <Save className="h-4 w-4 mr-2" />
              {isLoading ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}