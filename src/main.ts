import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { PrismaService } from 'nestjs-prisma'

// const isProd = process.env.NODE_ENV === 'production'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // CORS
  app.enableCors()

  // Swagger
  const config = new DocumentBuilder()
    .setTitle('CV Manager')
    .setDescription('Cuccato Veicoli Manager API')
    .setVersion('1.0')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)

  // enable shutdown hook
  const prismaService: PrismaService = app.get(PrismaService)
  await prismaService.enableShutdownHooks(app)

  await app.listen(4000)

  console.log(
    `Application is running on: ${await app.getUrl()} | ENV: ${
      process.env.NODE_ENV
    }`
  )
}
bootstrap()
