import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.useGlobalFilters();

  app.setGlobalPrefix('api');

  app.enableCors({
    //origin: "http://localhost:4200/",
    origin: true,
    methods: 'GET,POST,PUT,DELETE,OPTIONS,PATCH,UPDATE',
    credentials: true,
  });

  app.setGlobalPrefix('api');

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
