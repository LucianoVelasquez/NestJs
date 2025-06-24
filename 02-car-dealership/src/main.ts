import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function main() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      // Elimina cualquier propiedad que no tenga decoradores en los DTOs
      whitelist: true,
      // Retorna error si el cliente envía propiedades no permitidas
      forbidNonWhitelisted: true,
    }),
  )

  await app.listen(process.env.PORT ?? 3000);
}
main();
