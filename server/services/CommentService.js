import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";


class CommentService {

    async  getAll(userEmail) {
        return await dbContext.Comments.find({ creatorEmail: userEmail }).populate("creator", "name picture");
    }
    async getById(id, userEmail) {
        let data = await dbContext.Comments.findOne({ _id: id, createEmail: userEmail })
        if (!data) {
            throw new BadRequest("Invalid ID")
        }
        return data
    }

    async find(query = {}) {
        let data = await dbContext.Comments.find(query);
        return data;
    }
    async findById(id) {
        let data = await dbContext.Comments.findById(id);
        if (!data) {
            throw new BadRequest("Invalid Id")
        }
        return data
    }
    async create(rawData) {
        let data = await dbContext.Comments.create(rawData)
        return data
    }
    async edit(id, userEmail, update) {
        let data = await dbContext.Comments.findOneAndUpdate({ _id: id, creatorEmail: userEmail }, update, { new: true })
        if (!data) {
            throw new BadRequest("Invalid ID");
        }
        return data;
    }
    async delete(id, userEmail) {
        let data = await dbContext.Comments.findOneAndRemove({ _id: id, creatorEmail: userEmail });
        if (!data) {
            throw new BadRequest("Invalid ID");
        }
    }
}

export const commentService = new CommentService();