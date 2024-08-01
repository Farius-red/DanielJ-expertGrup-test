import { User } from '../../entitis/User';

import bcrypt from 'bcryptjs';
import { UserSecondaryAdapter } from '../secundary/userSecondaryAdapter';
import { UserResponses } from '../../../utils/userResponses';
import { ResponseType } from '../../../utils/responseType';

export class UserPrimaryAdapter {
    private userSecondaryAdapter: UserSecondaryAdapter;
    private userResponses: UserResponses<User>;

    constructor(userSecondaryAdapter: UserSecondaryAdapter, userResponses: UserResponses<User>) {
        this.userSecondaryAdapter = userSecondaryAdapter;
        this.userResponses = userResponses;
    }

    async getUser(userId: string) {
        try {
            const user = await this.userSecondaryAdapter.findUserById(userId);
            if (user) {
                return this.userResponses.buildResponse(ResponseType.GET, user.data);
            } else {
                return this.userResponses.buildResponse(ResponseType.NO_ENCONTRADO);
            }
        } catch (error) {
            return this.userResponses.buildResponse(ResponseType.FALLO);
        }
    }

    async createUser(userData: Partial<User>) {
        try {
            const user = await this.userSecondaryAdapter.createUser(userData);
            return this.userResponses.buildResponse(ResponseType.CREATED, user.data);
        } catch (error) {
            return this.userResponses.buildResponse(ResponseType.FALLO);
        }
    }

    async loginUser(email: string, password: string) {
        try {
            const user = await this.userSecondaryAdapter.findUserByEmail(email);
            
            if(user.data?.password){
            if (user && bcrypt.compareSync(password, user.data?.password)) {
                return this.userResponses.buildResponse(ResponseType.USER_LOGEADO, user.data);
            } else {
                return this.userResponses.buildResponse(ResponseType.EMAIL_NO_ENCONTRADO);
            }
        }else{
            return this.userResponses.buildResponse(ResponseType.EMAIL_NO_ENCONTRADO);
        }
        } catch (error) {
            return this.userResponses.buildResponse(ResponseType.FALLO);
        }
    }
}
