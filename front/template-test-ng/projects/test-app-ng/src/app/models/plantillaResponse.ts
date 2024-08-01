import { HttpStatus } from '@nestjs/common';

export class PlantillaResponse<E> {
  rta?:boolean;
  message?: string;
  httpStatus?: HttpStatus;
  data?: E;
  dataList?: E[];
}
