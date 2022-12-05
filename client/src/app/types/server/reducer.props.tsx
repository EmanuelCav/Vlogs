export type action = {
    type: string;
    payload: any;
}

export type initialStateUser = {
    users: object[];
    user: object;
    getUser: object;
    isLoggedIn: boolean;
}
export type initialStateVlogs = {
    vlogs: object[];
    vlog: object;
    amount: number;
}
export type initialStateResponse = {
    errorLogin: string;
    errorRegister: string;
    errorCreate: string;
    successRemove: string;
    loading: boolean;
}