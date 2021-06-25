import * as bcrypt from "bcrypt";
import { PrismaClient, Role } from "@prisma/client";
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

    //#region Sensors
    const sensor1DeviceESP32WS = await prisma.sensor.upsert({
        where: { sensorID: 1 },
        update: {},
        create: {
            sensorID: 1,
            deviceID: 1,
            name: 'Temperature',
            unit: '°C'
        }
    });

    const sensor2DeviceESP32WS = await prisma.sensor.upsert({
        where: { sensorID: 2 },
        update: {},
        create: {
            sensorID: 2,
            deviceID: 1,
            name: 'Pressure',
            unit: 'hPa'
        }
    });

    const sensor3DeviceESP32WS = await prisma.sensor.upsert({
        where: { sensorID: 3 },
        update: {},
        create: {
            sensorID: 3,
            deviceID: 1,
            name: 'Humidity',
            unit: '%'
        }
    });

    const sensor4DeviceESP32WS = await prisma.sensor.upsert({
        where: { sensorID: 4 },
        update: {},
        create: {
            sensorID: 4,
            deviceID: 1,
            name: 'Battery level',
            unit: '%'
        }
    });

    console.log({
        sensor1DeviceESP32WS,
        sensor2DeviceESP32WS,
        sensor3DeviceESP32WS,
        sensor4DeviceESP32WS
    });
    //#endregion

    //#region Users
    const user1 = await prisma.user.upsert({
        where: { userID: 1 },
        update: {},
        create: {
            userID: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
            firstName: "Jonas",
            lastName: "Claes",
            username: "jonasclaes",
            email: null,
            passwordHash: await bcrypt.hash("thisisaweakpassword", 12),
            role: Role.ADMIN
        }
    });

    const user2 = await prisma.user.upsert({
        where: { userID: 2 },
        update: {},
        create: {
            userID: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
            firstName: "John",
            lastName: "Doe",
            username: "johndoe",
            email: null,
            passwordHash: await bcrypt.hash("anotherweakpassword", 12),
            role: Role.USER
        }
    });

    console.log({
        user1,
        user2
    });
    //#endregion

    await prisma.$disconnect();
}