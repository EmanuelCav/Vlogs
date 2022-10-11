import { Request, Response } from "express";
import { unlink } from "fs-extra";

import { cloudConnection } from '../images/cloud'

import Vlog from '../data/model/vlogs'

import { IVlog } from "../interface/Vlog";

export const vlogs = async (req: Request, res: Response): Promise<Response> => {

    try {

        const showVlogs = await Vlog.find();

        return res.status(200).json({
            vlogs: showVlogs,
            amount: showVlogs.length
        })

    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }

}

export const myVlogs = async (req: Request, res: Response): Promise<Response> => {

    try {

        const showVlogs = await Vlog.find({ userId: req.user })

        return res.status(200).json({
            vlogs: showVlogs,
            amount: showVlogs.length
        })

    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }

}

export const vlog = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params;

    try {

        const showVlog = await Vlog.findById(id)

        return res.status(200).json(showVlog)

    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }

}

export const createVlog = async (req: Request, res: Response): Promise<Response> => {

    const { title, description, information } = req.body;
    
    var images: object[] = [];
    var files: any = req.files;

    try {

        for(var file of files) {
            const result = await cloudConnection.uploader.upload(file.path)
            images.push({
                image: result.url,
                imageId: result.public_id
            })
            await unlink(file.path)
        }
        
        const newVlog: IVlog = new Vlog({
            title,
            description,
            information,
            images,
            userId: req.user
        })

        const vlogSaved = await newVlog.save()
        
        return res.status(200).json(vlogSaved)

    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }

}

export const removeVlog = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params;

    try {

        const vlog = await Vlog.findById(id)

        if(!vlog) {
            return res.status(401).json({ message: "Vlog does not exists" })
        }

        await Vlog.findByIdAndDelete(id)

        return res.status(200).json({
            message: "Vlog was removed"
        })

    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }

}

export const likeVlog = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params;

    try {

        const vlog = await Vlog.findById(id)

        if(vlog.likes.find((user: any) => user == req.user)) {
            return res.status(401).json({ message: "You have already liked" })
        }

        const vlogLiked = await Vlog.findByIdAndUpdate(id, {
            $push: {
                likes: req.user
            }
        }, {
            new: true
        })

        return res.status(200).json(vlogLiked)
        
    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }

}

