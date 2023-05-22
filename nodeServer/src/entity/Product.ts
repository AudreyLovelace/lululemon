import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    Unique,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
    ManyToOne, ManyToMany
} from "typeorm";
// @ts-ignore
import {IsEmail,Length,Min,Max} from "class-validator";
import order from "../routes/order";
import {User} from "./User";

@Entity()
@Unique(['slug'])
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Length(1,200)
    slug: string;

    @Column()
    @Length(1,200)
    name: string;

    @Column('decimal',{precision:5,scale:2})
    @Min(0)
    price: number;


    @Column()
    description: string

    @Column()
    media: string

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

    @ManyToMany(  () => Product,user => order)
    user: User
    //relation


}
