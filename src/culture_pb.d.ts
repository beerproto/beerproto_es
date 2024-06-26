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

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { MassType, PercentRangeType, PercentType, TemperatureRangeType, UnitType, VolumeType } from "./measureable_units_pb.js";
import type { TimingType } from "./timing_pb.js";

/**
 * @generated from enum beerproto.v1.QualitativeRangeUnit
 */
export declare enum QualitativeRangeUnit {
  /**
   * @generated from enum value: QUALITATIVE_RANGE_UNIT_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * very low
   *
   * @generated from enum value: QUALITATIVE_RANGE_UNIT_VERY_LOW = 1;
   */
  VERY_LOW = 1,

  /**
   * low
   *
   * @generated from enum value: QUALITATIVE_RANGE_UNIT_LOW = 2;
   */
  LOW = 2,

  /**
   * medium low
   *
   * @generated from enum value: QUALITATIVE_RANGE_UNIT_MEDIUM_LOW = 3;
   */
  MEDIUM_LOW = 3,

  /**
   * medium
   *
   * @generated from enum value: QUALITATIVE_RANGE_UNIT_MEDIUM = 4;
   */
  MEDIUM = 4,

  /**
   * medium high
   *
   * @generated from enum value: QUALITATIVE_RANGE_UNIT_MEDIUM_HIGH = 5;
   */
  MEDIUM_HIGH = 5,

  /**
   * high
   *
   * @generated from enum value: QUALITATIVE_RANGE_UNIT_HIGH = 6;
   */
  HIGH = 6,

  /**
   * very high
   *
   * @generated from enum value: QUALITATIVE_RANGE_UNIT_VERY_HIGH = 7;
   */
  VERY_HIGH = 7,
}

/**
 * @generated from enum beerproto.v1.CultureBaseForm
 */
export declare enum CultureBaseForm {
  /**
   * @generated from enum value: CULTURE_BASE_FORM_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * liquid
   *
   * @generated from enum value: CULTURE_BASE_FORM_LIQUID = 1;
   */
  LIQUID = 1,

  /**
   * dry
   *
   * @generated from enum value: CULTURE_BASE_FORM_DRY = 2;
   */
  DRY = 2,

  /**
   * slant
   *
   * @generated from enum value: CULTURE_BASE_FORM_SLANT = 3;
   */
  SLANT = 3,

  /**
   * culture
   *
   * @generated from enum value: CULTURE_BASE_FORM_CULTURE = 4;
   */
  CULTURE = 4,

  /**
   * dregs
   *
   * @generated from enum value: CULTURE_BASE_FORM_DREGS = 5;
   */
  DREGS = 5,
}

/**
 * @generated from enum beerproto.v1.CultureBaseType
 */
export declare enum CultureBaseType {
  /**
   * @generated from enum value: CULTURE_BASE_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * ale
   *
   * @generated from enum value: CULTURE_BASE_TYPE_ALE = 1;
   */
  ALE = 1,

  /**
   * bacteria
   *
   * @generated from enum value: CULTURE_BASE_TYPE_BACTERIA = 2;
   */
  BACTERIA = 2,

  /**
   * brett
   *
   * @generated from enum value: CULTURE_BASE_TYPE_BRETT = 3;
   */
  BRETT = 3,

  /**
   * champagne
   *
   * @generated from enum value: CULTURE_BASE_TYPE_CHAMPAGNE = 4;
   */
  CHAMPAGNE = 4,

  /**
   * kveik
   *
   * @generated from enum value: CULTURE_BASE_TYPE_KVEIK = 5;
   */
  KVEIK = 5,

  /**
   * lacto
   *
   * @generated from enum value: CULTURE_BASE_TYPE_LACTO = 6;
   */
  LACTO = 6,

  /**
   * lager
   *
   * @generated from enum value: CULTURE_BASE_TYPE_LAGER = 7;
   */
  LAGER = 7,

  /**
   * malolactic
   *
   * @generated from enum value: CULTURE_BASE_TYPE_MALOLACTIC = 8;
   */
  MALOLACTIC = 8,

