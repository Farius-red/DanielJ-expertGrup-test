import { PlantillaResponse } from '../../../utils/plantillaResponse';
import { ResponseType } from '../../../utils/responseType';
import { UserResponses } from '../../../utils/userResponses';
import { User } from '../../entitis/User';
import { Repository } from 'typeorm';

export class UserSecondaryAdapter {
    private userRepository: Repository<User>;
    private userResponses: UserResponses<User>;


    constructor(userRepository: Repository<User>) {
        this.userRepository = userRepository;
        this.userResponses = new UserResponses<User>();
    }

    async findUserById(userId: string): Promise<PlantillaResponse<User>> {
        try {
            if (!userId) {
                return this.userResponses.buildResponse(ResponseType.FALLO, undefined, undefined);
            }

            const user = await this.userRepository.findOneBy({ id: userId });

            if (!user) {
                return this.userResponses.buildResponse(ResponseType.NO_ENCONTRADO, undefined, undefined);
            }

            return this.userResponses.buildResponse(ResponseType.USER_ISFOUND, user, undefined);
        } catch (error) {
            console.error('Error finding user by ID:', error);
            return this.userResponses.buildResponse(ResponseType.FALLO, undefined, undefined);
        }
    }

    async createUser(userData: Partial<User>): Promise<PlantillaResponse<User>> {
        try {
            if (!userData.username || !userData.password || !userData.email) {
                return this.userResponses.buildResponse(ResponseType.FALLO_CREATE_DATOS_USER, undefined, undefined);
            }

            const user = this.userRepository.create(userData);
            const savedUser = await this.userRepository.save(user);
              if(savedUser){
            return this.userResponses.buildResponse(ResponseType.CREATED, savedUser, undefined);
              }
              else{
                console.error('Error creating user:', savedUser);
                return this.userResponses.buildResponse(ResponseType.FALLO, undefined, undefined);
              }
        } catch (error) {
            console.error('Error creating user:', error);
            return this.userResponses.buildResponse(ResponseType.FALLO, undefined, undefined);
        }
    }
    
    async findUserByEmail(email: string): Promise<PlantillaResponse<User>> {
        try {
            if (!email) {
                return this.userResponses.buildResponse(ResponseType.EMAIL_VALIDATION_FAIL);
            }

            const user = await this.userRepository.findOneBy({ email });

            if (!user) {
                return this.userResponses.buildResponse(ResponseType.EMAIL_NO_ENCONTRADO);
            }

            return this.userResponses.buildResponse(ResponseType.USER_ISFOUND, user);
        } catch (error) {
            console.error('Error finding user by email:', error);
            return this.userResponses.buildResponse(ResponseType.FALLO);
        }
    }

}

