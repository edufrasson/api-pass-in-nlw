-- CreateTable
CREATE TABLE "events" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "details" TEXT,
    "slug" TEXT,
    "maximum_attendees" INTEGER
);

-- CreateIndex
CREATE UNIQUE INDEX "events_slug_key" ON "events"("slug");
