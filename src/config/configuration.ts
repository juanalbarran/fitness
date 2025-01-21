import { z } from 'zod';

export default () => {
  const envSchema = z.object({
    PORT: z.number().default(3000),
  });
  const { success, error, data } = envSchema.safeParse(process.env);

  if (!success) {
    console.error(
      'There is a problem in the environment variables',
      error.format(),
    );
    process.exit(1);
  }

  return { PORT: data.PORT };
};
