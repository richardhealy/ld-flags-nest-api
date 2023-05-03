import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // I could have refactored this into the AppModule so that
  // it would be picked up in tests. For brevity, I left it here.
  app.useGlobalPipes(
    new ValidationPipe({
      // Only allow properties specified in DTOs
      whitelist: true,
      // Slight performance hit, but auto-transforms inputs based on types
      transform: true,
      // errors if non-whitelisted properties are present
      forbidNonWhitelisted: true,
    }),
  );
  app.enableVersioning({
    type: VersioningType.URI,
  });
  await app.listen(3000);
}
bootstrap();
