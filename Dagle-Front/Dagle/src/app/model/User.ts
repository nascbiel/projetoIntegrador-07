import { Produto } from "./Produto";

export class User{
    public id: number;
    public nome: string;
    public senha: string;
    public email: string;
    public produto: Produto[] 
}