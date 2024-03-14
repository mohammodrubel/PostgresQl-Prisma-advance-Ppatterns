import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const batchTransaction = async () => {
    const createUser = prisma.user.create({
        data: {
            email: 'pagol@gmail.com', // Corrected email address
            userName: 'pagol'
        }
    });

    const updateUser = prisma.user.update({
        where: {
            id: 3
        },
        data: {
            // Assuming 'age' field exists in your user model
            age: 40
        }
    });

    // Use 'const' instead of 'let' for destructuring assignment
    const [createdUser, updatedUser] = await prisma.$transaction([
        createUser,
        updateUser
    ]);

    console.log(createdUser, updatedUser);
};

batchTransaction();
