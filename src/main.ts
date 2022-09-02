import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

const isProd = process.env.NODE_ENV === 'production'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // CORS
  app.enableCors()

  await app.listen(4000)

  console.log(
    `Application is running on: ${await app.getUrl()} | ENV: ${
      process.env.NODE_ENV
    }`
  )
}
bootstrap()