  /**
   * mixed-culture
   *
   * @generated from enum value: CULTURE_BASE_TYPE_MIXED_CULTURE = 9;
   */
  MIXED_CULTURE = 9,

  /**
   * other
   *
   * @generated from enum value: CULTURE_BASE_TYPE_OTHER = 10;
   */
  OTHER = 10,

  /**
   * pedio
   *
   * @generated from enum value: CULTURE_BASE_TYPE_PEDIO = 11;
   */
  PEDIO = 11,

  /**
   * spontaneous
   *
   * @generated from enum value: CULTURE_BASE_TYPE_SPONTANEOUS = 12;
   */
  SPONTANEOUS = 12,

  /**
   * wine
   *
   * @generated from enum value: CULTURE_BASE_TYPE_WINE = 13;
   */
  WINE = 13,
}

/**
 * CultureInformation collects the attributes of a microbial culture
 *
 * @generated from message beerproto.v1.CultureInformation
 */
export declare class CultureInformation extends Message<CultureInformation> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: beerproto.v1.CultureBaseForm form = 2;
   */
  form: CultureBaseForm;

  /**
   * @generated from field: string producer = 3;
   */
  producer: string;

  /**
   * The recommended temperature range of fermentation by the culture producer.
   *
   * @generated from field: beerproto.v1.TemperatureRangeType temperature_range = 4;
   */
  temperatureRange?: TemperatureRangeType;

  /**
   * @generated from field: string notes = 5;
   */
  notes: string;

  /**
   * Recommended styles for a particular culture.
   *
   * @generated from field: string best_for = 6;
   */
  bestFor: string;

  /**
   * @generated from field: beerproto.v1.CultureInventoryType inventory = 7;
   */
  inventory?: CultureInventoryType;

  /**
   * @generated from field: string product_id = 8;
   */
  productId: string;

  /**
   * @generated from field: string name = 9;
   */
  name: string;

  /**
   * The recommended limit of abv by the culture producer before attenuation stops.
   *
   * @generated from field: beerproto.v1.PercentType alcohol_tolerance = 10;
   */
  alcoholTolerance?: PercentType;

  /**
   * A glucoamylase positive culture is capable of producing glucoamylase, the enzyme produced through expression of the diastatic gene, which allows yeast to attenuate dextrins and starches leading to a very low FG. This is positive in some saison/brett yeasts as well as the new gulo hybrid by Omega yeast labs.
   *
   * @generated from field: bool glucoamylase = 11;
   */
  glucoamylase: boolean;

  /**
   * @generated from field: beerproto.v1.CultureBaseType type = 12;
   */
  type: CultureBaseType;

  /**
   * Floculation refers to the ability of yeast to aggregate to form large flocs which drop out of suspension.
   *
   * @generated from field: beerproto.v1.QualitativeRangeUnit flocculation = 13;
   */
  flocculation: QualitativeRangeUnit;

  /**
   * @generated from field: beerproto.v1.PercentRangeType attenuation_range = 14;
   */
  attenuationRange?: PercentRangeType;

  /**
   * Maximum number of times to reuse a culture before a new lab source is recommended.
   *
   * @generated from field: int32 max_reuse = 15;
   */
  maxReuse: number;

  /**
   * A POF+ culture is capable of producing phenols, which is a common distinctive property of saison, and brett yeasts.
   *
   * @generated from field: bool pof = 16;
   */
  pof: boolean;

  /**
   * @generated from field: beerproto.v1.Zymocide zymocide = 17;
   */
  zymocide?: Zymocide;

  constructor(data?: PartialMessage<CultureInformation>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "beerproto.v1.CultureInformation";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CultureInformation;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CultureInformation;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CultureInformation;

  static equals(a: CultureInformation | PlainMessage<CultureInformation> | undefined, b: CultureInformation | PlainMessage<CultureInformation> | undefined): boolean;
}

/**
 * CultureAdditionType collects the attributes of each culture ingredient for use in a recipe
 *
 * @generated from message beerproto.v1.CultureAdditionType
 */
