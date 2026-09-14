import { IsNumber, IsPositive } from 'class-validator';

export class ActualizarPrecioDto {
  @IsNumber()
  @IsPositive()
  precio: number;
}