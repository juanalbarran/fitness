import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT', 3000);
  const node_env = configService.get<string>('NODE_ENV');
  await app.listen(port);
  console.log('PORT:', port);
  console.log('NOODE_ENV:', node_env);
}
bootstrap();
