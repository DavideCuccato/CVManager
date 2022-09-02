import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

const isProd = process.env.NODE_ENV === 'production'
const exposePort = isProd ? 80 : 4000

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // CORS
  app.enableCors()

  await app.listen(exposePort)

  console.log(
    `Application is running on: ${await app.getUrl()} | ${exposePort} | ENV: ${
      process.env.NODE_ENV
    }`
  )
}
bootstrap()
