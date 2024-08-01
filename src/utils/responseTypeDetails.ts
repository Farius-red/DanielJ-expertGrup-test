import { HttpStatus } from "@nestjs/common";

export interface ResponseTypeDetails {

    message: string;
    rta: boolean;
    httpStatus: HttpStatus;
}