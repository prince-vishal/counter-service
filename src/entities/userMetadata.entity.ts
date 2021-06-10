import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IsIP } from 'class-validator';

import { User } from './user.entity';

@Entity('user_metadata')
export class UserMetadata {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column()
  user_id: number;

  @Column('varchar', { name: 'lastIpAddress', length: 255 })
  @IsIP()
  lastIpAddress: string;

  @Column('json', { name: 'geoData' })
  geoData: any;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  // @ManyToOne(() => User, (user) => user.userMetadata, {
  //   onDelete: 'NO ACTION',
  //   onUpdate: 'NO ACTION',
  // })
  // @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  // user: User;
}
