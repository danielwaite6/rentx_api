import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuiV4 } from 'uuid'
import { Category } from "./Category";

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


    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuiV4();
        }
    }
}
export { Car };