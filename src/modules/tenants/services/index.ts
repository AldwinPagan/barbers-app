import { TenantService } from "./tenantService";
import { authService } from "../../users/services";

const tenantService = new TenantService(authService);

export {
    tenantService
}
