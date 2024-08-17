import { Static, Type } from "@sinclair/typebox";

import {
  MEAL_DESCRIPTION_MAX_LENGTH,
  MEAL_NAME_MAX_LENGTH,
  MEAL_NAME_MIN_LENGTH,
  MealIngredientSchema,
} from "../meal";
import { NutritionGroupSchema } from "../nutritionGroup";
import {
  EATING_DAY_NAME_MAX_LENGTH,
  EATING_DAY_NAME_MIN_LENGTH,
} from "./consts";

// Plan meal
export const EatingPlanMealSchema = Type.Object({
  description: Type.Optional(
    Type.String({
      maxLength: MEAL_DESCRIPTION_MAX_LENGTH,
    }),
  ),
  id: Type.Number(),
  ingredients: Type.Array(MealIngredientSchema),
  name: Type.String({
    maxLength: MEAL_NAME_MAX_LENGTH,
    minLength: MEAL_NAME_MIN_LENGTH,
  }),
  time: Type.String(),
});
export type EatingPlanMeal = Static<typeof EatingPlanMealSchema>;

export const EatingPlanSchema = Type.Object({
  createdAt: Type.String({ format: "date" }),
  description: Type.Optional(
    Type.String({
      maxLength: MEAL_DESCRIPTION_MAX_LENGTH,
    }),
  ),
  group: Type.Optional(NutritionGroupSchema),
  id: Type.Integer(),
  meals: Type.Array(EatingPlanMealSchema),
  name: Type.String({
    maxLength: EATING_DAY_NAME_MAX_LENGTH,
    minLength: EATING_DAY_NAME_MIN_LENGTH,
  }),
});
export type EatingPlan = Static<typeof EatingPlanSchema>;

// GET
export const GetEatingPlansPayloadSchema = Type.Object({
  group: Type.Optional(NutritionGroupSchema.properties.name),
});
export type GetEatingPlansPayload = Static<typeof GetEatingPlansPayloadSchema>;

export const GetEatingPlansResponseSchema = Type.Object({
  plans: Type.Array(EatingPlanSchema),
  total: Type.Number(),
});
export type GetEatingPlanResponse = Static<typeof GetEatingPlansResponseSchema>;

// GET
export const GetSingleEatingPlanPayloadSchema = Type.Object({
  id: EatingPlanSchema.properties.id,
});
export type GetSingleEatingPlanPayload = Static<
  typeof GetSingleEatingPlanPayloadSchema
>;

export const GetSingleEatingPlanResponseSchema = Type.Object({
  plan: EatingPlanSchema,
});
export type GetSingleEatingPlanResponse = Static<
  typeof GetSingleEatingPlanResponseSchema
>;

// CREATE
export const CreateEatingPlanPayloadSchema = Type.Object({
  description: EatingPlanSchema.properties.description,
  group: Type.Optional(NutritionGroupSchema.properties.name),
  meals: Type.Array(
    Type.Object({
      description: Type.Optional(
        Type.String({
          maxLength: MEAL_DESCRIPTION_MAX_LENGTH,
        }),
      ),
      ingredients: Type.Array(Type.Omit(MealIngredientSchema, ["ingredient"])),
      name: Type.String({
        maxLength: MEAL_NAME_MAX_LENGTH,
        minLength: MEAL_NAME_MIN_LENGTH,
      }),
      time: Type.String(),
    }),
  ),
  name: EatingPlanSchema.properties.name,
});
export type CreateEatingPlanPayload = Static<
  typeof CreateEatingPlanPayloadSchema
>;

export const CreateEatingPlanResponseSchema = Type.Object({
  message: Type.String(),
  plan: EatingPlanSchema,
});
export type CreateEatingPlanResponse = Static<
  typeof CreateEatingPlanResponseSchema
>;

// UPDATE
export const UpdateEatingPlanPayloadSchema = Type.Object({
  ...CreateEatingPlanPayloadSchema.properties,
  id: EatingPlanSchema.properties.id,
});
export type UpdateEatingPlanPayload = Static<
  typeof UpdateEatingPlanPayloadSchema
>;

export const UpdateEatingPlanResponseSchema = CreateEatingPlanResponseSchema;
export type UpdateEatingPlanResponse = Static<
  typeof UpdateEatingPlanResponseSchema
>;

//REMOVE
export const RemoveEatingPlanPayloadSchema = Type.Object({
  id: EatingPlanSchema.properties.id,
});
export type RemoveEatingPlanPayload = Static<
  typeof RemoveEatingPlanPayloadSchema
>;

export const RemoveEatingPlanResponseSchema = Type.Object({
  id: EatingPlanSchema.properties.id,
  message: Type.String(),
});
export type RemoveEatingPlanResponse = Static<
  typeof RemoveEatingPlanResponseSchema
>;
