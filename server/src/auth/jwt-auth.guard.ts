import {JwtService} from "@nestjs/jwt";
import {CanActivate, ExecutionContext, UnauthorizedException} from "@nestjs/common";
import {Observable} from "rxjs";


export class JwtAuthGuard implements CanActivate {
    constructor(private jwtService: JwtService) {
    }

    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {

        const req = context.switchToHttp().getRequest();
        try {
            const auth = req.headers.authorization;
            const bearer = auth.split(" ")[0];
            const token = auth.split(" ")[1];

            if (bearer != "Bearer" && !token) {
                throw new UnauthorizedException({message: "User not correctly"});
            }

            const user = this.jwtService.sign(token);
            req.user = user;
            return true;
        } catch (e) {
            throw new UnauthorizedException({message: "User not authorized"});
        }
    }
}