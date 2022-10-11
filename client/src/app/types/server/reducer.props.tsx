export type action = {
    type: string;
    payload: any;
}

export type initialStateUser = {
    users: object[];
    user: object;
    isLoggedIn: boolean;
}
export type initialStateVlogs = {
    vlogs: object[];
}