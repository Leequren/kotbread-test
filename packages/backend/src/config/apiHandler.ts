import { ApiEndpoints, ApiMethods } from '@kotbread-test/shared'

export type ApiHandler<Endpoint extends ApiEndpoints> = {
  Body: ApiMethods[Endpoint]['request']
  Reply: ApiMethods[Endpoint]['response']
}
