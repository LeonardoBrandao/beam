import { PrismaClient } from '@prisma/client'

declare global {
  var prisma: PrismaClient | undefined
}

export const prisma = global.prisma || new PrismaClient()

prisma.$use(async (params, next) => {
  if (params.action == 'create' && params.model == 'Account') {
    delete params.args.data['not-before-policy']
    params.args.data['refresh_token_expires_in'] =
      params.args.data['refresh_expires_in']
    delete params.args.data['refresh_expires_in']
  }

  const result = await next(params)
  // See results here
  return result
})

if (process.env.NODE_ENV !== 'production') global.prisma = prisma
