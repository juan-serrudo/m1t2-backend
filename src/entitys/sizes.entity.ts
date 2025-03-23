import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, VersionColumn, Unique } from 'typeorm';

@Entity()
@Unique(['name'])
export class Sizes {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @VersionColumn()
  version: number

  @Column({ type: 'int2' })
  state: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;
}
