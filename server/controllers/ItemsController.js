import express from 'express'
import BaseController from "../utils/BaseController";
import auth0provider from "@bcwdev/auth0provider";
import { boardService } from '../services/BoardService';
import { listService } from '../services/ListService';
import { itemService } from '../services/ItemService';


//PUBLIC
export class ItemsController extends BaseController {
    constructor() {
        super("api/items")
        this.router
            .use(auth0provider.getAuthorizedUserInfo)
            .get('', this.getAll)
            .get('/:id', this.getById)
            .post('', this.create)
            .put('/:id', this.edit)
            .delete('/:id', this.delete)

    }


    async getAll(req, res, next) {
        try {
            let data = await itemService.getAll(req.userInfo.email)
            return res.send(data)
        }
        catch (err) { next(err) }
    }

    async getById(req, res, next) {
        try {
            let data = await itemService.getById(req.params.id, req.userInfo.email)
            return res.send(data)
        } catch (error) { next(error) }
    }


    async create(req, res, next) {
        try {
            req.body.creatorEmail = req.userInfo.email
            let data = await itemService.create(req.body)
            return res.status(201).send(data)
        } catch (error) { next(error) }
    }
    async edit(req, res, next) {
        try {
            let data = await itemService.edit(req.params.id, req.userInfo.email, req.body)
            return res.send(data)
        } catch (error) { next(error) }
    }
    async delete(req, res, next) {
        try {
            await itemService.delete(req.params.id, req.userInfo.email)
            return res.send("Successfully deleted")
        } catch (error) { next(error) }
    }
}