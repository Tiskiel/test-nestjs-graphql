import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

Entity();
export class Recipe {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 255 })
  name: string;
  @Column('array')
  ingredients: Array<string>;
  @Column('text')
  description: string;
  @Column('text')
  image: string;
  @Column('int')
  duration: number;
  @Column('int')
  difficulty: number;
  @Column('int')
  servings: number;
  @Column('timestamp')
  createdAt: Date;
  @Column('timestamp')
  updatedAt: Date;
}
