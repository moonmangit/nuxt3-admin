import type { APIContext } from "@/assets/libs/plugins/api/type"
import type { ExampleGetResponse } from "./get.type"
import type { ExampleCreatePayload, ExampleCreateResponse } from "./create.type"

export default function createExampleService({ api }: APIContext) {
  return {
    get() {
      return api("/example/get") as Promise<ExampleGetResponse>
    },
    createOne(payload: ExampleCreatePayload) {
      return api("/example/create", {
        method: "POST",
        body: payload,
      }) as Promise<ExampleCreateResponse>
    },
  }
}
