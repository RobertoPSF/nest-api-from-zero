import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { User, UserDocument } from "./user.schema";

@Injectable()
export class UserRepository{
    constructor(
        @InjectModel(User.name) private readonly _model: Model<UserDocument>,
    ) {}

    async create(item: UserDocument) :  Promise<User> {
        return this._model.create(item);
    }

    async find(filter: FilterQuery<UserDocument>) : Promise<User[]> {
        return this._model.find(filter);
    }

    async findOne(filter: FilterQuery<UserDocument>) : Promise<User> {
        return this._model.findOne(filter);
    }

    async updateOne(
        filter: FilterQuery<UserDocument>, 
        item: UserDocument
        ) : Promise<User> {
        return this._model.findOneAndUpdate(filter, item, {new: true});
    }

    async deleteOne(filter: FilterQuery<UserDocument>) : Promise<User> {
        return this._model.findOneAndDelete(filter);
    }

    
}