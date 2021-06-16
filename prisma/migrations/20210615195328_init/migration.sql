-- CreateTable
CREATE TABLE "DeviceType" (
    "deviceTypeID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Device" (
    "deviceID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "identifier" TEXT,
    "deviceTypeID" INTEGER NOT NULL,
    FOREIGN KEY ("deviceTypeID") REFERENCES "DeviceType" ("deviceTypeID") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Datapoint" (
    "datapointID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "deviceID" INTEGER NOT NULL,
    "timestamp" DATETIME NOT NULL,
    "value" REAL NOT NULL,
    FOREIGN KEY ("deviceID") REFERENCES "Device" ("deviceID") ON DELETE CASCADE ON UPDATE CASCADE
);
