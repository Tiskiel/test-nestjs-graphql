import { Recipe } from 'src/entities/recipe.entity';
import { DataSource } from 'typeorm';

export const recipeProviders = [
  {
    provide: 'RECIPE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Recipe),
  },
];
