//*
// BeerProto
//
// Another beer format, written in protocol buffer.
//
// Copyright (c) 2020 Ross Merrigan

// @generated by protoc-gen-es v1.3.1
// @generated from file beerproto/v1/fermentable.proto (package beerproto.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { AcidityType, ColorType, ConcentrationType, DiastaticPowerType, GravityType, MassType, PercentType, ViscosityType, VolumeType } from "./measureable_units_pb.js";
import { TimingType } from "./timing_pb.js";

/**
 * @generated from enum beerproto.v1.FermentableBaseType
 */
export const FermentableBaseType = proto3.makeEnum(
  "beerproto.v1.FermentableBaseType",
  [
    {no: 0, name: "FERMENTABLE_BASE_TYPE_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "FERMENTABLE_BASE_TYPE_DRY_EXTRACT", localName: "DRY_EXTRACT"},
    {no: 2, name: "FERMENTABLE_BASE_TYPE_EXTRACT", localName: "EXTRACT"},
    {no: 3, name: "FERMENTABLE_BASE_TYPE_GRAIN", localName: "GRAIN"},
    {no: 4, name: "FERMENTABLE_BASE_TYPE_SUGAR", localName: "SUGAR"},
    {no: 5, name: "FERMENTABLE_BASE_TYPE_FRUIT", localName: "FRUIT"},
    {no: 6, name: "FERMENTABLE_BASE_TYPE_JUICE", localName: "JUICE"},
    {no: 7, name: "FERMENTABLE_BASE_TYPE_HONEY", localName: "HONEY"},
    {no: 8, name: "FERMENTABLE_BASE_TYPE_OTHER", localName: "OTHER"},
  ],
);

/**
 * @generated from enum beerproto.v1.GrainGroup
 */
export const GrainGroup = proto3.makeEnum(
  "beerproto.v1.GrainGroup",
  [
    {no: 0, name: "GRAIN_GROUP_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "GRAIN_GROUP_BASE", localName: "BASE"},
    {no: 2, name: "GRAIN_GROUP_CARAMEL", localName: "CARAMEL"},
    {no: 3, name: "GRAIN_GROUP_FLAKED", localName: "FLAKED"},
    {no: 4, name: "GRAIN_GROUP_ROASTED", localName: "ROASTED"},
    {no: 5, name: "GRAIN_GROUP_SPECIALTY", localName: "SPECIALTY"},
    {no: 6, name: "GRAIN_GROUP_SMOKED", localName: "SMOKED"},
    {no: 7, name: "GRAIN_GROUP_ADJUNCT", localName: "ADJUNCT"},
  ],
);

/**
 * FermentableType collects the attributes of a fermentable ingredient to store as record information
 *
 * @generated from message beerproto.v1.FermentableType
 */
export const FermentableType = proto3.makeMessageType(
  "beerproto.v1.FermentableType",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "max_in_batch", kind: "message", T: PercentType },
    { no: 3, name: "recommend_mash", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "protein", kind: "message", T: PercentType },
    { no: 5, name: "product_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "grain_group", kind: "enum", T: proto3.getEnumType(GrainGroup) },
    { no: 7, name: "yield", kind: "message", T: YieldType },
    { no: 8, name: "type", kind: "enum", T: proto3.getEnumType(FermentableBaseType) },
    { no: 9, name: "producer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "alpha_amylase", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 11, name: "color", kind: "message", T: ColorType },
    { no: 12, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "diastatic_power", kind: "message", T: DiastaticPowerType },
    { no: 14, name: "moisture", kind: "message", T: PercentType },
    { no: 15, name: "origin", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 16, name: "inventory", kind: "message", T: FermentableInventoryType },
    { no: 17, name: "kolbach_index", kind: "message", T: PercentType },
    { no: 18, name: "glassy", kind: "message", T: PercentType },
    { no: 19, name: "plump", kind: "message", T: PercentType },
    { no: 20, name: "half", kind: "message", T: PercentType },
    { no: 21, name: "mealy", kind: "message", T: PercentType },
    { no: 22, name: "thru", kind: "message", T: PercentType },
    { no: 23, name: "friability", kind: "message", T: PercentType },
    { no: 24, name: "di_ph", kind: "message", T: AcidityType },
    { no: 25, name: "viscosity", kind: "message", T: ViscosityType },
    { no: 26, name: "dms_p", kind: "message", T: ConcentrationType },
    { no: 27, name: "fan", kind: "message", T: ConcentrationType },
    { no: 28, name: "fermentability", kind: "message", T: PercentType },
    { no: 29, name: "beta_glucan", kind: "message", T: ConcentrationType },
    { no: 30, name: "notes", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * FermentableAdditionType collects the attributes of each fermentable ingredient for use in a recipe fermentable bill
 *
 * @generated from message beerproto.v1.FermentableAdditionType
 */
export const FermentableAdditionType = proto3.makeMessageType(
  "beerproto.v1.FermentableAdditionType",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "type", kind: "enum", T: proto3.getEnumType(FermentableBaseType) },
    { no: 3, name: "origin", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "grain_group", kind: "enum", T: proto3.getEnumType(GrainGroup) },
    { no: 5, name: "yield", kind: "message", T: YieldType },
    { no: 6, name: "color", kind: "message", T: ColorType },
    { no: 7, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "producer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "product_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "timing", kind: "message", T: TimingType },
    { no: 11, name: "mass", kind: "message", T: MassType, oneof: "amount" },
    { no: 12, name: "volume", kind: "message", T: VolumeType, oneof: "amount" },
  ],
);

/**
 * The potential yield of the fermentable ingredient, supporting SG, or percentage. eg 1.037 or 80% are valid yield types
 *
 * @generated from message beerproto.v1.YieldType
 */
export const YieldType = proto3.makeMessageType(
  "beerproto.v1.YieldType",
  () => [
    { no: 1, name: "fine_grind", kind: "message", T: PercentType },
    { no: 2, name: "coarse_grind", kind: "message", T: PercentType },
    { no: 3, name: "fine_coarse_difference", kind: "message", T: PercentType },
    { no: 4, name: "potential", kind: "message", T: GravityType },
  ],
);

/**
 * @generated from message beerproto.v1.FermentableInventoryType
 */
export const FermentableInventoryType = proto3.makeMessageType(
  "beerproto.v1.FermentableInventoryType",
  () => [
    { no: 1, name: "mass", kind: "message", T: MassType, oneof: "amount" },
    { no: 2, name: "volume", kind: "message", T: VolumeType, oneof: "amount" },
  ],
);

