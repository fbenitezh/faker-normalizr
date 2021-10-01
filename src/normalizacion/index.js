import { normalize, schema, denormalize } from "normalizr";
import { holding } from "./utils/holding.js";
import util from "util";

const print = (object) => {
  console.log(util.inspect(object, false, 12, true));
};

const obtenerPorcentaje = (originalSize, normalizeSize) => {
  const porcentaje = parseInt((normalizeSize / originalSize) * 100);
  return porcentaje;
};

const empleadoSchema = new schema.Entity("empleado");
const empresaSchema = new schema.Entity("empresa", {
  gerente: empleadoSchema,
  encargado: empleadoSchema,
  empleados: [empleadoSchema],
});
const holdingSchema = new schema.Entity("holding", {
  empresas: [empresaSchema],
});

const dataNormalizada = normalize(holding, holdingSchema);
const dataDesnormalizada = denormalize(
  dataNormalizada.result,
  holdingSchema,
  dataNormalizada.entities
);

console.log("longitud original: " + JSON.stringify(holding).length);
console.log("longitud normalizado: " + JSON.stringify(dataNormalizada).length);
console.log(
  "longitud desnormalizado: " + JSON.stringify(dataDesnormalizada).length
);
console.log(
  "Porcentaje normalizado: " +
    obtenerPorcentaje(
      JSON.stringify(holding).length,
      JSON.stringify(dataNormalizada).length
    )
);
