//*
// BeerProto
//
// Another beer format, written in protocol buffer.
//
// Copyright (c) 2020 Ross Merrigan

// @generated by protoc-gen-es v1.9.0
// @generated from file beerproto/v1/culture.proto (package beerproto.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { MassType, PercentRangeType, PercentType, TemperatureRangeType, UnitType, VolumeType } from "./measureable_units_pb.js";
import { TimingType } from "./timing_pb.js";

/**
 * @generated from enum beerproto.v1.QualitativeRangeUnit
 */
export const QualitativeRangeUnit = /*@__PURE__*/ proto3.makeEnum(
  "beerproto.v1.QualitativeRangeUnit",
  [
    {no: 0, name: "QUALITATIVE_RANGE_UNIT_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "QUALITATIVE_RANGE_UNIT_VERY_LOW", localName: "VERY_LOW"},
    {no: 2, name: "QUALITATIVE_RANGE_UNIT_LOW", localName: "LOW"},
    {no: 3, name: "QUALITATIVE_RANGE_UNIT_MEDIUM_LOW", localName: "MEDIUM_LOW"},
    {no: 4, name: "QUALITATIVE_RANGE_UNIT_MEDIUM", localName: "MEDIUM"},
    {no: 5, name: "QUALITATIVE_RANGE_UNIT_MEDIUM_HIGH", localName: "MEDIUM_HIGH"},
    {no: 6, name: "QUALITATIVE_RANGE_UNIT_HIGH", localName: "HIGH"},
    {no: 7, name: "QUALITATIVE_RANGE_UNIT_VERY_HIGH", localName: "VERY_HIGH"},
  ],
);

/**
 * @generated from enum beerproto.v1.CultureBaseForm
 */
export const CultureBaseForm = /*@__PURE__*/ proto3.makeEnum(
  "beerproto.v1.CultureBaseForm",
  [
    {no: 0, name: "CULTURE_BASE_FORM_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "CULTURE_BASE_FORM_LIQUID", localName: "LIQUID"},
    {no: 2, name: "CULTURE_BASE_FORM_DRY", localName: "DRY"},
    {no: 3, name: "CULTURE_BASE_FORM_SLANT", localName: "SLANT"},
    {no: 4, name: "CULTURE_BASE_FORM_CULTURE", localName: "CULTURE"},
    {no: 5, name: "CULTURE_BASE_FORM_DREGS", localName: "DREGS"},
  ],
);

/**
 * @generated from enum beerproto.v1.CultureBaseType
 */
export const CultureBaseType = /*@__PURE__*/ proto3.makeEnum(
  "beerproto.v1.CultureBaseType",
  [
    {no: 0, name: "CULTURE_BASE_TYPE_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "CULTURE_BASE_TYPE_ALE", localName: "ALE"},
    {no: 2, name: "CULTURE_BASE_TYPE_BACTERIA", localName: "BACTERIA"},
    {no: 3, name: "CULTURE_BASE_TYPE_BRETT", localName: "BRETT"},
    {no: 4, name: "CULTURE_BASE_TYPE_CHAMPAGNE", localName: "CHAMPAGNE"},
    {no: 5, name: "CULTURE_BASE_TYPE_KVEIK", localName: "KVEIK"},
    {no: 6, name: "CULTURE_BASE_TYPE_LACTO", localName: "LACTO"},
    {no: 7, name: "CULTURE_BASE_TYPE_LAGER", localName: "LAGER"},
    {no: 8, name: "CULTURE_BASE_TYPE_MALOLACTIC", localName: "MALOLACTIC"},
    {no: 9, name: "CULTURE_BASE_TYPE_MIXED_CULTURE", localName: "MIXED_CULTURE"},
    {no: 10, name: "CULTURE_BASE_TYPE_OTHER", localName: "OTHER"},
    {no: 11, name: "CULTURE_BASE_TYPE_PEDIO", localName: "PEDIO"},
    {no: 12, name: "CULTURE_BASE_TYPE_SPONTANEOUS", localName: "SPONTANEOUS"},
    {no: 13, name: "CULTURE_BASE_TYPE_WINE", localName: "WINE"},
  ],
);

/**
 * CultureInformation collects the attributes of a microbial culture
 *
 * @generated from message beerproto.v1.CultureInformation
 */
export const CultureInformation = /*@__PURE__*/ proto3.makeMessageType(
  "beerproto.v1.CultureInformation",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "form", kind: "enum", T: proto3.getEnumType(CultureBaseForm) },
    { no: 3, name: "producer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "temperature_range", kind: "message", T: TemperatureRangeType },
    { no: 5, name: "notes", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "best_for", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "inventory", kind: "message", T: CultureInventoryType },
    { no: 8, name: "product_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "alcohol_tolerance", kind: "message", T: PercentType },
    { no: 11, name: "glucoamylase", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 12, name: "type", kind: "enum", T: proto3.getEnumType(CultureBaseType) },
    { no: 13, name: "flocculation", kind: "enum", T: proto3.getEnumType(QualitativeRangeUnit) },
    { no: 14, name: "attenuation_range", kind: "message", T: PercentRangeType },
    { no: 15, name: "max_reuse", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 16, name: "pof", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 17, name: "zymocide", kind: "message", T: Zymocide },
  ],
);

/**
 * CultureAdditionType collects the attributes of each culture ingredient for use in a recipe
 *
 * @generated from message beerproto.v1.CultureAdditionType
 */
export const CultureAdditionType = /*@__PURE__*/ proto3.makeMessageType(
  "beerproto.v1.CultureAdditionType",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "form", kind: "enum", T: proto3.getEnumType(CultureBaseForm) },
    { no: 3, name: "product_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "cell_count_billions", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 6, name: "times_cultured", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 7, name: "producer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "type", kind: "enum", T: proto3.getEnumType(CultureBaseType) },
    { no: 9, name: "attenuation", kind: "message", T: PercentType },
    { no: 10, name: "timing", kind: "message", T: TimingType },
    { no: 11, name: "mass", kind: "message", T: MassType, oneof: "amount" },
    { no: 12, name: "unit", kind: "message", T: UnitType, oneof: "amount" },
    { no: 13, name: "volume", kind: "message", T: VolumeType, oneof: "amount" },
  ],
);

/**
 * @generated from message beerproto.v1.CultureInventoryType
 */
export const CultureInventoryType = /*@__PURE__*/ proto3.makeMessageType(
  "beerproto.v1.CultureInventoryType",
  () => [
    { no: 1, name: "liquid", kind: "message", T: VolumeType },
    { no: 2, name: "dry", kind: "message", T: MassType },
    { no: 3, name: "slant", kind: "message", T: VolumeType },
    { no: 4, name: "culture", kind: "message", T: VolumeType },
  ],
);

/**
 * Zymocide, also known as killer yeast properties, is common among wine yeast. There are also some ale and brett yeasts that are immune to some zymocidic properties, these are known as killer neutral
 *
 * @generated from message beerproto.v1.Zymocide
 */
export const Zymocide = /*@__PURE__*/ proto3.makeMessageType(
  "beerproto.v1.Zymocide",
  () => [
    { no: 1, name: "no1", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "no2", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "no28", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "klus", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "neutral", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

