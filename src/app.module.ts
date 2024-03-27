import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipesModule } from './modules/recipes/recipes.module';
import { DatabaseModule } from './modules/database/database.module';
import { Recipes } from './providers/recipes/recipes';

@Module({
  imports: [RecipesModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService, Recipes],
})
export class AppModule {}
