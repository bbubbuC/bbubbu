import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { hashPassword } from '../../../lib/auth';

async function handler(req, res) {
    // Loading prisma client
    let prisma = new PrismaClient();
    console.log(req.body)

    if (req.method === 'POST') {
        const data = req.body;

        const { name, email, password, passwordChack, nickname } = data;


        if (
            // !name ||
            // !email ||
            // !email.includes('@') ||
            // !password ||
            password.trim().length < 4

        ) {
            res.status(422).json({
                message:
                    '비밀번호는 4자 이상이어야 합니다.',
                error: true,
            });
            return;
        }

        if (
            // !name ||
            // !email ||
            // !email.includes('@') ||
            // !password ||
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

        const idChack = await prisma.users.findUnique({
            where: {
                name: name,
            },
        });
        if (idChack) {
            res.status(422).json({ message: '아이디가 이미 존재합니다.', error: true });
            return;
        }

        const hashedPassword = await hashPassword(password);

        const result = await prisma.users.create({
            data: {
                name: name,
                email: email,
                nickname: nickname,
                password: hashedPassword,
            },
        });

        if (result) {
            res.status(201).json({ message: 'Created user!', error: false });
        } else {
            res.status(422).json({ message: 'Prisma error occured', error: true })
        }

    }

    if (req.method === 'GET') {

        try{
            const user = await prisma.users.findUnique({
                where: {
                    name: req.query.id
                }
            })
            if(user){
                res.json({message: '이미 등록된 아이디 입니다.'})
            }
            else{
                res.json({message: '사용 가능한 아이디 입니다.'})
            }
        }
        catch(err){
            res.send(err);
        }
        


    }
}



export default handler; 