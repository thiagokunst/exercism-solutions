/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(timer){
  if(timer === undefined) return 'You forgot to set the timer.';
  return timer === 0 ? 'Lasagna is done.' : 'Not done, please wait.';
}

export function preparationTime(layers, averageTime = 2){
  return layers.length * averageTime;
}

export function quantities(layers){
  let noodles = 0;
  let sauce = 0;
  for(let i = 0; i < layers.length; i++){
    if(layers[i] === 'noodles') noodles += 50;
    if(layers[i] === 'sauce') sauce += 0.2;
  }
  return {noodles: noodles, sauce: sauce}
}

export function addSecretIngredient(friendsList, myList){
  myList.push(friendsList[friendsList.length - 1])
}

export function scaleRecipe(recipe, portion){
  let newRecipe = {}
  for(let value in recipe){
    newRecipe[value] = ((recipe[value] / 2) * portion)
  }
  return newRecipe
}
