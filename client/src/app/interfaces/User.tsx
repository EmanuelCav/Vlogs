export interface IUserL {
    email: string;
    password: string;
}
export interface IUserR {
    nickname: string;
    email: string;
    password: string;
    confirm: string;
}
export interface IUser {
    id: number;
    nickname: string;
    email: string;
    password: string;
    confirm: string;
    created: string;
}