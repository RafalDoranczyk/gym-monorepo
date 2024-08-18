import { Static, Type } from '@sinclair/typebox';

export const NutritionGroupSchema = Type.Object({
  id: Type.Integer(),
  name: Type.String(),
});
export type NutritionGroup = Static<typeof NutritionGroupSchema>;
