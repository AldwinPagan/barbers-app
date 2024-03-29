import { left, right } from "../../../shared/core/Either";
import { Result } from "../../../shared/core/Result";
import { APIResponse } from "../../../shared/infra/services/ApiResponse";
import { BaseAPI } from "../../../shared/infra/services/BaseAPI";
import { LoginDTO } from "../dtos/LoginDTO";
import { IAuthService } from "./authService";

export interface IUserService {
  login(username: string, password: string): Promise<APIResponse<LoginDTO>>;
  logout(): Promise<APIResponse<void>>;
}

export class UserService extends BaseAPI implements IUserService {
  public constructor(authService: IAuthService) {
    super(authService);
  }

  public async login(
    username: string,
    password: string
  ): Promise<APIResponse<LoginDTO>> {
    try {
      const response = await this.post("/api/users/login/1", {
        username,
        password,
      });
      const dto: LoginDTO = response.data as LoginDTO;
      this.authService.setToken("access-token", dto.accessToken);
      this.authService.setToken("refresh-token", dto.refreshToken);
      return right(Result.ok<LoginDTO>(dto));
    } catch (err) {
      console.log(err);
      return left(
        err.response ? err.response.data.message : "Connection failed"
      );
    }
  }
  public async logout(): Promise<APIResponse<void>> {
    try {
      await this.post("/users/logout", null, null, {
        authorization: this.authService.getToken("access-token"),
      });
      this.authService.removeToken("access-token");
      this.authService.removeToken("refresh-token");
      return right(Result.ok<void>());
    } catch (err) {
      return left(
        err.response ? err.response.data.message : "Connection failed"
      );
    }
  }
}
