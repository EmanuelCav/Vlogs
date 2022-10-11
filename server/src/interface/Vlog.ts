import { Document } from "mongoose";

export interface IVlog extends Document {
    title: string;
    description: string;
    information: string;
    images: object[];
    userId: number;
    likes: number[];
}