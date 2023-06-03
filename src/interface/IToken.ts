import { Address } from "viem";

export default interface IToken {
    address: Address;
    amount: number;
}
