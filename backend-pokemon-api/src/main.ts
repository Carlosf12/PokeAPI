import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { loggerGlobal } from 'src/middlewares/logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      exceptionFactory: (errors) => {
        const cleanErrors = errors.map((error) => {
          return { property: error.property, constraints: error.constraints };
        });
        return new BadRequestException({
          alert: 'Errores detectados: ',
          errors: cleanErrors,
        });
      },
    }),
  );
  app.use(loggerGlobal);
  app.enableCors();
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
