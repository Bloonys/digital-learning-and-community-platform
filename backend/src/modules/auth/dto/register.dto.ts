import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @IsEmail()
  email!: string;

  @IsString()
  @MinLength(6)
  password!: string;

  @IsString()
  @MinLength(6)
  confirmPassword!: string; 

  @IsString()
  name!: string;

  @IsString()
  @MinLength(3)
  username!: string;

  @IsOptional()
  @IsString()
  role?: string; // 可选，默认 STUDENT
}
