/*
  Warnings:

  - Added the required column `lastName` to the `Client` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Client` ADD COLUMN `lastName` VARCHAR(191) NOT NULL;
