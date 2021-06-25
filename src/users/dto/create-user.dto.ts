import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsEmail, IsNumber, IsString } from "class-validator";

export class CreateUserDto {
    @IsDate()
    @ApiProperty({
        example: new Date().toJSON(),
        description: 'Creation date of the user.',
        required: false
    })
    readonly createdAt: Date;

    @IsDate()
    @ApiProperty({
        example: new Date().toJSON(),
        description: 'Last update date of the user.',
        required: false
    })
    readonly updatedAt: Date;

    @IsString()
    @ApiProperty({
        example: 'John',
        description: 'Firstname of the user.',
        required: true
    })
    readonly firstName: string;

    @IsString()
    @ApiProperty({
        example: 'Doe',
        description: 'Lastname of the user.',
        required: true
    })
    readonly lastName: string;

    @IsString()
    @ApiProperty({
        example: 'johndoe',
        description: 'Username of the user.',
        required: true
    })
    readonly username: string;

    @IsEmail()
    @ApiProperty({
        example: 'john@doe.com',
        description: 'Email of the user.',
        required: false
    })
    readonly email: string;

    @IsString()
    @ApiProperty({
        example: 'thisisaweakpassword',
        description: 'Password of the user.',
        required: true
    })
    readonly password: string;

    @IsString()
    @ApiProperty({
        example: 'user',
        description: 'Role of the user.',
        required: true
    })
    readonly role: string;
}
