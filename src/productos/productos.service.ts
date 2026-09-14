import { Injectable, NotFoundException } from '@nestjs/common';
import { Producto } from './producto.entity.js';
import { CrearProductoDto } from './dto/crear-producto.dto.js';
import { ActualizarPrecioDto } from './dto/actualizar-precio.dto.js';

@Injectable()
export class ProductosService {
  private productos: Producto[] = [
    { id: 1, nombre: 'Teclado mecánico', precio: 45.9 },
    { id: 2, nombre: 'Mouse inalámbrico', precio: 19.5 },
    { id: 3, nombre: 'Monitor 24"', precio: 129.99 },
  ];

  findAll(): Producto[] {
    return this.productos;
  }

  findOne(id: number): Producto {
    const producto = this.productos.find((p) => p.id === id);
    if (!producto) throw new NotFoundException(`Producto ${id} no existe`);
    return producto;
  }

  crear(dto: CrearProductoDto): Producto {
    const nuevoId = Math.max(...this.productos.map((p) => p.id)) + 1;
    const nuevo: Producto = { id: nuevoId, ...dto };
    this.productos.push(nuevo);
    return nuevo;
    }

    reemplazar(id: number, dto: CrearProductoDto): void {
        const index = this.productos.findIndex((p) => p.id === id);
        if (index === -1) throw new NotFoundException(`Producto ${id} no existe`);
        this.productos[index] = { id, ...dto };
    }

    actualizarPrecio(id: number, dto: ActualizarPrecioDto): Producto {
        const index = this.productos.findIndex((p) => p.id === id);
        if (index === -1) throw new NotFoundException(`Producto ${id} no existe`);
        this.productos[index].precio = dto.precio;
        return this.productos[index];
    }

    eliminar(id: number): void {
        const index = this.productos.findIndex((p) => p.id === id);
        if (index === -1) throw new NotFoundException(`Producto ${id} no existe`);
        this.productos.splice(index, 1);
    }

}