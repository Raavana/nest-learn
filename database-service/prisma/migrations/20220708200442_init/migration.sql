-- CreateEnum
CREATE TYPE "AssetType" AS ENUM ('IMAGE', 'VIDEO');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('POSTER', 'SUPER_POSTER', 'CREATIVE', 'SUPER_CREATIVE', 'ADMIN');

-- CreateEnum
CREATE TYPE "JobType" AS ENUM ('PHOTO_EDIT', 'VIDEO_EDIT', 'GRAPHIC_DESIGN', 'INTERIOR_DESIGN');

-- CreateEnum
CREATE TYPE "JobStatus" AS ENUM ('CREATED', 'ASSIGNED', 'IN_PROGRESS', 'REQUESTOR_ACTION', 'FINISHED', 'COMPLETE');

-- CreateTable
CREATE TABLE "User" (
    "id" STRING NOT NULL,
    "email" STRING NOT NULL,
    "firstName" STRING,
    "lastName" STRING,
    "role" "Role" NOT NULL,
    "email_verified" BOOL NOT NULL,

    CONSTRAINT "user-primary-key" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" STRING NOT NULL,
    "bio" STRING NOT NULL,
    "userId" STRING NOT NULL,

    CONSTRAINT "profile-primary-key" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Job" (
    "id" STRING NOT NULL,
    "title" STRING NOT NULL,
    "description" STRING,
    "created_by_id" STRING NOT NULL,
    "assigned_to_id" STRING,
    "status" "JobStatus" NOT NULL,
    "type" "JobType" NOT NULL,
    "budget" INT4 NOT NULL,
    "currency" STRING NOT NULL,
    "revision_count" INT4 NOT NULL,
    "revision_notes" STRING,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "job-primary-key" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Asset" (
    "id" STRING NOT NULL,
    "asset_url" STRING NOT NULL,
    "job_id" STRING,
    "asset_type" "AssetType" NOT NULL,
    "asset_description" STRING,

    CONSTRAINT "asset-primary-key" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_assigned_to_id_fkey" FOREIGN KEY ("assigned_to_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asset" ADD CONSTRAINT "Asset_job_id_fkey" FOREIGN KEY ("job_id") REFERENCES "Job"("id") ON DELETE SET NULL ON UPDATE CASCADE;
