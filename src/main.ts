import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 3000;

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });

  app.useGlobalFilters();

  app.enableCors({
    //origin: "http://localhost:4200/",
    origin: true,
    methods: 'GET,POST,PUT,DELETE,OPTIONS,PATCH,UPDATE',
    credentials: true,
  });

  app.setGlobalPrefix('api');
}
bootstrap();
