import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function seed() {
    //#region Device types
    const deviceTypeESP32WROOM32 = await prisma.deviceType.upsert({
        where: { deviceTypeID: 1 },
        update: {},
        create: {
            deviceTypeID: 1,
            name: 'ESP32-WROOM-32'
        }
    });

    const deviceTypeESP32WROOM32WS = await prisma.deviceType.upsert({
        where: { deviceTypeID: 2 },
        update: {},
        create: {
            deviceTypeID: 2,
            name: 'ESP32-WROOM-32-WeatherStation'
        }
    });

    const deviceTypeESP8266 = await prisma.deviceType.upsert({
        where: { deviceTypeID: 3 },
        update: {},
        create: {
            deviceTypeID: 3,
            name: 'ESP8266'
        }
    });

    const deviceTypeArduinoUno = await prisma.deviceType.upsert({
        where: { deviceTypeID: 4 },
        update: {},
        create: {
            deviceTypeID: 4,
            name: 'Arduino-Uno'
        }
    });

    const deviceTypeArduinoMega = await prisma.deviceType.upsert({
        where: { deviceTypeID: 5 },
        update: {},
        create: {
            deviceTypeID: 5,
            name: 'Arduino-Mega'
        }
    });

    console.log({
        deviceTypeESP32WROOM32,
        deviceTypeESP32WROOM32WS,
        deviceTypeESP8266,
        deviceTypeArduinoUno,
        deviceTypeArduinoMega
    });
    //#endregion

    //#region Devices
    const deviceESP32WS = await prisma.device.upsert({
        where: { deviceID: 1 },
        update: {},
        create: {
            deviceID: 1,
            name: 'ESP32 Weather Station 01',
            description: 'ESP32 Weather station',
            identifier: 'ESP32WS01',
            deviceTypeID: 1
        }
    });

    const deviceArduinoUnoTest = await prisma.device.upsert({
        where: { deviceID: 2 },
        update: {},
        create: {
            deviceID: 2,
            name: 'Arduino Uno Test',
            deviceTypeID: 4
        }
    });

    console.log({
        deviceESP32WS,
        deviceArduinoUnoTest
    });
    //#endregion

    await prisma.$disconnect();
}