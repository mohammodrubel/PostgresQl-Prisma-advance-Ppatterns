import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const interactiveTransection = async () => {
    const result = prisma.$transaction(async (tx) => {
        // query One 
        const getAllPost = await tx.post.findMany({
            where: {
                published: true
            }
        })
        // query two 
        const counter = await tx.user.count();
        // query three 
        const updateUser = await tx.user.update({
            where: {
                id: 3
            },
            data: {
                age: 49
            }
        })
        return {
            getAllPost,
            counter,
            updateUser
        }
    })
    console.log(await result)
}

interactiveTransection()