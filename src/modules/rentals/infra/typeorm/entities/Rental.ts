import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity("rentals")
class Rental {

    @PrimaryColumn({ type: "uuid" })
    id: string;

    @Column()
    car_id: string;

    @Column()
    user_id: string;

    @Column()
    start_date: Date;

    @Column({ nullable: true })
    end_date: Date;

    @Column({ nullable: true })
    expected_return_date: Date;

    @Column({ nullable: true })
    total: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
            this.start_date = new Date();
        }
    }

};
export { Rental }