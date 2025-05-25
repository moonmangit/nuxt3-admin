import type { UserRecord } from "@/types/user"

export default defineNuxtPlugin((nuxtApp) => {
  const api = $fetch.create({})

  return {
    provide: {
      // pure fetch instance
      api: {
        base: api,
      },
      // predefine api endpoints with parameters and responses
      service: {
        // example:
        // user
        user: {
          getAll(): UserRecord[] {
            return []
          },
          getById(id: number): UserRecord | null {
            return null
          },
          create(username: string, password: string): UserRecord {
            return {
              id: Date.now(),
              createdAt: new Date().toISOString(),
              username,
              email: "",
              password,
              isActive: true,
            }
          },
        },
        // content A
        contentA: {
          get() {},
          create() {},
          update() {},
          delete() {},
        },
        // content B
        contentB: {
          get() {},
          create() {},
          update() {},
          delete() {},
        },
      },
    },
  }
})
