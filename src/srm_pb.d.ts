//*
// BeerProto
//
// Another beer format, written in protocol buffer.
//
// Copyright (c) 2020 Ross Merrigan

// @generated by protoc-gen-es v1.9.0
// @generated from file beerproto/v1/srm.proto (package beerproto.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, EnumValueOptions, Extension, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum beerproto.v1.SRM
 */
export declare enum SRM {
  /**
   * @generated from enum value: SRM_UNSPECIFIED = 0;
   */
  SRM_UNSPECIFIED = 0,

  /**
   * @generated from enum value: SRM_1 = 1;
   */
  SRM_1 = 1,

  /**
   * @generated from enum value: SRM_2 = 2;
   */
  SRM_2 = 2,

  /**
   * @generated from enum value: SRM_3 = 3;
   */
  SRM_3 = 3,

  /**
   * @generated from enum value: SRM_4 = 4;
   */
  SRM_4 = 4,

  /**
   * @generated from enum value: SRM_5 = 5;
   */
  SRM_5 = 5,

  /**
   * @generated from enum value: SRM_6 = 6;
   */
  SRM_6 = 6,

  /**
   * @generated from enum value: SRM_7 = 7;
   */
  SRM_7 = 7,

  /**
   * @generated from enum value: SRM_8 = 8;
   */
  SRM_8 = 8,

  /**
   * @generated from enum value: SRM_9 = 9;
   */
  SRM_9 = 9,

  /**
   * @generated from enum value: SRM_10 = 10;
   */
  SRM_10 = 10,

  /**
   * @generated from enum value: SRM_11 = 11;
   */
  SRM_11 = 11,

  /**
   * @generated from enum value: SRM_12 = 12;
   */
  SRM_12 = 12,

  /**
   * @generated from enum value: SRM_13 = 13;
   */
  SRM_13 = 13,

  /**
   * @generated from enum value: SRM_14 = 14;
   */
  SRM_14 = 14,

  /**
   * @generated from enum value: SRM_15 = 15;
   */
  SRM_15 = 15,

  /**
   * @generated from enum value: SRM_16 = 16;
   */
  SRM_16 = 16,

  /**
   * @generated from enum value: SRM_17 = 17;
   */
  SRM_17 = 17,

  /**
   * @generated from enum value: SRM_18 = 18;
   */
  SRM_18 = 18,

  /**
   * @generated from enum value: SRM_19 = 19;
   */
  SRM_19 = 19,

  /**
   * @generated from enum value: SRM_20 = 20;
   */
  SRM_20 = 20,

  /**
   * @generated from enum value: SRM_21 = 21;
   */
  SRM_21 = 21,

  /**
   * @generated from enum value: SRM_22 = 22;
   */
  SRM_22 = 22,

  /**
   * @generated from enum value: SRM_23 = 23;
   */
  SRM_23 = 23,

  /**
   * @generated from enum value: SRM_24 = 24;
   */
  SRM_24 = 24,

  /**
   * @generated from enum value: SRM_25 = 25;
   */
  SRM_25 = 25,

  /**
   * @generated from enum value: SRM_26 = 26;
   */
  SRM_26 = 26,

  /**
   * @generated from enum value: SRM_27 = 27;
   */
  SRM_27 = 27,

  /**
   * @generated from enum value: SRM_28 = 28;
   */
  SRM_28 = 28,

  /**
   * @generated from enum value: SRM_29 = 29;
   */
  SRM_29 = 29,

  /**
   * @generated from enum value: SRM_30 = 30;
   */
  SRM_30 = 30,
}

/**
 * @generated from message beerproto.v1.Color
 */
export declare class Color extends Message<Color> {
  /**
   * @generated from field: uint32 a = 1;
   */
  a: number;

  /**
   * @generated from field: uint32 r = 2;
   */
  r: number;

  /**
   * @generated from field: uint32 g = 3;
   */
  g: number;

  /**
   * @generated from field: uint32 b = 4;
   */
  b: number;

  constructor(data?: PartialMessage<Color>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "beerproto.v1.Color";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Color;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Color;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Color;

  static equals(a: Color | PlainMessage<Color> | undefined, b: Color | PlainMessage<Color> | undefined): boolean;
}

/**
 * @generated from extension: optional beerproto.v1.Color color = 123456783;
 */
export declare const color: Extension<EnumValueOptions, Color>;

