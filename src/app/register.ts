export type RegisterStatus = "created" | "sent" | "blocked";

export class Register {

    // id реестра = registerNumber для отправления
    id: string;

    sender: string;
    senderPhone: string;
    status: RegisterStatus;

}