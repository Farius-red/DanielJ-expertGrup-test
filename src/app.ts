import 'reflect-metadata';
import express from 'express';
import { AppDataSource } from './utils/data-source';
import { setupSwagger } from './swagger';
import catRoutes from './api/controller/catRoutes';
import userRoutes from './api/controller/userRoutes';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Rutas
//app.use('/api/cats', catRoutes);
//app.use('/api/images', imageRoutes);
app.use('/api/users', userRoutes);

// Swagger
setupSwagger(app);

// Inicializa la conexión a la base de datos
AppDataSource.initialize()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}/api-docs`);
    });
  })
  .catch((error: any) => {
    console.error('Error during Data Source initialization:', error);
  });
