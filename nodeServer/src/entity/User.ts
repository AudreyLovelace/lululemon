import {Entity, PrimaryGeneratedColumn, Column, Unique, CreateDateColumn, UpdateDateColumn, OneToMany} from "typeorm";
// @ts-ignore
import {IsEmail,Length,Min,Max} from "class-validator";
import {Order} from "./Order";

@Entity()
@Unique(['email'])
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Length(1,100)
    firstName: string;

    @Column()
    @Length(1,100)
    lastName: string;

    @Column({nullable:true, default:18})
    @Min(15)
    @Max(120)
    age: number;

    @Column()
    @IsEmail()
    @Length(5,150)
    email: string;

    @Column()
    @Length(6,200)
    password: string

    @Column({nullable:true,default:false})
    isStaff: boolean

    @Column({nullable:true,default:false})
    isActive: boolean

    @Column({nullable:true,default:false})
    isDelete: boolean

    @Column()
    @CreateDateColumn()
    createdAt: Date

    @Column()
    @UpdateDateColumn()
    updatedAt: Date

    //relation
    @OneToMany(  () => Order, od => od.user)
    orders:Order[]


}
