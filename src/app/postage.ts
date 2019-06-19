export type PostageStatus = "created" | "sent" | "received";

export class Postage {
    
    id: string;
    registerNumber: string;

    address: string;
    receiver: string;
    contactPhone: string;
    status: PostageStatus;
    
}
