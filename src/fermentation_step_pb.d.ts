//*
// BeerProto
//
// Another beer format, written in protocol buffer.
//
// Copyright (c) 2020 Ross Merrigan

// @generated by protoc-gen-es v1.9.0
// @generated from file beerproto/v1/fermentation_step.proto (package beerproto.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { AcidityType, GravityType, PercentType, TemperatureType, TimeType } from "./measureable_units_pb.js";

/**
 * FermentationStepType - a per step representation of a fermentation action
 *
 * @generated from message beerproto.v1.FermentationStepType
 */
export declare class FermentationStepType extends Message<FermentationStepType> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * @generated from field: beerproto.v1.TemperatureType end_temperature = 3;
   */
  endTemperature?: TemperatureType;

  /**
   * @generated from field: beerproto.v1.TimeType step_time = 4;
   */
  stepTime?: TimeType;

  /**
   * Free rise is used to indicate a fermentation step where the exothermic fermentation is allowed to raise the temperature without restriction This is either True or false.
   *
   * @generated from field: bool free_rise = 5;
   */
  freeRise: boolean;

  /**
   * @generated from field: beerproto.v1.GravityType start_gravity = 6;
   */
  startGravity?: GravityType;

  /**
   * @generated from field: beerproto.v1.GravityType end_gravity = 7;
   */
  endGravity?: GravityType;

  /**
   * @generated from field: beerproto.v1.AcidityType start_ph = 8;
   */
  startPh?: AcidityType;

  /**
   * @generated from field: string description = 9;
   */
  description: string;

  /**
   * @generated from field: beerproto.v1.TemperatureType start_temperature = 10;
   */
  startTemperature?: TemperatureType;

  /**
   * @generated from field: beerproto.v1.AcidityType end_ph = 11;
   */
  endPh?: AcidityType;

  /**
   * @generated from field: string vessel = 12;
   */
  vessel: string;

  /**
   * Vessel pressure indicates the pressure applied within the fermentation vessel.
   *
   * @generated from field: beerproto.v1.PercentType vessel_pressure = 13;
   */
  vesselPressure?: PercentType;

  constructor(data?: PartialMessage<FermentationStepType>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "beerproto.v1.FermentationStepType";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FermentationStepType;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FermentationStepType;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FermentationStepType;

  static equals(a: FermentationStepType | PlainMessage<FermentationStepType> | undefined, b: FermentationStepType | PlainMessage<FermentationStepType> | undefined): boolean;
}

