import { Static, Type } from '@sinclair/typebox';

export const GoogleSigninPayloadSchema = Type.Object({
  idToken: Type.String(),
});
export type GoogleSigninPayload = Static<typeof GoogleSigninPayloadSchema>;

export const GoogleSigninResponseSchema = Type.Object({
  accessToken: Type.String(),
  refreshToken: Type.String(),
});
export type GoogleSigninResponse = Static<typeof GoogleSigninResponseSchema>;
