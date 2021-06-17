import { Injectable } from '@nestjs/common';
import { Postt } from './schemas/post.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'

@Injectable()
export class PostService {
    
    constructor(@InjectModel(Postt.name) private postModel:Model<Postt>) {}
    
    create(dto: Postt) {
        const newComent = new this.postModel(dto);
        return newComent.save();
    }

    getAll() {
        return this.postModel.find()
    }

    getById(id: string) {
        return this.postModel.findById(id)
    }

    update(id: string, dto: Postt) {
        return this.postModel.updateOne(
            { _id: id },
            {
                $set: {description: dto.description, title: dto.title}
            }
        )
    }

    delete(id: string) {
        return this.postModel.deleteOne(
            {_id: id} //deleta a primeira ocorrencia que tiver esse id
        )
    }
}   
