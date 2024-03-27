import { Module } from '@nestjs/common';
import { RecipesController } from './controllers/recipes/recipes.controller';

@Module({
  controllers: [RecipesController],
})
export class RecipesModule {}
