import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function main(): Promise<void>
{
    const app = await NestFactory.create(AppModule);

    setupSwagger(app);

    await app.listen(3000);
}

function setupSwagger(app: INestApplication): void
{
    const config = new DocumentBuilder()
        .setTitle('NestJS API')
        .setDescription('NestJS API description')
        .setVersion('1.0')
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document);
}

main();