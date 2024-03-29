import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'postgres',
			url: process.env['DATABASE_URL'] || 'postgres://postgres:postgres@localhost:5432/postgres',
			entities: [],
			synchronize: true,
		}),
      
	]
})
export class AppModule {}