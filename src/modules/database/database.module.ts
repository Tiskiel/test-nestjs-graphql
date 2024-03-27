import { Module } from '@nestjs/common';
import { databaseProvider } from 'src/providers/database/database';

@Module({
  providers: [...databaseProvider],
  exports: [...databaseProvider],
})
export class DatabaseModule {}