export declare class CultureAdditionType extends Message<CultureAdditionType> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: beerproto.v1.CultureBaseForm form = 2;
   */
  form: CultureBaseForm;

  /**
   * @generated from field: string product_id = 3;
   */
  productId: string;

  /**
   * @generated from field: string name = 4;
   */
  name: string;

  /**
   * @generated from field: int32 cell_count_billions = 5;
   */
  cellCountBillions: number;

  /**
   * @generated from field: int32 times_cultured = 6;
   */
  timesCultured: number;

  /**
   * @generated from field: string producer = 7;
   */
  producer: string;

  /**
   * @generated from field: beerproto.v1.CultureBaseType type = 8;
   */
  type: CultureBaseType;

  /**
   * The expected, or measured apparent attenuation for a given culture in a given recipe. In comparison to attenuation range, this is a single value.
   *
   * @generated from field: beerproto.v1.PercentType attenuation = 9;
   */
  attenuation?: PercentType;

  /**
   * The timing object fully describes the timing of an addition with options for basis on time, gravity, or pH at any process step.
   *
   * @generated from field: beerproto.v1.TimingType timing = 10;
   */
  timing?: TimingType;

  /**
   * @generated from oneof beerproto.v1.CultureAdditionType.amount
   */
  amount: {
    /**
     * @generated from field: beerproto.v1.MassType mass = 11;
     */
    value: MassType;
    case: "mass";
  } | {
    /**
     * @generated from field: beerproto.v1.UnitType unit = 12;
     */
    value: UnitType;
    case: "unit";
  } | {
    /**
     * @generated from field: beerproto.v1.VolumeType volume = 13;
     */
    value: VolumeType;
    case: "volume";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<CultureAdditionType>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "beerproto.v1.CultureAdditionType";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CultureAdditionType;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CultureAdditionType;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CultureAdditionType;

  static equals(a: CultureAdditionType | PlainMessage<CultureAdditionType> | undefined, b: CultureAdditionType | PlainMessage<CultureAdditionType> | undefined): boolean;
}

/**
 * @generated from message beerproto.v1.CultureInventoryType
 */
export declare class CultureInventoryType extends Message<CultureInventoryType> {
  /**
   * @generated from field: beerproto.v1.VolumeType liquid = 1;
   */
  liquid?: VolumeType;

  /**
   * @generated from field: beerproto.v1.MassType dry = 2;
   */
  dry?: MassType;

  /**
   * @generated from field: beerproto.v1.VolumeType slant = 3;
   */
  slant?: VolumeType;

  /**
   * @generated from field: beerproto.v1.VolumeType culture = 4;
   */
  culture?: VolumeType;

  constructor(data?: PartialMessage<CultureInventoryType>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "beerproto.v1.CultureInventoryType";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CultureInventoryType;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CultureInventoryType;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CultureInventoryType;

  static equals(a: CultureInventoryType | PlainMessage<CultureInventoryType> | undefined, b: CultureInventoryType | PlainMessage<CultureInventoryType> | undefined): boolean;
}

/**
 * Zymocide, also known as killer yeast properties, is common among wine yeast. There are also some ale and brett yeasts that are immune to some zymocidic properties, these are known as killer neutral
 *
 * @generated from message beerproto.v1.Zymocide
 */
export declare class Zymocide extends Message<Zymocide> {
  /**
   * @generated from field: bool no1 = 1;
   */
  no1: boolean;

  /**
   * @generated from field: bool no2 = 2;
   */
  no2: boolean;

  /**
   * @generated from field: bool no28 = 3;
   */
  no28: boolean;

  /**
   * @generated from field: bool klus = 4;
   */
  klus: boolean;

  /**
   * @generated from field: bool neutral = 5;
   */
  neutral: boolean;

  constructor(data?: PartialMessage<Zymocide>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "beerproto.v1.Zymocide";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Zymocide;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Zymocide;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Zymocide;

  static equals(a: Zymocide | PlainMessage<Zymocide> | undefined, b: Zymocide | PlainMessage<Zymocide> | undefined): boolean;
}

