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

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { AcidityType, ColorType, ConcentrationType, DiastaticPowerType, GravityType, MassType, PercentType, ViscosityType, VolumeType } from "./measureable_units_pb.js";
import type { TimingType } from "./timing_pb.js";

/**
 * @generated from enum beerproto.v1.FermentableBaseType
 */
export declare enum FermentableBaseType {
  /**
   * @generated from enum value: FERMENTABLE_BASE_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * dry extract
   *
   * @generated from enum value: FERMENTABLE_BASE_TYPE_DRY_EXTRACT = 1;
   */
  DRY_EXTRACT = 1,

  /**
   * extract
   *
   * @generated from enum value: FERMENTABLE_BASE_TYPE_EXTRACT = 2;
   */
  EXTRACT = 2,

  /**
   * grain
   *
   * @generated from enum value: FERMENTABLE_BASE_TYPE_GRAIN = 3;
   */
  GRAIN = 3,

  /**
   * sugar
   *
   * @generated from enum value: FERMENTABLE_BASE_TYPE_SUGAR = 4;
   */
  SUGAR = 4,

  /**
   * fruit
   *
   * @generated from enum value: FERMENTABLE_BASE_TYPE_FRUIT = 5;
   */
  FRUIT = 5,

  /**
   * juice
   *
   * @generated from enum value: FERMENTABLE_BASE_TYPE_JUICE = 6;
   */
  JUICE = 6,

  /**
   * honey
   *
   * @generated from enum value: FERMENTABLE_BASE_TYPE_HONEY = 7;
   */
  HONEY = 7,

  /**
   * other
   *
   * @generated from enum value: FERMENTABLE_BASE_TYPE_OTHER = 8;
   */
  OTHER = 8,
}

/**
 * @generated from enum beerproto.v1.GrainGroup
 */
export declare enum GrainGroup {
  /**
   * @generated from enum value: GRAIN_GROUP_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * base
   *
   * @generated from enum value: GRAIN_GROUP_BASE = 1;
   */
  BASE = 1,

  /**
   * caramel
   *
   * @generated from enum value: GRAIN_GROUP_CARAMEL = 2;
   */
  CARAMEL = 2,

  /**
   * flaked
   *
   * @generated from enum value: GRAIN_GROUP_FLAKED = 3;
   */
  FLAKED = 3,

  /**
   * roasted
   *
   * @generated from enum value: GRAIN_GROUP_ROASTED = 4;
   */
  ROASTED = 4,

  /**
   * specialty
   *
   * @generated from enum value: GRAIN_GROUP_SPECIALTY = 5;
   */
  SPECIALTY = 5,

  /**
   * smoked
   *
   * @generated from enum value: GRAIN_GROUP_SMOKED = 6;
   */
  SMOKED = 6,

  /**
   * adjunct
   *
   * @generated from enum value: GRAIN_GROUP_ADJUNCT = 7;
   */
  ADJUNCT = 7,
}

/**
 * FermentableType collects the attributes of a fermentable ingredient to store as record information
 *
 * @generated from message beerproto.v1.FermentableType
 */
