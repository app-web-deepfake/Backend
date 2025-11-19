import fs from "fs";
import path from "path";
import yaml from "yaml";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

try {
    // Leer el archivo YAML
    const yamlPath = path.join(__dirname, "../src/docs/openapi.yaml");
    const yamlContent = fs.readFileSync(yamlPath, "utf8");

    // Convertir a JSON
    const jsonSpec = yaml.parse(yamlContent);

    // Guardar como JSON
    const jsonPath = path.join(__dirname, "../src/docs/openapi.json");
    fs.writeFileSync(jsonPath, JSON.stringify(jsonSpec, null, 2));

    console.log("✅ openapi.yaml convertido a openapi.json exitosamente");
} catch (error) {
    console.error("❌ Error convirtiendo YAML a JSON:", error);
    process.exit(1);
}