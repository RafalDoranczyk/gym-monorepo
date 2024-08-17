import { CURRENCIES, PALETTE_MODES } from "./enums";

export const DEFAULT_PALETTE_MODE = PALETTE_MODES.DARK;
export const DEFAULT_CURRENCY = CURRENCIES.USD;

export const USERNAME_MIN_LENGTH = 3;
export const USERNAME_MAX_LENGTH = 24;
export const EMAIL_PATTERN = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
export const PASSWORD_MIN_LENGTH = 6;
export const PASSWORD_MAX_LENGTH = 128;
