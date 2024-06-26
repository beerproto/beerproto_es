//*
// BeerProto
//
// Another beer format, written in protocol buffer.
//
// Copyright (c) 2020 Ross Merrigan

// @generated by protoc-gen-es v1.9.0
// @generated from file beerproto/v1/mash_step.proto (package beerproto.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { AcidityType, SpecificVolumeType, TemperatureType, TimeType, VolumeType } from "./measureable_units_pb.js";

/**
 * @generated from enum beerproto.v1.MashStepUnit
 */
export declare enum MashStepUnit {
  /**
   * @generated from enum value: MASH_STEP_UNIT_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: MASH_STEP_UNIT_INFUSION = 1;
   */
  INFUSION = 1,

  /**
   * @generated from enum value: MASH_STEP_UNIT_TEMPERATURE = 2;
   */
  TEMPERATURE = 2,

  /**
   * @generated from enum value: MASH_STEP_UNIT_DECOCTION = 3;
   */
  DECOCTION = 3,

  /**
   * @generated from enum value: MASH_STEP_UNIT_SOURING_MASH = 4;
   */
  SOURING_MASH = 4,

  /**
   * @generated from enum value: MASH_STEP_UNIT_SOURING_WORT = 5;
   */
  SOURING_WORT = 5,

  /**
   * @generated from enum value: MASH_STEP_UNIT_DRAIN_MASH_TUN = 6;
   */
  DRAIN_MASH_TUN = 6,

  /**
   * @generated from enum value: MASH_STEP_UNIT_SPARGE = 7;
   */
  SPARGE = 7,
}

/**
 * MashStepType - a per step representation occurring during the mash
 *
 * @generated from message beerproto.v1.MashStepType
 */
export declare class MashStepType extends Message<MashStepType> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: beerproto.v1.TimeType step_time = 2;
   */
  stepTime?: TimeType;

  /**
   * The amount of time  that passes before this step begins. eg moving from a mash step (step 1) of 148F, to a new temperature step of 156F (step 2) may take 8 minutes to heat the mash. Step 2 would have a ramp time of 8 minutes
   *
   * @generated from field: beerproto.v1.TimeType ramp_time = 3;
   */
  rampTime?: TimeType;

  /**
   * @generated from field: beerproto.v1.TemperatureType end_temperature = 4;
   */
  endTemperature?: TemperatureType;

  /**
   * @generated from field: string description = 5;
   */
  description: string;

  /**
   * Temperature of the water for an infusion step
   *
   * @generated from field: beerproto.v1.TemperatureType infuse_temperature = 6;
   */
  infuseTemperature?: TemperatureType;

  /**
   * @generated from field: beerproto.v1.AcidityType start_ph = 7;
   */
  startPh?: AcidityType;

  /**
   * @generated from field: beerproto.v1.AcidityType end_ph = 8;
   */
  endPh?: AcidityType;

  /**
   * @generated from field: string name = 9;
   */
  name: string;

  /**
   * @generated from field: beerproto.v1.MashStepUnit type = 10;
   */
  type: MashStepUnit;

  /**
   * @generated from field: beerproto.v1.VolumeType amount = 11;
   */
  amount?: VolumeType;

  /**
   * @generated from field: beerproto.v1.TemperatureType step_temperature = 12;
   */
  stepTemperature?: TemperatureType;

  /**
   * Also known as the mash thickness. eg 1.75 qt/lb or 3.65 L/kg
   *
   * @generated from field: beerproto.v1.SpecificVolumeType water_grain_ratio = 13;
   */
  waterGrainRatio?: SpecificVolumeType;

  constructor(data?: PartialMessage<MashStepType>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "beerproto.v1.MashStepType";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MashStepType;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MashStepType;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MashStepType;

  static equals(a: MashStepType | PlainMessage<MashStepType> | undefined, b: MashStepType | PlainMessage<MashStepType> | undefined): boolean;
}

