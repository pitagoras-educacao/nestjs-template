import { INestApplication, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function main(): Promise<void>
{
    const app = await NestFactory.create(AppModule);

    setupValidationPipe(app);
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

function setupValidationPipe(app: INestApplication): void
{
    app.useGlobalPipes(new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
    }));
}

main();