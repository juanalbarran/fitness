import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production', 'test')
          .default('development'),
        PORT: Joi.number().port().default(3000),
        DATABASE_HOST: Joi.string().not().empty(),
        DATABASE_NAME: Joi.string().not().empty(),
      }),
      validationOptions: {
        allowUnknown: true,
        aboortEarly: true,
      },
      isGlobal: true,
    }),
  ],
})
export class ConfigurationModule {}
