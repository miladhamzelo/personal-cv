
import * as types from '../constants/action-types/actionTypes';

export function setCategory(displayKey) {
  return {
    type: types.SET_SELECTED_CATEGORY, displayKey
  };
}

export function clearCategories() {
  return {
    type: types.CLEAR_CATEGORIES
  };
}

export function goToNextSlide() {
  return {
    type: types.NEXT_SLIDE
  };
}

export function goToPrevSlide() {
  return {
    type: types.PREV_SLIDE
  };
}

export function showExperiencePaper() {
  return {
    type: types.SHOW_HIDE_PAPER
  }
}