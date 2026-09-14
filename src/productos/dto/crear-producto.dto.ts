import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class CrearProductoDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsNumber()
  @IsPositive()
  precio: number;
}