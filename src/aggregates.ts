import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

// avarage
const aggregate = async () => {
    const avg = await prisma.user.aggregate({
        _avg: {
            age: true
        }
    })
    // console.log(avg)
}

// aggregate()


const sumAge = async () => {
    const totalAge = await prisma.user.aggregate({
        _sum: {
            age: true
        }
    })
    // console.log(totalAge)
}

sumAge()

// Minimum age
const MinAge = async () => {
    const minimumAge = await prisma.user.aggregate({
        _min: {
            age: true
        }
    })
    // console.log(minimumAge)
}

MinAge()

// meximum age
const MexAge = async () => {
    const meximumAge = await prisma.user.aggregate({
        _max: {
            age: true
        }
    })
    // console.log(meximumAge)
}

MexAge()
// count age
const CountData = async () => {
    const countInfo = await prisma.user.aggregate({
        _count: {
            age: true // count of age
        }
    })
    // console.log(countInfo)

    const totalCount = await prisma.user.count() // find number of record
    // console.log(totalCount)
}

CountData()


const totalTitle = async () => {
    const titleData = await prisma.post.aggregate({
        _count: {
            title: true
        },
        where: {
            published: true
        }
    })
    console.log(titleData)

}
totalTitle()