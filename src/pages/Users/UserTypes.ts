export type User = {
    id?: number;
    name: string;
    email: string;
    role: string;
    password?: string;
    service?: {
        id: number;
        name?: string;
        department?: {
            id: number,
            name: string
        };
    };
    isActivated: boolean;
}