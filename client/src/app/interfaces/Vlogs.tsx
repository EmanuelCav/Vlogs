export interface IVlog {
    _id: number;
    title: string;
    description: string;
    information: string;
    images: string[];
    userId: number;
    likes: number[];
}