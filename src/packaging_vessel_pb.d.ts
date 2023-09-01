//*
// BeerProto
//
// Another beer format, written in protocol buffer.
//
// Copyright (c) 2020 Ross Merrigan

// @generated by protoc-gen-es v1.3.1
// @generated from file beerproto/v1/packaging_vessel.proto (package beerproto.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { AcidityType, GravityType, TemperatureType, TimeType, VolumeType } from "./measureable_units_pb.js";
import type { PackagingGraphicType } from "./packaging_graphic_pb.js";

/**
 * @generated from enum beerproto.v1.PackagingVesselUnit
 */
export declare enum PackagingVesselUnit {
  /**
   * @generated from enum value: PACKAGING_VESSEL_UNIT_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * keg
   *
   * @generated from enum value: PACKAGING_VESSEL_UNIT_KEG = 1;
   */
  KEG = 1,

  /**
   * bottle
   *
   * @generated from enum value: PACKAGING_VESSEL_UNIT_BOTTLE = 2;
   */
  BOTTLE = 2,

  /**
   * cask
   *
   * @generated from enum value: PACKAGING_VESSEL_UNIT_CASK = 3;
   */
  CASK = 3,

  /**
   * tank
   *
   * @generated from enum value: PACKAGING_VESSEL_UNIT_TANK = 4;
   */
  TANK = 4,

  /**
   * firkin
   *
   * @generated from enum value: PACKAGING_VESSEL_UNIT_FIRKIN = 5;
   */
  FIRKIN = 5,

  /**
   * other
   *
   * @generated from enum value: PACKAGING_VESSEL_UNIT_OTHER = 6;
   */
  OTHER = 6,

  /**
   * can
   *
   * @generated from enum value: PACKAGING_VESSEL_UNIT_CAN = 7;
   */
  CAN = 7,
}

/**
 * PackagingVesselType - a per vessel representation of a packaging process
 *
 * @generated from message beerproto.v1.PackagingVesselType
 */
export declare class PackagingVesselType extends Message<PackagingVesselType> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: beerproto.v1.PackagingVesselUnit type = 2;
   */
  type: PackagingVesselUnit;

  /**
   * @generated from field: beerproto.v1.GravityType start_gravity = 3;
   */
  startGravity?: GravityType;

  /**
   * @generated from field: string name = 4;
   */
  name: string;

  /**
   * @generated from field: string package_date = 5;
   */
  packageDate: string;

  /**
   * @generated from field: beerproto.v1.TimeType step_time = 6;
   */
  stepTime?: TimeType;

  /**
   * @generated from field: beerproto.v1.GravityType end_gravity = 7;
   */
  endGravity?: GravityType;

  /**
   * @generated from field: beerproto.v1.VolumeType vessel_volume = 8;
   */
  vesselVolume?: VolumeType;

  /**
   * @generated from field: double vessel_quantity = 9;
   */
  vesselQuantity: number;

  /**
   * @generated from field: string description = 10;
   */
  description: string;

  /**
   * @generated from field: beerproto.v1.AcidityType start_ph = 11;
   */
  startPh?: AcidityType;

  /**
   * @generated from field: double carbonation = 12;
   */
  carbonation: number;

  /**
   * @generated from field: beerproto.v1.TemperatureType start_temperature = 13;
   */
  startTemperature?: TemperatureType;

  /**
   * @generated from field: beerproto.v1.AcidityType end_ph = 14;
   */
  endPh?: AcidityType;

  /**
   * @generated from field: beerproto.v1.TemperatureType end_temperature = 15;
   */
  endTemperature?: TemperatureType;

  /**
   * @generated from field: repeated beerproto.v1.PackagingGraphicType graphics = 16;
   */
  graphics: PackagingGraphicType[];

  constructor(data?: PartialMessage<PackagingVesselType>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "beerproto.v1.PackagingVesselType";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PackagingVesselType;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PackagingVesselType;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PackagingVesselType;

  static equals(a: PackagingVesselType | PlainMessage<PackagingVesselType> | undefined, b: PackagingVesselType | PlainMessage<PackagingVesselType> | undefined): boolean;
}

