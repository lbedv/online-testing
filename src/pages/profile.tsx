import { Separator } from "@/components/ui/separator";
import { PageHeader } from "@/components/common/page-header";

export function ProfilePage() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader
        title="Profile"
        description="Manage your account information and security settings."
      />
      <Separator />
    </div>
  )
}