import { VolumeUnit } from "./measureable_units_pb";
import { findCustomScalarOption } from "@bufbuild/protoplugin/ecmascript";
import { AnyDesc, ScalarType } from "@bufbuild/protobuf";

const VolumeUnitStringName = (unit: VolumeUnit): string => {
  const desc = {} as AnyDesc;
  const t = findCustomScalarOption(desc, 123456789, ScalarType.STRING);
  return t?.toString() || "";
};
