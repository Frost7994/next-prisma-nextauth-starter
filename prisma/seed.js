const questions = require("./output.json");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
    for (let question of questions) {
        await prisma.question.create({
            data: question,
        });
    }
}

main()
    .catch((e) => {
        console.log(e);
        process.exit(1);
    })
    .finally(() => {
        prisma.$disconnect();
    });
