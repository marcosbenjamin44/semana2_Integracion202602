import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { ProductosService } from './productos.service.js';
import { CrearProductoDto } from './dto/crear-producto.dto.js';
import { ActualizarPrecioDto } from './dto/actualizar-precio.dto.js';
import type { Response } from 'express';


@Controller('api/v1/productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Get()
  listar() {
    return this.productosService.findAll();
  }

  @Get(':id')
  obtener(@Param('id', ParseIntPipe) id: number) {
    return this.productosService.findOne(id);
  }

  @Post()
    @HttpCode(HttpStatus.CREATED)
    crear(@Body() dto: CrearProductoDto, @Res({ passthrough: true }) res: Response) {
    const nuevo = this.productosService.crear(dto);
    res.setHeader('Location', `/api/v1/productos/${nuevo.id}`);
    return nuevo;
    }

    @Put(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    reemplazar(@Param('id', ParseIntPipe) id: number, @Body() dto: CrearProductoDto) {
    this.productosService.reemplazar(id, dto);
    }

    @Patch(':id')
    actualizarPrecio(@Param('id', ParseIntPipe) id: number, @Body() dto: ActualizarPrecioDto) {
    return this.productosService.actualizarPrecio(id, dto);
    }


    @Delete(':id')
        @HttpCode(HttpStatus.NO_CONTENT)
        eliminar(@Param('id', ParseIntPipe) id: number) {
        this.productosService.eliminar(id); // 204
        }

}