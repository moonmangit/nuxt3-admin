import type { AppRecord } from "@/assets/libs/type"

export interface UserRecord extends AppRecord {
  username: string
  email: string
  password: string
  isActive: boolean
}
