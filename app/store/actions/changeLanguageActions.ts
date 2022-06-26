import * as types from './types';

export function changeLanguage(value: string) {
  return {
    type: types.CHANGE_LANGUAGE,
    language: value,
  };
}