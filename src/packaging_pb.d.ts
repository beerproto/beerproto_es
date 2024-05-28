//*
// BeerProto
//
// Another beer format, written in protocol buffer.
//
// Copyright (c) 2020 Ross Merrigan

// @generated by protoc-gen-es v1.9.0
// @generated from file beerproto/v1/packaging.proto (package beerproto.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { VolumeType } from "./measureable_units_pb.js";
import type { PackagingVesselType } from "./packaging_vessel_pb.js";

/**
 * Describes the procedure for packaging your beverage
 *
 * @generated from message beerproto.v1.PackagingProcedureType
 */
export declare class PackagingProcedureType extends Message<PackagingProcedureType> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * @generated from field: beerproto.v1.VolumeType packaged_volume = 3;
   */
  packagedVolume?: VolumeType;

  /**
   * @generated from field: string description = 4;
   */
  description: string;

  /**
   * @generated from field: string notes = 5;
   */
  notes: string;

  /**
   * @generated from field: repeated beerproto.v1.PackagingVesselType packaging_vessels = 6;
   */
  packagingVessels: PackagingVesselType[];

  constructor(data?: PartialMessage<PackagingProcedureType>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "beerproto.v1.PackagingProcedureType";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PackagingProcedureType;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PackagingProcedureType;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PackagingProcedureType;

  static equals(a: PackagingProcedureType | PlainMessage<PackagingProcedureType> | undefined, b: PackagingProcedureType | PlainMessage<PackagingProcedureType> | undefined): boolean;
}

