-- CreateTable
CREATE TABLE "DeviceType" (
    "deviceTypeID" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    PRIMARY KEY ("deviceTypeID")
);

-- CreateTable
CREATE TABLE "Device" (
    "deviceID" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "identifier" TEXT,
    "deviceTypeID" INTEGER NOT NULL,

    PRIMARY KEY ("deviceID")
);

-- CreateTable
CREATE TABLE "Sensor" (
    "sensorID" SERIAL NOT NULL,
    "deviceID" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "unit" TEXT,

    PRIMARY KEY ("sensorID")
);

-- CreateTable
CREATE TABLE "Datapoint" (
    "datapointID" SERIAL NOT NULL,
    "sensorID" INTEGER NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,

    PRIMARY KEY ("datapointID")
);

-- AddForeignKey
ALTER TABLE "Device" ADD FOREIGN KEY ("deviceTypeID") REFERENCES "DeviceType"("deviceTypeID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sensor" ADD FOREIGN KEY ("deviceID") REFERENCES "Device"("deviceID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Datapoint" ADD FOREIGN KEY ("sensorID") REFERENCES "Sensor"("sensorID") ON DELETE CASCADE ON UPDATE CASCADE;
