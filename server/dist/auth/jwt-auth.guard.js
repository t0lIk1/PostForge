"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtAuthGuard = void 0;
const common_1 = require("@nestjs/common");
class JwtAuthGuard {
    jwtService;
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    canActivate(context) {
        const req = context.switchToHttp().getRequest();
        try {
            const auth = req.headers.authorization;
            const bearer = auth.split(" ")[0];
            const token = auth.split(" ")[1];
            if (bearer != "Bearer" && !token) {
                throw new common_1.UnauthorizedException({ message: "User not correctly" });
            }
            const user = this.jwtService.sign(token);
            req.user = user;
            return true;
        }
        catch (e) {
            throw new common_1.UnauthorizedException({ message: "User not authorized" });
        }
    }
}
exports.JwtAuthGuard = JwtAuthGuard;
//# sourceMappingURL=jwt-auth.guard.js.map