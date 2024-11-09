import { compat, types as T } from "../dependencies.ts";

export const migration: T.ExpectedExports.migration =
  compat.migrations.fromMapping(
    {
      "27.1.0.1": {
        up: compat.migrations.updateConfig(
          (config: any) => config,
          false,
          { version: "27.1.0.1", type: "up" }
        ),
        down: compat.migrations.updateConfig(
          (config: any) => config,
          false,
          { version: "27.1.0.1", type: "down" }
        ),
      },
    },
    "27.1.0.1"
  );