import createExampleService from "~/plugins/api/example"

export type ApiContext = {
  api: ReturnType<typeof $fetch.create>
}

export default defineNuxtPlugin((_nuxtApp) => {
  const api = $fetch.create({
    onRequest({ request: _request, options: _options }) {},
    onRequestError({ request: _request, options: _options, error: _error }) {},
    onResponse({
      request: _request,
      options: _options,
      response: _response,
    }) {},
  })

  const _context: ApiContext = {
    api,
  }

  return {
    provide: {
      api: {
        base: api,
      },
      service: {
        example: createExampleService(_context),
      },
    },
  }
})
