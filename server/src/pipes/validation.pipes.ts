import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { ValidationException } from "../exception/validation.exception";

@Injectable()
export class ValidationPipe implements PipeTransform {
    async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
        if (!metadata.metatype) {
            return value;
        }

        const obj = plainToClass(metadata.metatype, value);

        const errors = await validate(obj);

        if (errors.length > 0) {
            let message = errors.map((error) => {
                const constraints = error.constraints || {};
                return `${error.property} - ${Object.values(constraints).join(', ')}`;
            });
            throw new ValidationException(message);
        }

        return value;
    }
}