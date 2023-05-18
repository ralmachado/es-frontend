import Alternative from "./Alternative";

export default interface Drug{
    name: string;
    price: number;
    brand: boolean;
    alternatives: Alternative[];
}