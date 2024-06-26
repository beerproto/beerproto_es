//*
// BeerProto
//
// Another beer format, written in protocol buffer.
//
// Copyright (c) 2020 Ross Merrigan

// @generated by protoc-gen-es v1.9.0
// @generated from file beerproto/v1/water.proto (package beerproto.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { ConcentrationType, VolumeType } from "./measureable_units_pb.js";

/**
 * WaterBase provides unique properties to identify individual records of  brewing water
 *
 * @generated from message beerproto.v1.WaterBase
 */
export const WaterBase = /*@__PURE__*/ proto3.makeMessageType(
  "beerproto.v1.WaterBase",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "calcium", kind: "message", T: ConcentrationType },
    { no: 3, name: "nitrite", kind: "message", T: ConcentrationType },
    { no: 4, name: "chloride", kind: "message", T: ConcentrationType },
    { no: 5, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "potassium", kind: "message", T: ConcentrationType },
    { no: 7, name: "carbonate", kind: "message", T: ConcentrationType },
    { no: 8, name: "iron", kind: "message", T: ConcentrationType },
    { no: 9, name: "flouride", kind: "message", T: ConcentrationType },
    { no: 10, name: "sulfate", kind: "message", T: ConcentrationType },
    { no: 11, name: "magnesium", kind: "message", T: ConcentrationType },
    { no: 12, name: "producer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "bicarbonate", kind: "message", T: ConcentrationType },
    { no: 14, name: "nitrate", kind: "message", T: ConcentrationType },
    { no: 15, name: "sodium", kind: "message", T: ConcentrationType },
  ],
);

/**
 * WaterAdditionType collects the attributes of each water addition for use in a recipe
 *
 * @generated from message beerproto.v1.WaterAdditionType
 */
export const WaterAdditionType = /*@__PURE__*/ proto3.makeMessageType(
  "beerproto.v1.WaterAdditionType",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "flouride", kind: "message", T: ConcentrationType },
    { no: 3, name: "sulfate", kind: "message", T: ConcentrationType },
    { no: 4, name: "producer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "nitrate", kind: "message", T: ConcentrationType },
    { no: 6, name: "nitrite", kind: "message", T: ConcentrationType },
    { no: 7, name: "chloride", kind: "message", T: ConcentrationType },
    { no: 8, name: "amount", kind: "message", T: VolumeType },
    { no: 89, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "potassium", kind: "message", T: ConcentrationType },
    { no: 11, name: "magnesium", kind: "message", T: ConcentrationType },
    { no: 12, name: "iron", kind: "message", T: ConcentrationType },
    { no: 13, name: "bicarbonate", kind: "message", T: ConcentrationType },
    { no: 14, name: "calcium", kind: "message", T: ConcentrationType },
    { no: 15, name: "carbonate", kind: "message", T: ConcentrationType },
    { no: 16, name: "sodium", kind: "message", T: ConcentrationType },
  ],
);

