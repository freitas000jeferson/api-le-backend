import { Injectable } from '@nestjs/common';
import { MemoryCard } from './schemas/memoryCard.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'

@Injectable()
export class MemoryCardService {
    
    constructor(@InjectModel(MemoryCard.name) private memoryCardModel:Model<MemoryCard>) {}
    
    create(dto: MemoryCard) {
        const newComent = new this.memoryCardModel(dto);
        return newComent.save();
    }

    getAll() {
        return this.memoryCardModel.find()
    }

    getById(id: string) {
        return this.memoryCardModel.findById(id)
    }

    delete(dto: MemoryCard) {
        return this.memoryCardModel.deleteOne(dto)
    }
}   
