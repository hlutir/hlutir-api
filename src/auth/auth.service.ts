import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IUser, UsersService } from '@hlutir/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService
    ) {}

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.usersService.findOneByUsername(username);

        if (user && await bcrypt.compare(password, user.passwordHash)) {
            const { passwordHash, ...result } = user;

            return result;
        }

        return null;
    }

    async login(user: IUser) {
        const payload = { username: user.username, sub: user.userID };

        return {
            access_token: this.jwtService.sign(payload)
        };
    }
}
