-- CreateTable
CREATE TABLE "TourHighlight" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "text" TEXT NOT NULL,
    "tourPackageId" INTEGER NOT NULL,
    CONSTRAINT "TourHighlight_tourPackageId_fkey" FOREIGN KEY ("tourPackageId") REFERENCES "TourPackage" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
