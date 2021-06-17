import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { MemoryMeasurement } from 'vm';
import { MemoryCard } from "../../schemas/memoryCard.schema";
import { IMemoryCardRepository } from "../i-memory-card.repository";

export class MemoryCardMongoRepository implements IMemoryCardRepository {
    
    constructor(
        @InjectModel(MemoryCard.name)
        private memoryCardModel: Model<MemoryCard>,
    ) {}
    
    create(dto: MemoryCard) {
        const newComent = new this.memoryCardModel(dto);
        return newComent.save();
    }

    getAll() {
        return this.memoryCardModel.find()
    }

    getAllByUserId(id_user: string) {
        const query = {};
        query['id_user'] = id_user;
        return this.memoryCardModel.find(query);
    }

    getAllByDate(id_user: string, currentDate: Number) {
        const query = {}
        query['id_user'] = id_user;
        query['date_view'] = {$not: {$gt: currentDate}};
        return this.memoryCardModel.find(query);
    }

    getById(id: string) {
        return this.memoryCardModel.findById(id)
    }

    update(id: string, dto: MemoryCard) {
        return this.memoryCardModel.updateOne(
            {_id: id},
            {
                word: dto.word,
                meanings: dto.meanings,
                phrases: dto.phrases,
                date_view: dto.date_view,
                description: dto.description,
                level: dto.level,
                step: dto.step,
                id_user: dto.id_user,
            }
        )
    }

    delete(id: string) {
        return this.memoryCardModel.deleteOne(
            {_id: id},
        )
    }
}