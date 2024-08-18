import { Static, Type } from '@sinclair/typebox';

import { INGREDIENT_MIN_NUMBER } from '../ingredient';

// Goals schema
export const NutritionGoalsSchema = Type.Object({
  calories: Type.Number({
    minimum: INGREDIENT_MIN_NUMBER,
  }),
  carbs: Type.Number({
    minimum: INGREDIENT_MIN_NUMBER,
  }),
  createdAt: Type.String({ format: 'date' }),
  fat: Type.Number({
    minimum: INGREDIENT_MIN_NUMBER,
  }),
  id: Type.Integer(),
  protein: Type.Number({
    minimum: INGREDIENT_MIN_NUMBER,
  }),
});
export type NutritionGoals = Static<typeof NutritionGoalsSchema>;

// GET
export const GetNutritionGoalsResponseSchema = Type.Object({
  nutritionGoals: Type.Array(NutritionGoalsSchema),
});
export type GetNutritionGoalsResponse = Static<typeof GetNutritionGoalsResponseSchema>;

// SET
export const SetNutritionGoalsPayloadSchema = Type.Omit(NutritionGoalsSchema, ['id']);
export type SetNutritionGoalsPayload = Static<typeof SetNutritionGoalsPayloadSchema>;

export const SetNutritionGoalsResponseSchema = Type.Object({
  message: Type.String(),
  nutritionGoals: NutritionGoalsSchema,
});
export type SetNutritionGoalsResponse = Static<typeof SetNutritionGoalsResponseSchema>;

// REMOVE
export const RemoveNutritionGoalsPayloadSchema = Type.Object({
  createdAt: NutritionGoalsSchema.properties.createdAt,
});
export type RemoveNutritionGoalsPayload = Static<
  typeof RemoveNutritionGoalsPayloadSchema
>;

export const RemoveNutritionGoalsResponseSchema = Type.Object({
  createdAt: NutritionGoalsSchema.properties.createdAt,
  message: Type.String(),
});
export type RemoveNutritionGoalsResponse = Static<
  typeof RemoveNutritionGoalsResponseSchema
>;
