/*
  Warnings:

  - Added the required column `doors` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `engine` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fuel` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mileage` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `seats` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transmission` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `Car` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Car" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "model" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "mileage" INTEGER NOT NULL,
    "fuel" TEXT NOT NULL,
    "engine" TEXT NOT NULL,
    "seats" INTEGER NOT NULL,
    "doors" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "transmission" TEXT NOT NULL,
    "price" REAL NOT NULL
);
INSERT INTO "new_Car" ("createdAt", "description", "id", "image", "model") SELECT "createdAt", "description", "id", "image", "model" FROM "Car";
DROP TABLE "Car";
ALTER TABLE "new_Car" RENAME TO "Car";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
