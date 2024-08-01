import express from 'express';

import { UserPrimaryAdapter } from '../../infraestructure/adapters/primary/userPrimaryAdapter';
import { User } from '../../infraestructure/entitis/User';
import { UserSecondaryAdapter } from '../../infraestructure/adapters/secundary/userSecondaryAdapter';
import { AppDataSource } from '../../utils/data-source';
import { UserResponses } from '../../utils/userResponses';


const userSecondaryAdapter = new UserSecondaryAdapter(AppDataSource.getRepository(User));
const userResponses = new UserResponses<User>();
const userPrimaryAdapter = new UserPrimaryAdapter(userSecondaryAdapter, userResponses);


const router = express.Router();

/**
 * @openapi
 * /api/users/login:
 *   get:
 *     summary: Login a user
 *     description: Verifies the existence of a user and validates the password.
 *     parameters:
 *       - in: query
 *         name: email
 *         required: true
 *         schema:
 *           type: string
 *       - in: query
 *         name: password
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful login
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/User'
 *                 rta:
 *                   type: boolean
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Internal server error
 */

router.get('/login', async (req, res) => {
    const { email, password } = req.query;

    if (typeof email !== 'string' || typeof password !== 'string') {
        return res.status(400).json({ message: 'Invalid input' });
    }

    const response = await userPrimaryAdapter.loginUser(email, password);
    res.status((response.httpStatus)?response.httpStatus: 200).json(response);
});


/**
 * @openapi
 * /api/users/add:
 *   post:
 *     summary: Register a new user
 *     description: Registers a new user with the provided data.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/User'
 *                 rta:
 *                   type: boolean
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Internal server error
 */
router.post('/add', async (req, res) => {
    const { username, password, email } = req.body;

    if (!username || !password || !email) {
        return res.status(400).json({ message: 'algun parametro no esta escritro' });
    }
    const response = await userPrimaryAdapter.createUser({ username, password, email });
    res.status((response.httpStatus)?response.httpStatus: 201).json(response);
});

export default router;
