import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    Unique,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
    ManyToOne, ManyToMany, JoinTable
} from "typeorm";
// @ts-ignore
import {IsEmail,Length,Min,Max} from "class-validator";
import order from "../routes/order";
import {User} from "./User";
import {Product} from "./Product";

@Entity()
export class Order {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('decimal',{precision:5, scale:2})
    @Min(0)
    price:number

    @Column('decimal',{precision:5, scale:2})
    @Min(0)
    total:number

    @Column('decimal',{precision:5, scale:2,default:1.00})
    @Min(1)
    taxRate:number

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

    @ManyToOne(  () => User,user => order)
    user: User
    //relation

    @ManyToMany(() => Product)
    @JoinTable()
    products: Product[]

}