export declare class FermentableType extends Message<FermentableType> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * The recommended maximum percentage to use in a grain bill.
   *
   * @generated from field: beerproto.v1.PercentType max_in_batch = 2;
   */
  maxInBatch?: PercentType;

  /**
   * True if the fermentable must be mashed, false if it can be steeped.
   *
   * @generated from field: bool recommend_mash = 3;
   */
  recommendMash: boolean;

  /**
   * The percentage of protein. Higher values may indicate a possibility of haze, or lautering issues.
   *
   * @generated from field: beerproto.v1.PercentType protein = 4;
   */
  protein?: PercentType;

  /**
   * @generated from field: string product_id = 5;
   */
  productId: string;

  /**
   * @generated from field: beerproto.v1.GrainGroup grain_group = 6;
   */
  grainGroup: GrainGroup;

  /**
   * @generated from field: beerproto.v1.YieldType yield = 7;
   */
  yield?: YieldType;

  /**
   * @generated from field: beerproto.v1.FermentableBaseType type = 8;
   */
  type: FermentableBaseType;

  /**
   * @generated from field: string producer = 9;
   */
  producer: string;

  /**
   * Where diastatic power gives the total amount of all enzymes, alpha amylase, also known as dextrinizing units, refers to only the total amount of alpa amylase in the malted grain. A value of 25-50 is desirable for base malt.
   *
   * @generated from field: double alpha_amylase = 10;
   */
  alphaAmylase: number;

  /**
   * @generated from field: beerproto.v1.ColorType color = 11;
   */
  color?: ColorType;

  /**
   * @generated from field: string name = 12;
   */
  name: string;

  /**
   * Diastatic power is a measurement of malted grains enzymatic content. A value of 35 Lintner is needed to self convert, while a value of 100 or more is desirable.
   *
   * @generated from field: beerproto.v1.DiastaticPowerType diastatic_power = 13;
   */
  diastaticPower?: DiastaticPowerType;

  /**
   * @generated from field: beerproto.v1.PercentType moisture = 14;
   */
  moisture?: PercentType;

  /**
   * @generated from field: string origin = 15;
   */
  origin: string;

  /**
   * @generated from field: beerproto.v1.FermentableInventoryType inventory = 16;
   */
  inventory?: FermentableInventoryType;

  /**
   * The Kolbach Index, also known as soluble to total ratio of nitrogen or protein, is used to indcate the degree of malt modification. A value above 35% is desired for simple single infusion mashing, undermodified malt may require multiple step mashes or decoction.
   *
   * @generated from field: beerproto.v1.PercentType kolbach_index = 17;
   */
  kolbachIndex?: PercentType;

  /**
   * Used to indicate the 'crystallized' percentage of starches for crystal malts.
   *
   * @generated from field: beerproto.v1.PercentType glassy = 18;
   */
  glassy?: PercentType;

  /**
   * The percentage of grain that masses through sieves with gaps of 7/64 and 6/64, desired values of 80% or higher which indicate plump kernels.
   *
   * @generated from field: beerproto.v1.PercentType plump = 19;
   */
  plump?: PercentType;

  /**
   * @generated from field: beerproto.v1.PercentType half = 20;
   */
  half?: PercentType;

  /**
   * The opposite of glassy, a mealy kernel is one that is not glassy. Base malt should be at least 90%, single step mashes generally require 95% or higher.
   *
   * @generated from field: beerproto.v1.PercentType mealy = 21;
   */
  mealy?: PercentType;

  /**
   * The Percentage of grain that makes it through a thin mesh screen, typically 5/64 inch. Values less than 3% are desired.
   *
   * @generated from field: beerproto.v1.PercentType thru = 22;
   */
  thru?: PercentType;

  /**
   * Friability is the measure of a malts ability to crumble during the crush, and is used as an indicator for easy gelatinization of the grain and starches, as well as modification of the malt. Value of 85% of higher indicates a well modified malt and is suitable for single step mashes. Lower values may require a step mash.
   *
   * @generated from field: beerproto.v1.PercentType friability = 23;
   */
  friability?: PercentType;

  /**
   * The pH of the resultant wort for 1 lb of grain mashed in 1 gallon of distilled water. Used in many water chemistry / mash pH prediction software.
   *
   * @generated from field: beerproto.v1.AcidityType di_ph = 24;
   */
  diPh?: AcidityType;

  /**
   * The measure of wort viscosity, typically associated with the breakdown of beta-glucans. The higher the viscosity, the greater the need for a glucan rest and the less suitable for a fly sparge.
   *
   * @generated from field: beerproto.v1.ViscosityType viscosity = 25;
   */
  viscosity?: ViscosityType;

  /**
   * The amount of DMS precursors, namely S-methyl methionine (SMM) and dimethyl sulfoxide (DMSO) in the malt which convert to dimethyl sulfide (DMS).
   *
   * @generated from field: beerproto.v1.ConcentrationType dms_p = 26;
   */
  dmsP?: ConcentrationType;

  /**
   * Free Amino Nitrogen (FAN) is a critical yeast nutrient. Typical values for base malt is 170.
   *
   * @generated from field: beerproto.v1.ConcentrationType fan = 27;
   */
  fan?: ConcentrationType;

  /**
   * Fermentability - Used in Extracts to indicate a baseline typical attenuation for a typical medium attenuation yeast.
   *
   * @generated from field: beerproto.v1.PercentType fermentability = 28;
   */
  fermentability?: PercentType;

  /**
   * Values of 180 or more may suggest a glucan rest and avoiding fly sparging.
   *
   * @generated from field: beerproto.v1.ConcentrationType beta_glucan = 29;
   */
  betaGlucan?: ConcentrationType;

  /**
   * @generated from field: string notes = 30;
   */
  notes: string;

  constructor(data?: PartialMessage<FermentableType>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "beerproto.v1.FermentableType";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FermentableType;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FermentableType;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FermentableType;

  static equals(a: FermentableType | PlainMessage<FermentableType> | undefined, b: FermentableType | PlainMessage<FermentableType> | undefined): boolean;
}

