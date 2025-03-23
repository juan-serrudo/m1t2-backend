import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, VersionColumn, Unique, OneToMany, ManyToOne } from 'typeorm';
import { TypesArticles } from './types-articles.entity';

@Entity()
export class Articles {
  @PrimaryGeneratedColumn()
  id: number;

  @VersionColumn()
  version: number

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @Column({ type: 'int2' })
  state: number;

  @Column({ type: 'varchar', length: 200 })
  name: string;

  @Column({ type: 'varchar', length: 500 })
  detail: string;

  @Column({ type: 'varchar', length: 500 })
  description: string;

  @Column({ type: 'double' })
  price: number;

  @Column()
  hasSize: boolean;

  @Column()
  typeArticleId: number;

  @ManyToOne(() => TypesArticles, typeArticle => typeArticle.id)
  typeArticle: TypesArticles[];
}
