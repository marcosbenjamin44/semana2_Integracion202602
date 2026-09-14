
Contrato CRUD de /productos

Operación	        Verbo	                        URI	Éxito
Listar	            GET	/api/v1/productos	        200
Obtener uno	        GET	/api/v1/productos/{id}	    200 / 404
Crear	            POST	/api/v1/productos	    201 + Location
Reemplazar	        PUT	/api/v1/productos/{id}	    204
Actualizar parcial	PATCH	/api/v1/productos/{id}	200
Eliminar	        DELETE	/api/v1/productos/{id}	204 / 404
