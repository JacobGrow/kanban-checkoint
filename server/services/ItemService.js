import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";


class ItemService {

    async  getAll(userEmail) {
        return await dbContext.Items.find({ creatorEmail: userEmail }).populate("creator", "name picture");
    }
    async getById(id, userEmail) {
        let data = await dbContext.Items.findOne({ _id: id, createEmail: userEmail })
        if (!data) {
            throw new BadRequest("Invalid ID")
        }
        return data
    }

    async find(query = {}) {
        let data = await dbContext.Items.find(query);
        return data;
    }
    async findById(id) {
        let data = await dbContext.Items.findById(id);
        if (!data) {
            throw new BadRequest("Invalid Id")
        }
        return data
    }
    async create(rawData) {
        let data = await dbContext.Items.create(rawData)
        return data
    }
    async edit(id, userEmail, update) {
        let data = await dbContext.Items.findOneAndUpdate({ _id: id, creatorEmail: userEmail }, update, { new: true })
        if (!data) {
            throw new BadRequest("Invalid ID or you do not own this board");
        }
        return data;
    }
    async delete(id, userEmail) {
        let data = await dbContext.Items.findOneAndRemove({ _id: id, creatorEmail: userEmail });
        if (!data) {
            throw new BadRequest("Invalid ID or you do not own this board");
        }
    }
}

export const itemService = new ItemService();