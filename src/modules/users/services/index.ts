import { AuthService } from "./authService";
import { UserService } from "./userService";

const authService = new AuthService();
const userService = new UserService(authService);

export { authService, userService };
