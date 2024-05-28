//*
// BeerProto
//
// Another beer format, written in protocol buffer.
//
// Copyright (c) 2020 Ross Merrigan

// @generated by protoc-gen-es v1.9.0
// @generated from file beerproto/v1/boil.proto (package beerproto.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { TimeType, VolumeType } from "./measureable_units_pb.js";
import type { BoilStepType } from "./boil_step_pb.js";

/**
 * BoilProcedureType defines the procedure for performing a boil. A boil procedure with no steps is the same as a standard single step boil
 *
 * @generated from message beerproto.v1.BoilProcedureType
 */
export declare class BoilProcedureType extends Message<BoilProcedureType> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: beerproto.v1.VolumeType pre_boil_size = 2;
   */
  preBoilSize?: VolumeType;

  /**
   * @generated from field: beerproto.v1.TimeType boil_time = 3;
   */
  boilTime?: TimeType;

  /**
   * @generated from field: repeated beerproto.v1.BoilStepType boil_steps = 4;
   */
  boilSteps: BoilStepType[];

  /**
   * @generated from field: string name = 5;
   */
  name: string;

  /**
   * @generated from field: string description = 6;
   */
  description: string;

  /**
   * @generated from field: string notes = 7;
   */
  notes: string;

  constructor(data?: PartialMessage<BoilProcedureType>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "beerproto.v1.BoilProcedureType";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BoilProcedureType;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BoilProcedureType;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BoilProcedureType;

  static equals(a: BoilProcedureType | PlainMessage<BoilProcedureType> | undefined, b: BoilProcedureType | PlainMessage<BoilProcedureType> | undefined): boolean;
}

