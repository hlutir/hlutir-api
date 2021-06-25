import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService
    ) {}

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.usersService.findOne({ username });

        if (user && await bcrypt.compare(password, user.passwordHash)) {
            const { passwordHash, ...result } = user;

            return result;
        }

        return null;
    }

    async login(user: User) {
        const payload = { username: user.username, sub: user.userID };

        return {
            access_token: this.jwtService.sign(payload)
        };
    }
}
