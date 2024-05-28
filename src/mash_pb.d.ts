//*
// BeerProto
//
// Another beer format, written in protocol buffer.
//
// Copyright (c) 2020 Ross Merrigan

// @generated by protoc-gen-es v1.9.0
// @generated from file beerproto/v1/mash.proto (package beerproto.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { TemperatureType } from "./measureable_units_pb.js";
import type { MashStepType } from "./mash_step_pb.js";

/**
 * This defines the procedure for performing unique mashing processes
 *
 * @generated from message beerproto.v1.MashProcedureType
 */
export declare class MashProcedureType extends Message<MashProcedureType> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * Initial grain temperature prior to the start of the mash
   *
   * @generated from field: beerproto.v1.TemperatureType grain_temperature = 2;
   */
  grainTemperature?: TemperatureType;

  /**
   * @generated from field: string notes = 3;
   */
  notes: string;

  /**
   * @generated from field: repeated beerproto.v1.MashStepType mash_steps = 4;
   */
  mashSteps: MashStepType[];

  /**
   * @generated from field: string name = 5;
   */
  name: string;

  constructor(data?: PartialMessage<MashProcedureType>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "beerproto.v1.MashProcedureType";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MashProcedureType;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MashProcedureType;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MashProcedureType;

  static equals(a: MashProcedureType | PlainMessage<MashProcedureType> | undefined, b: MashProcedureType | PlainMessage<MashProcedureType> | undefined): boolean;
}

