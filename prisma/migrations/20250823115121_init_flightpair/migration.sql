-- CreateTable
CREATE TABLE "FlightPair" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "origin" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    "departureDate" DATETIME NOT NULL,
    "returnDate" DATETIME NOT NULL,
    "departureDay" TEXT NOT NULL,
    "returnDay" TEXT NOT NULL,
    "airline" TEXT NOT NULL,
    "flightNumberOut" TEXT NOT NULL,
    "flightNumberBack" TEXT NOT NULL,
    "fareOut" REAL NOT NULL,
    "fareBack" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
