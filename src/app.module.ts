import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { RecruitModule } from './recruit/recruit.module';
import { ApplicationModule } from './application/application.module';
import { AuthModule } from './auth/auth.module';
import { ChatModule } from './chat/chat.module';
import { CompanyModule } from './company/company.module';
import { JobModule } from './job/job.module';
import { MessageModule } from './message/message.module';
import { MinioModule } from './minio/minio.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.PGHOST,
      port: +(process.env.PGPORT || 5432),
      username: process.env.PGUSER,
      password: process.env.PGPASSWORD,
      database: process.env.PGDATABASE,
      entities: [User],
      synchronize: true,
    }),
    UserModule,
    RecruitModule,
    ApplicationModule,
    AuthModule,
    ChatModule,
    CompanyModule,
    JobModule,
    MessageModule,
    MinioModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
