import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Create a Swagger UI / OpenAPI API documentation.
  const documentBuilder = new DocumentBuilder()
    .setTitle('Hlutir API')
    .setDescription('The Hlutir API description.')
    .setVersion('1.0')
    .addTag('hlutir')
    .build();

  const document = SwaggerModule.createDocument(app, documentBuilder);
  SwaggerModule.setup('api', app, document);

  app.enableCors();

  await app.listen(3000);
}
bootstrap();
