interface UserProfileDTO {
  firstName: string
  lastName: string
  email: string
  registeredAt: string
}

export const user: UserProfileDTO = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  registeredAt: "2024-03-05T09:30:00Z",
}