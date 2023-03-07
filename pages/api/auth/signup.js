import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { hashPassword } from '../../../lib/auth';

async function handler(req, res) {
    // Loading prisma client
    let prisma = new PrismaClient();

    if (req.method !== 'POST') {
        return;
    }

    const data = req.body;

    const { name, email, password, passwordChack, nickname } = data;


    if (
        !name ||
        !email ||
        !email.includes('@') ||
        !password ||
        password.trim().length < 7

    ) {
        res.status(422).json({
            message:
                '비밀번호는 7자 이상이어야 합니다.',
            error: true,
        });
        return;
    }

    if (
        !name ||
        !email ||
        !email.includes('@') ||
        !password ||
        password !== passwordChack
    ) {
        res.status(422).json({
            message:
                '비밀번호를 동일하게 입력하세요.',
            error: true,
        });
        return;
    }
    const existingUser = await prisma.users.findUnique({
        where: {
            email: email,
        },
        select: {
            email: true, name: true,
        }
    }
    );

    if (existingUser) {
        res.status(422).json({ message: '이메일이 이미 존재합니다.', error: true });
        return;
    }

    const hashedPassword = await hashPassword(password);

    const result = await prisma.users.create({
        data: {
            name: name,
            email: email,
            nickname : nickname,
            password: hashedPassword,
        },
    });

    if (result) {
        res.status(201).json({ message: 'Created user!', error: false });
    } else {
        res.status(422).json({ message: 'Prisma error occured', error: true })
    }

}

export default handler;