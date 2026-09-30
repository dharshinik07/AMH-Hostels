export type TenantType = "Student" | "Working Professional" | "Job Seeker" | "Other";
export type FoodOption = "With Food" | "Without Food";
export type TenantStatus = "Active" | "Inactive" | "Moved Out" | "Notice Period";

export interface Tenant {
  id: string;
  name: string;
  phone: string;
  email: string;
  tenantType: TenantType;
  branchId: string;
  roomId: string;
  bedId: string;
  foodOption: FoodOption;
  moveInDate: string;
  status: TenantStatus;
}
