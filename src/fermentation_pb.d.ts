//*
// BeerProto
//
// Another beer format, written in protocol buffer.
//
// Copyright (c) 2020 Ross Merrigan

// @generated by protoc-gen-es v1.9.0
// @generated from file beerproto/v1/fermentation.proto (package beerproto.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { FermentationStepType } from "./fermentation_step_pb.js";

/**
 * FermentationProcedureType defines the procedure for performing fermentation
 *
 * @generated from message beerproto.v1.FermentationProcedureType
 */
export declare class FermentationProcedureType extends Message<FermentationProcedureType> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string description = 2;
   */
  description: string;

  /**
   * @generated from field: string notes = 3;
   */
  notes: string;

  /**
   * @generated from field: repeated beerproto.v1.FermentationStepType fermentation_steps = 4;
   */
  fermentationSteps: FermentationStepType[];

  /**
   * @generated from field: string name = 5;
   */
  name: string;

  constructor(data?: PartialMessage<FermentationProcedureType>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "beerproto.v1.FermentationProcedureType";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FermentationProcedureType;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FermentationProcedureType;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FermentationProcedureType;

  static equals(a: FermentationProcedureType | PlainMessage<FermentationProcedureType> | undefined, b: FermentationProcedureType | PlainMessage<FermentationProcedureType> | undefined): boolean;
}

