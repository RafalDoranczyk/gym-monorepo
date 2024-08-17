import { Static, Type } from '@sinclair/typebox';

import { MEASUREMENTS_TYPES, MeasurementsSchema } from '../measurements';
import { NutritionGoalsSchema } from '../nutrition-goals';
import { NutritionGroupSchema } from '../nutritionGroup';
import { USERNAME_MAX_LENGTH, USERNAME_MIN_LENGTH } from './consts';
import { CURRENCIES, PALETTE_MODES, USER_ROLES } from './enums';

// User
export const UserSchema = Type.Object({
  createdAt: Type.String({ format: 'date' }),
  email: Type.String({ format: 'email' }),
  id: Type.String({ format: 'uuid' }),
  username: Type.String({
    maxLength: USERNAME_MAX_LENGTH,
    minLength: USERNAME_MIN_LENGTH,
  }),
});

export const UserSettingsSchema = Type.Object({
  activeMeasurementsKeys: Type.Array(Type.Enum(MEASUREMENTS_TYPES)),
  currency: Type.Enum(CURRENCIES),
  palette: Type.Enum(PALETTE_MODES),
});

// GET
export const GetUserResponseSchema = Type.Object({
  eatingDayPlanGroups: Type.Array(NutritionGroupSchema),
  email: UserSchema.properties.email,
  ingredientGroups: Type.Array(NutritionGroupSchema),
  mealGroups: Type.Array(NutritionGroupSchema),
  measurements: MeasurementsSchema,
  nutritionGoals: NutritionGoalsSchema,
  role: Type.Enum(USER_ROLES),
  settings: UserSettingsSchema,
  username: UserSchema.properties.username,
});
export type GetUserResponse = Static<typeof GetUserResponseSchema>;

// UPDATE
export const UpdateUserSettingsPayloadSchema = Type.Partial(UserSettingsSchema);
export type UpdateUserSettingsPayload = Static<typeof UpdateUserSettingsPayloadSchema>;

export const UpdateUserSettingsResponseSchema = Type.Object({
  message: Type.String(),
  settings: UserSettingsSchema,
});
export type UpdateUserSettingsResponse = Static<typeof UpdateUserSettingsResponseSchema>;
