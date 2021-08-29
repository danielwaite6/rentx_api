import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuiV4 } from 'uuid'
import { Category } from "./Category";
import { Specification } from "./Specification";

@Entity("cars")
class Car {

    @PrimaryColumn({ type: "uuid" })
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    license_plate: string;

    @Column()
    daily_rate: number;

    @Column({ default: true })
    available: boolean;

    @Column()
    fine_amount: number;

    @Column()
    brand: string;

    @ManyToOne(() => Category)
    @JoinColumn({ name: "category_id" })
    category: Category;

    @Column({ type: "uuid" })
    category_id: string;

    @ManyToMany(() => Specification)
    @JoinTable({
        name: "specifications_cars",
        joinColumns: [{ name: "car_id" }],
        inverseJoinColumns: [{ name: "specification_id" }],
    })
    specifications: Specification[];

    @CreateDateColumn()
    created_at: Date;

    constructor() {

        if (!this.id) {
            this.id = uuiV4();
        }
    }
}
export { Car };