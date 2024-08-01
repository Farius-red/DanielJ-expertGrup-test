// src/data-source.ts
import { DataSource } from 'typeorm';
import { Cat } from '../infraestructure/entitis/Cat';
import { User } from '../infraestructure/entitis/User';


export const AppDataSource = new DataSource({
  type: 'mongodb',
  host: 'localhost',
  port: 27017,
  database: 'prueba',
  synchronize: true,
  logging: false,
  entities: [Cat, User]
});

AppDataSource.initialize().then(() => {
    console.log('Data Source has been initialized!');
}).catch((err) => {
    console.error('Error initializing Data Source', err);
});