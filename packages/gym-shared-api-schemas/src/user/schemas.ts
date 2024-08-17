import { Static, Type } from "@sinclair/typebox";
import { USERNAME_MAX_LENGTH, USERNAME_MIN_LENGTH } from "./consts";
import { CURRENCIES, PALETTE_MODES, USER_ROLES } from "./enums";
import { MEASUREMENTS_TYPES, MeasurementsSchema } from "../measurements";
import { NutritionGroupSchema } from "../nutritionGroup";
import { NutritionGoalsSchema } from "../nutrition-goals";

// User
export const UserSchema = Type.Object({
  id: Type.String({ format: "uuid" }),
  createdAt: Type.String({ format: "date" }),
  email: Type.String({ format: "email" }),
  username: Type.String({
    minLength: USERNAME_MIN_LENGTH,
    maxLength: USERNAME_MAX_LENGTH,
  }),
});

export const UserSettingsSchema = Type.Object({
  palette: Type.Enum(PALETTE_MODES),
  currency: Type.Enum(CURRENCIES),
  activeMeasurementsKeys: Type.Array(Type.Enum(MEASUREMENTS_TYPES)),
});

// GET
export const GetUserResponseSchema = Type.Object({
  username: UserSchema.properties.username,
  email: UserSchema.properties.email,
  role: Type.Enum(USER_ROLES),
  settings: UserSettingsSchema,
  ingredientGroups: Type.Array(NutritionGroupSchema),
  mealGroups: Type.Array(NutritionGroupSchema),
  eatingDayPlanGroups: Type.Array(NutritionGroupSchema),
  nutritionGoals: NutritionGoalsSchema,
  measurements: MeasurementsSchema,
});
export type GetUserResponse = Static<typeof GetUserResponseSchema>;

// UPDATE
export const UpdateUserSettingsPayloadSchema = Type.Partial(UserSettingsSchema);
export type UpdateUserSettingsPayload = Static<
  typeof UpdateUserSettingsPayloadSchema
>;

export const UpdateUserSettingsResponseSchema = Type.Object({
  settings: UserSettingsSchema,
  message: Type.String(),
});
export type UpdateUserSettingsResponse = Static<
  typeof UpdateUserSettingsResponseSchema
>;
