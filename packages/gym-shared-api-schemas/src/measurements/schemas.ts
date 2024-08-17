import { Static, Type } from '@sinclair/typebox';

// Measurements
export const MeasurementsSchema = Type.Object({
  biceps: Type.Number(),
  calf: Type.Number(),
  chest: Type.Number(),
  createdAt: Type.String({ format: 'date' }),
  hip: Type.Number(),
  id: Type.Integer(),
  thigh: Type.Number(),
  waist: Type.Number(),
  weight: Type.Number(),
});
export type Measurements = Static<typeof MeasurementsSchema>;

// GET
export const GetMeasurementsResponseSchema = Type.Object({
  measurements: Type.Array(MeasurementsSchema),
});
export type GetMeasurementsResponse = Static<typeof GetMeasurementsResponseSchema>;

// SET
export const SetMeasurementsPayloadSchema = Type.Object({
  ...MeasurementsSchema.properties,
  id: Type.Optional(Type.Integer()),
});
export type SetMeasurementsPayload = Static<typeof SetMeasurementsPayloadSchema>;

export const SetMeasurementsResponseSchema = Type.Object({
  measurements: MeasurementsSchema,
  message: Type.String(),
});
export type SetMeasurementsResponse = Static<typeof SetMeasurementsResponseSchema>;

// REMOVE
export const RemoveMeasurementsPayloadSchema = Type.Object({
  createdAt: MeasurementsSchema.properties.createdAt,
});
export type RemoveMeasurementsPayload = Static<typeof RemoveMeasurementsPayloadSchema>;

export const RemoveMeasurementsResponseSchema = Type.Object({
  createdAt: MeasurementsSchema.properties.createdAt,
  message: Type.String(),
});
export type RemoveMeasurementsResponse = Static<typeof RemoveMeasurementsResponseSchema>;
