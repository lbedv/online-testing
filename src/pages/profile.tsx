import { ProfileHeader, ProfileForm, PasswordForm } from "@/features/profile";
import { Separator } from "@/components/ui/separator";
import { PageHeader } from "@/components/common/page-header";
import { useUserInfo } from "@/features/profile/";

export function ProfilePage() {
  const { items: user } = useUserInfo();

  return (
    <div className="flex flex-col gap-8">
      <PageHeader
        title="Profile"
        description="Manage your account information and security settings."
      />
      <Separator />
      <div className="mx-auto flex w-full max-w-xl flex-col gap-8">
        <ProfileHeader
          firstName={user.firstName}
          lastName={user.lastName}
          email={user.email}
          registeredAt={user.registeredAt}
        />
        <ProfileForm
          initialFirstName={user.firstName}
          initialLastName={user.lastName}
          initialEmail={user.email}
        />
        <PasswordForm/>
      </div>
    </div>
  )
}