import { MemoryMeasurement } from "vm";
import { MemoryCard } from "../schemas/memoryCard.schema";

export interface IMemoryCardRepository {
    create(dto: MemoryCard)
    getAll()
    getAllByUserId(id_user: string)
    getAllByDate(id_user: string, currentDate: Number)
    getById(id: string)
    update(id: string, dto: MemoryCard)
    delete(id: string)

}