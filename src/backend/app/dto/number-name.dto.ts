import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class NumberNameDto {
    @IsNotEmpty()
    @IsNumber()
    randomNumber: number;

    @IsNotEmpty()
    @IsString()
    name: string;
}
