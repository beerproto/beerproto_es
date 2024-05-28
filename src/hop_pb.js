//*
// BeerProto
//
// Another beer format, written in protocol buffer.
//
// Copyright (c) 2020 Ross Merrigan

// @generated by protoc-gen-es v1.9.0
// @generated from file beerproto/v1/hop.proto (package beerproto.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { MassType, PercentType, VolumeType } from "./measureable_units_pb.js";
import { TimingType } from "./timing_pb.js";

/**
 * @generated from enum beerproto.v1.VarietyInformationType
 */
export const VarietyInformationType = /*@__PURE__*/ proto3.makeEnum(
  "beerproto.v1.VarietyInformationType",
  [
    {no: 0, name: "VARIETY_INFORMATION_TYPE_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "VARIETY_INFORMATION_TYPE_AROMA", localName: "AROMA"},
    {no: 2, name: "VARIETY_INFORMATION_TYPE_BITTERING", localName: "BITTERING"},
    {no: 3, name: "VARIETY_INFORMATION_TYPE_FLAVOR", localName: "FLAVOR"},
    {no: 4, name: "VARIETY_INFORMATION_TYPE_AROMA_BITTERING", localName: "AROMA_BITTERING"},
    {no: 5, name: "VARIETY_INFORMATION_TYPE_BITTERING_FLAVOR", localName: "BITTERING_FLAVOR"},
    {no: 6, name: "VARIETY_INFORMATION_TYPE_AROMA_FLAVOR", localName: "AROMA_FLAVOR"},
    {no: 7, name: "VARIETY_INFORMATION_TYPE_AROMA_BITTERING_FLAVOR", localName: "AROMA_BITTERING_FLAVOR"},
  ],
);

/**
 * @generated from enum beerproto.v1.HopVarietyBaseForm
 */
export const HopVarietyBaseForm = /*@__PURE__*/ proto3.makeEnum(
  "beerproto.v1.HopVarietyBaseForm",
  [
    {no: 0, name: "HOP_VARIETY_BASE_FORM_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "HOP_VARIETY_BASE_FORM_EXTRACT", localName: "EXTRACT"},
    {no: 2, name: "HOP_VARIETY_BASE_FORM_LEAF", localName: "LEAF"},
    {no: 3, name: "HOP_VARIETY_BASE_FORM_LEAFWET", localName: "LEAFWET"},
    {no: 4, name: "HOP_VARIETY_BASE_FORM_PELLET", localName: "PELLET"},
    {no: 5, name: "HOP_VARIETY_BASE_FORM_POWDER", localName: "POWDER"},
    {no: 6, name: "HOP_VARIETY_BASE_FORM_PLUG", localName: "PLUG"},
  ],
);

/**
 * @generated from enum beerproto.v1.IBUMethodUnit
 */
export const IBUMethodUnit = /*@__PURE__*/ proto3.makeEnum(
  "beerproto.v1.IBUMethodUnit",
  [
    {no: 0, name: "IBU_METHOD_UNIT_UNSPECIFIED"},
    {no: 1, name: "IBU_METHOD_UNIT_RAGER"},
    {no: 2, name: "IBU_METHOD_UNIT_TINSETH"},
    {no: 3, name: "IBU_METHOD_UNIT_GARETZ"},
    {no: 4, name: "IBU_METHOD_UNIT_OTHER"},
  ],
);

/**
 * VarietyInformation collects the attributes of a hop variety to store as record information
 *
 * @generated from message beerproto.v1.VarietyInformation
 */
export const VarietyInformation = /*@__PURE__*/ proto3.makeMessageType(
  "beerproto.v1.VarietyInformation",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "inventory", kind: "message", T: HopInventoryType },
    { no: 3, name: "type", kind: "enum", T: proto3.getEnumType(VarietyInformationType) },
    { no: 4, name: "oil_content", kind: "message", T: OilContentType },
    { no: 5, name: "percent_lost", kind: "message", T: PercentType },
    { no: 6, name: "product_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "alpha_acid", kind: "message", T: PercentType },
    { no: 8, name: "beta_acid", kind: "message", T: PercentType },
    { no: 9, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "origin", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "substitutes", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "year", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "form", kind: "enum", T: proto3.getEnumType(HopVarietyBaseForm) },
    { no: 14, name: "producer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 15, name: "notes", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * HopAdditionType collects the attributes of each hop ingredient for use in a recipe hop bill.
 *
 * @generated from message beerproto.v1.HopAdditionType
 */
export const HopAdditionType = /*@__PURE__*/ proto3.makeMessageType(
  "beerproto.v1.HopAdditionType",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "beta_acid", kind: "message", T: PercentType },
    { no: 3, name: "producer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "origin", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "year", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "form", kind: "enum", T: proto3.getEnumType(HopVarietyBaseForm) },
    { no: 7, name: "timing", kind: "message", T: TimingType },
    { no: 8, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "product_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "alpha_acid", kind: "message", T: PercentType },
    { no: 11, name: "mass", kind: "message", T: MassType, oneof: "amount" },
    { no: 12, name: "volume", kind: "message", T: VolumeType, oneof: "amount" },
  ],
);

/**
 * Used to differentiate which IBU formula is being used in a recipe. If formula is modified in any way, eg to support whirlpool/flameout additions etc etc, please use `Other` for transparency
 *
 * @generated from message beerproto.v1.IBUEstimateType
 */
export const IBUEstimateType = /*@__PURE__*/ proto3.makeMessageType(
  "beerproto.v1.IBUEstimateType",
  () => [
    { no: 1, name: "method", kind: "enum", T: proto3.getEnumType(IBUMethodUnit) },
  ],
);

/**
 * oil_content collects all information of a hop variety pertaining to oil content, polyphenols, and thiols. Each individual compound is expressed as a percent of the total oil measurement
 *
 * @generated from message beerproto.v1.OilContentType
 */
export const OilContentType = /*@__PURE__*/ proto3.makeMessageType(
  "beerproto.v1.OilContentType",
  () => [
    { no: 1, name: "polyphenols", kind: "message", T: PercentType },
    { no: 2, name: "total_oil_ml_per_100g", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 3, name: "farnesene", kind: "message", T: PercentType },
    { no: 4, name: "limonene", kind: "message", T: PercentType },
    { no: 5, name: "nerol", kind: "message", T: PercentType },
    { no: 6, name: "geraniol", kind: "message", T: PercentType },
    { no: 7, name: "b_pinene", kind: "message", T: PercentType },
    { no: 8, name: "linalool", kind: "message", T: PercentType },
    { no: 9, name: "caryophyllene", kind: "message", T: PercentType },
    { no: 10, name: "cohumulone", kind: "message", T: PercentType },
    { no: 11, name: "xanthohumol", kind: "message", T: PercentType },
    { no: 12, name: "humulene", kind: "message", T: PercentType },
    { no: 13, name: "myrcene", kind: "message", T: PercentType },
    { no: 14, name: "pinene", kind: "message", T: PercentType },
  ],
);

/**
 * @generated from message beerproto.v1.HopInventoryType
 */
export const HopInventoryType = /*@__PURE__*/ proto3.makeMessageType(
  "beerproto.v1.HopInventoryType",
  () => [
    { no: 1, name: "mass", kind: "message", T: MassType, oneof: "amount" },
    { no: 2, name: "volume", kind: "message", T: VolumeType, oneof: "amount" },
  ],
);

