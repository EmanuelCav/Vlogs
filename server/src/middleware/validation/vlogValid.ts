import { Request, Response, NextFunction } from "express";

const vlogValid = (req: Request, res: Response, next: NextFunction) => {

    const { title, description, information } = req.body;

    try {

        if(!title || !description || !information) {
            return res.status(400).json({ message: "There are empty fields" })
        }

        if(!req.files) {
            return res.status(400).json({ message: "Try to upload at least 1 image" })
        }

        if(title.length > 80) {
            return res.status(400).json({ message: "Title must be less than 80 charactes" })
        }

        if(description.length > 200) {
            return res.status(400).json({ message: "Description must be less than 200 charactes" })
        }

        if(req.files.length > 10) {
            return res.status(400).json({ message: "You cannot upload more than 10 images" })
        }

        next();
        
    } catch (error) {
        console.log(error);
    }

}

export default vlogValid