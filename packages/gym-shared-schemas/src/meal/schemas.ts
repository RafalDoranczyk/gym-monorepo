import { Static, Type } from '@sinclair/typebox';

import { IngredientSchema } from '../ingredient/schemas';
import { NutritionGroupSchema } from '../nutritionGroup';
import {
  MEAL_DESCRIPTION_MAX_LENGTH,
  MEAL_NAME_MAX_LENGTH,
  MEAL_NAME_MIN_LENGTH,
} from './consts';

// Meal
export const MealIngredientSchema = Type.Object({
  id: Type.Number(),
  ingredient: IngredientSchema,
  multiplier: Type.Number(),
});
export type MealIngredient = Static<typeof MealIngredientSchema>;

export const MealSchema = Type.Object({
  createdAt: Type.String({ format: 'date' }),
  description: Type.Optional(
    Type.String({
      maxLength: MEAL_DESCRIPTION_MAX_LENGTH,
    }),
  ),
  group: NutritionGroupSchema,
  id: Type.Integer(),
  ingredients: Type.Array(MealIngredientSchema),
  name: Type.String({
    maxLength: MEAL_NAME_MAX_LENGTH,
    minLength: MEAL_NAME_MIN_LENGTH,
  }),
});
export type Meal = Static<typeof MealSchema>;

// GET
export const GetMealsPayloadSchema = Type.Object({
  group: Type.Optional(NutritionGroupSchema.properties.name),
});
export type GetMealsPayload = Static<typeof GetMealsPayloadSchema>;

export const GetMealsResponseSchema = Type.Object({
  meals: Type.Array(MealSchema),
  total: Type.Number(),
});
export type GetMealsResponse = Static<typeof GetMealsResponseSchema>;

export const GetSingleMealPayloadSchema = Type.Object({
  id: MealSchema.properties.id,
});
export type GetSingleMealPayload = Static<typeof GetSingleMealPayloadSchema>;

export const GetSingleMealResponseSchema = Type.Object({
  meal: MealSchema,
});
export type GetSingleMealResponse = Static<typeof GetSingleMealResponseSchema>;

// CREATE
export const CreateMealPayloadSchema = Type.Object({
  description: MealSchema.properties.description,
  group: NutritionGroupSchema.properties.name,
  ingredients: Type.Array(Type.Omit(MealIngredientSchema, ['ingredient'])),
  name: MealSchema.properties.name,
});
export type CreateMealPayload = Static<typeof CreateMealPayloadSchema>;

export const CreateMealResponseSchema = Type.Object({
  meal: MealSchema,
  message: Type.String(),
});
export type CreateMealResponse = Static<typeof CreateMealResponseSchema>;

// UPDATE
export const UpdateMealPayloadSchema = Type.Object({
  ...CreateMealPayloadSchema.properties,
  id: MealSchema.properties.id,
});
export type UpdateMealPayload = Static<typeof UpdateMealPayloadSchema>;

export const UpdateMealResponseSchema = CreateMealResponseSchema;
export type UpdateMealResponse = Static<typeof UpdateMealResponseSchema>;

// REMOVE
export const RemoveMealPayloadSchema = Type.Object({
  id: MealSchema.properties.id,
});
export type RemoveMealPayload = Static<typeof RemoveMealPayloadSchema>;

export const RemoveMealResponseSchema = Type.Object({
  id: MealSchema.properties.id,
  message: Type.String(),
});
export type RemoveMealResponse = Static<typeof RemoveMealResponseSchema>;
