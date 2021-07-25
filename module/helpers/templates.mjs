/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
 export const preloadHandlebarsTemplates = async function() {
  return loadTemplates([

    // Actor partials.
    "systems/mutants3e/templates/actor/parts/actor-stats.hbs",
    "systems/mutants3e/templates/actor/parts/actor-items.hbs",
    "systems/mutants3e/templates/actor/parts/actor-spells.hbs",
    "systems/mutants3e/templates/actor/parts/actor-effects.hbs",
  ]);
};
