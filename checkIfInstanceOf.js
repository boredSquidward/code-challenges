/**
 * @param {any} object
 * @param {any} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function (obj, classFunction) {
  if (typeof classFunction !== "function") return false;

  if (
    typeof obj === "symbol" &&
    (classFunction === Object || classFunction === Symbol)
  )
    return true;

  if (
    typeof obj === "string" &&
    (classFunction === Object || classFunction === String)
  )
    return true;

  if (
    typeof obj === "boolean" &&
    (classFunction === Object || classFunction === Boolean)
  )
    return true;

  if (
    typeof obj === "number" &&
    (classFunction === Object || classFunction === Number)
  )
    return true;

  if (typeof classFunction !== "object" && typeof classFunction !== "function")
    return false;

  return obj instanceof classFunction;
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */
