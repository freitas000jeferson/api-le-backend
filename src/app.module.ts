import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentaryModule } from './modules/comentary/commentary.module';
import { PostModule } from './modules/postagem/post.module';
import { MemoryCardModule } from './modules/memory-card/memory-card.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user/user.module';
import { MeaningModule } from './modules/significado/meaning.module';
import { PhraseModule } from './modules/frase/phrase.module';
import { AuthModule } from './core/auth/auth.module';
import { TypeProfileModule } from './modules/type-profiles/type-profile.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://LearningEnglishApiDBUser:l34rn1ng3ngl1sh@learningenglishapi.7mzw1.mongodb.net/LearningEnglishApiDB?retryWrites=true&w=majority',
    ),
    CommentaryModule,
    PostModule,
    MemoryCardModule,
    UserModule,
    MeaningModule,
    PhraseModule,
    AuthModule,
    TypeProfileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
