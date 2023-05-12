export default interface Drug{
    name: string;
    price: number;
    brand: boolean;
    alternatives?: Drug[];
}