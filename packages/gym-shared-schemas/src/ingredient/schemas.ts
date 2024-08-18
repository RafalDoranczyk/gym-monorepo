import { Static, Type } from '@sinclair/typebox';

import { NutritionGroupSchema } from '../nutritionGroup';
import {
  INGREDIENT_MAX_NUMBER,
  INGREDIENT_MIN_NUMBER,
  INGREDIENT_NAME_MAX_LENGTH,
  INGREDIENT_NAME_MIN_LENGTH,
} from './consts';
import { INGREDIENT_COUNT_TYPES } from './enums';

// Ingredient
export const IngredientPriceSchema = Type.Object({
  createdAt: Type.String({ format: 'date' }),
  id: Type.Integer(),
  price: Type.Number({ minimum: INGREDIENT_MIN_NUMBER }),
});
export type IngredientPrice = Static<typeof IngredientPriceSchema>;

export const IngredientSchema = Type.Object({
  calories: Type.Number({
    maximum: INGREDIENT_MAX_NUMBER,
    minimum: INGREDIENT_MIN_NUMBER,
  }),
  carbs: Type.Number({
    maximum: INGREDIENT_MAX_NUMBER,
    minimum: INGREDIENT_MIN_NUMBER,
  }),
  countType: Type.Enum(INGREDIENT_COUNT_TYPES),
  createdAt: Type.String({ format: 'date' }),
  fat: Type.Number({
    maximum: INGREDIENT_MAX_NUMBER,
    minimum: INGREDIENT_MIN_NUMBER,
  }),
  group: NutritionGroupSchema,
  id: Type.Integer(),
  name: Type.String({
    maxLength: INGREDIENT_NAME_MAX_LENGTH,
    minLength: INGREDIENT_NAME_MIN_LENGTH,
  }),
  prices: Type.Array(IngredientPriceSchema),
  protein: Type.Number({
    maximum: INGREDIENT_MAX_NUMBER,
    minimum: INGREDIENT_MIN_NUMBER,
  }),
});
export type Ingredient = Static<typeof IngredientSchema>;

// GET
export const GetIngredientsPayloadSchema = Type.Object({
  group: Type.Optional(NutritionGroupSchema.properties.name),
});
export type GetIngredientsPayload = Static<typeof GetIngredientsPayloadSchema>;

export const GetIngredientsResponseSchema = Type.Object({
  ingredients: Type.Array(IngredientSchema),
  total: Type.Number(),
});
export type GetIngredientsResponse = Static<typeof GetIngredientsResponseSchema>;

// CREATE
export const CreateIngredientPayloadSchema = Type.Object({
  calories: IngredientSchema.properties.calories,
  carbs: IngredientSchema.properties.carbs,
  countType: Type.Enum(INGREDIENT_COUNT_TYPES),
  fat: IngredientSchema.properties.fat,
  group: NutritionGroupSchema.properties.name,
  name: IngredientSchema.properties.name,
  price: IngredientPriceSchema.properties.price,
  protein: IngredientSchema.properties.protein,
});
export type CreateIngredientPayload = Static<typeof CreateIngredientPayloadSchema>;

export const CreateIngredientResponseSchema = Type.Object({
  ingredient: IngredientSchema,
  message: Type.String(),
});
export type CreateIngredientResponse = Static<typeof CreateIngredientResponseSchema>;

//UPDATE
export const UpdateIngredientPayloadSchema = Type.Object({
  calories: IngredientSchema.properties.calories,
  carbs: IngredientSchema.properties.carbs,
  countType: Type.Enum(INGREDIENT_COUNT_TYPES),
  fat: IngredientSchema.properties.fat,
  group: NutritionGroupSchema.properties.name,
  id: IngredientSchema.properties.id,
  name: IngredientSchema.properties.name,
  prices: Type.Array(
    Type.Object({
      createdAt: Type.String({
        format: 'date',
      }),
      id: Type.Optional(Type.Integer()),
      price: Type.Number({
        minimum: INGREDIENT_MIN_NUMBER,
      }),
    }),
  ),
  protein: IngredientSchema.properties.protein,
});
export type UpdateIngredientPayload = Static<typeof UpdateIngredientPayloadSchema>;

export const UpdateIngredientResponseSchema = CreateIngredientResponseSchema;
export type UpdateIngredientResponse = Static<typeof UpdateIngredientResponseSchema>;

// REMOVE
export const RemoveIngredientPayloadSchema = Type.Object({
  id: IngredientSchema.properties.id,
});
export type RemoveIngredientPayload = Static<typeof RemoveIngredientPayloadSchema>;

export const RemoveIngredientResponseSchema = Type.Object({
  id: IngredientSchema.properties.id,
  message: Type.String(),
});
export type RemoveIngredientResponse = Static<typeof RemoveIngredientResponseSchema>;
