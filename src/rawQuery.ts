import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const rawQuery = async () => {
    // const post = await prisma.$queryRaw`SELECT * FROM "post" WHERE true `

    // console.log(post)

    // delete table data raw query 
    await prisma.$queryRaw`TRUNCATE TABLE "category" CASCADE`
}

rawQuery()
