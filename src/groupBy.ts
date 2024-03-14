import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const groupInfo = async () => {
    const ourtGroup = await prisma.post.groupBy({
        by: ['published'],
        _count: {
            title: true
        },

        having: {
            published: true
        }
        // having: {
        //     userId: {
        //         _sum: {
        //             gt: 1
        //         }
        //     }
        // }

    })
    console.log(ourtGroup)
}

groupInfo()