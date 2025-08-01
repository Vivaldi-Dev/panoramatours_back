/*
  Warnings:

  - You are about to drop the column `audienceType` on the `TourPackage` table. All the data in the column will be lost.
  - You are about to drop the column `nightsCount` on the `TourPackage` table. All the data in the column will be lost.
  - You are about to drop the column `peopleCount` on the `TourPackage` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_TourPackage" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "price" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_TourPackage" ("createdAt", "description", "id", "price", "title", "updatedAt") SELECT "createdAt", "description", "id", "price", "title", "updatedAt" FROM "TourPackage";
DROP TABLE "TourPackage";
ALTER TABLE "new_TourPackage" RENAME TO "TourPackage";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
