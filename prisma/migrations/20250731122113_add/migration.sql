/*
  Warnings:

  - Added the required column `audienceType` to the `TourPackage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nightsCount` to the `TourPackage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `peopleCount` to the `TourPackage` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_TourPackage" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "price" REAL NOT NULL,
    "peopleCount" INTEGER NOT NULL,
    "audienceType" TEXT NOT NULL,
    "nightsCount" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_TourPackage" ("createdAt", "description", "id", "price", "title", "updatedAt") SELECT "createdAt", "description", "id", "price", "title", "updatedAt" FROM "TourPackage";
DROP TABLE "TourPackage";
ALTER TABLE "new_TourPackage" RENAME TO "TourPackage";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
