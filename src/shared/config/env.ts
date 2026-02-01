import { Transform, plainToInstance } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsNotEmpty,
  IsString,
  IsUrl,
  NotEquals,
  validateSync,
} from 'class-validator';

class Env {
  @IsString()
  @IsNotEmpty()
  @NotEquals('unsecure_jwt_secret')
  jwtSecret: string;

  @IsString()
  @IsNotEmpty()
  dbURL: string;

  @Transform(({ value }) => {
    return String(value)
      .split(';')
      .map((origin) => origin.trim())
      .filter(Boolean);
  })
  @IsUrl({ require_tld: false, require_protocol: true }, { each: true })
  @ArrayNotEmpty()
  allowedOrigins: string[];
}

export const env: Env = plainToInstance(Env, {
  allowedOrigins: process.env.ALLOWED_ORIGINS,
  dbURL: process.env.DATABASE_URL,
  jwtSecret: process.env.JWT_SECRET,
});

const errors = validateSync(env);

if (errors.length > 0) {
  throw new Error(JSON.stringify(errors, null, 2));
}