/**
 * FermentableAdditionType collects the attributes of each fermentable ingredient for use in a recipe fermentable bill
 *
 * @generated from message beerproto.v1.FermentableAdditionType
 */
export declare class FermentableAdditionType extends Message<FermentableAdditionType> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: beerproto.v1.FermentableBaseType type = 2;
   */
  type: FermentableBaseType;

  /**
   * @generated from field: string origin = 3;
   */
  origin: string;

  /**
   * @generated from field: beerproto.v1.GrainGroup grain_group = 4;
   */
  grainGroup: GrainGroup;

  /**
   * @generated from field: beerproto.v1.YieldType yield = 5;
   */
  yield?: YieldType;

  /**
   * @generated from field: beerproto.v1.ColorType color = 6;
   */
  color?: ColorType;

  /**
   * @generated from field: string name = 7;
   */
  name: string;

  /**
   * @generated from field: string producer = 8;
   */
  producer: string;

  /**
   * @generated from field: string product_id = 9;
   */
  productId: string;

  /**
   * The timing object fully describes the timing of an addition with options for basis on time, gravity, or pH at any process step.
   *
   * @generated from field: beerproto.v1.TimingType timing = 10;
   */
  timing?: TimingType;

  /**
   * @generated from oneof beerproto.v1.FermentableAdditionType.amount
   */
  amount: {
    /**
     * @generated from field: beerproto.v1.MassType mass = 11;
     */
    value: MassType;
    case: "mass";
  } | {
    /**
     * @generated from field: beerproto.v1.VolumeType volume = 12;
     */
    value: VolumeType;
    case: "volume";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<FermentableAdditionType>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "beerproto.v1.FermentableAdditionType";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FermentableAdditionType;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FermentableAdditionType;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FermentableAdditionType;

  static equals(a: FermentableAdditionType | PlainMessage<FermentableAdditionType> | undefined, b: FermentableAdditionType | PlainMessage<FermentableAdditionType> | undefined): boolean;
}

/**
 * The potential yield of the fermentable ingredient, supporting SG, or percentage. eg 1.037 or 80% are valid yield types
 *
 * @generated from message beerproto.v1.YieldType
 */
export declare class YieldType extends Message<YieldType> {
  /**
   * Percentage yield compared to succrose of a fine grind. eg 80%
   *
   * @generated from field: beerproto.v1.PercentType fine_grind = 1;
   */
  fineGrind?: PercentType;

  /**
   * Percentage yield compared to succrose of a coarse grind. eg 78%
   *
   * @generated from field: beerproto.v1.PercentType coarse_grind = 2;
   */
  coarseGrind?: PercentType;

  /**
   * The difference between fine and coarse grind, a difference more than 2 percent can indicate a protein or step mash may be desirable. eg 2%
   *
   * @generated from field: beerproto.v1.PercentType fine_coarse_difference = 3;
   */
  fineCoarseDifference?: PercentType;

  /**
   * The potential yield of the fermentable ingredient for 1 lb of grain mashed in 1 gallon of water. eg 1.037
   *
   * @generated from field: beerproto.v1.GravityType potential = 4;
   */
  potential?: GravityType;

  constructor(data?: PartialMessage<YieldType>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "beerproto.v1.YieldType";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): YieldType;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): YieldType;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): YieldType;

  static equals(a: YieldType | PlainMessage<YieldType> | undefined, b: YieldType | PlainMessage<YieldType> | undefined): boolean;
}

/**
 * @generated from message beerproto.v1.FermentableInventoryType
 */
export declare class FermentableInventoryType extends Message<FermentableInventoryType> {
  /**
   * @generated from oneof beerproto.v1.FermentableInventoryType.amount
   */
  amount: {
    /**
     * @generated from field: beerproto.v1.MassType mass = 1;
     */
    value: MassType;
    case: "mass";
  } | {
    /**
     * @generated from field: beerproto.v1.VolumeType volume = 2;
     */
    value: VolumeType;
    case: "volume";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<FermentableInventoryType>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "beerproto.v1.FermentableInventoryType";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FermentableInventoryType;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FermentableInventoryType;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FermentableInventoryType;

  static equals(a: FermentableInventoryType | PlainMessage<FermentableInventoryType> | undefined, b: FermentableInventoryType | PlainMessage<FermentableInventoryType> | undefined): boolean;
}

