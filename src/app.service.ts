import { Inject, Injectable, OnApplicationBootstrap, OnApplicationShutdown } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService implements OnApplicationBootstrap, OnApplicationShutdown {
    constructor(@Inject('HLUTIR_MICROSERVICE') private client: ClientProxy) { }

    async onApplicationBootstrap() {
        await this.client.connect();
    }
    
    async onApplicationShutdown(signal?: string) {
        await this.client.close();
    }

    getHello(): string {
        return 'Hello World!';
    }
}
