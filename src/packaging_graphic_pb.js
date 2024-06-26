//*
// BeerProto
//
// Another beer format, written in protocol buffer.
//
// Copyright (c) 2020 Ross Merrigan

// @generated by protoc-gen-es v1.9.0
// @generated from file beerproto/v1/packaging_graphic.proto (package beerproto.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * Representation of a graphic to be placed on a vessel.
 *
 * @generated from message beerproto.v1.PackagingGraphicType
 */
export const PackagingGraphicType = /*@__PURE__*/ proto3.makeMessageType(
  "beerproto.v1.PackagingGraphicType",
  () => [
    { no: 1, name: "position", kind: "enum", T: proto3.getEnumType(PackagingGraphicType_PositionUnit) },
    { no: 2, name: "type", kind: "enum", T: proto3.getEnumType(PackagingGraphicType_GraphicType) },
    { no: 3, name: "base64_data", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "urls", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 5, name: "dpi", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 6, name: "width", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 7, name: "height", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 8, name: "units", kind: "enum", T: proto3.getEnumType(PackagingGraphicType_UnitsType) },
  ],
);

/**
 * @generated from enum beerproto.v1.PackagingGraphicType.PositionUnit
 */
export const PackagingGraphicType_PositionUnit = /*@__PURE__*/ proto3.makeEnum(
  "beerproto.v1.PackagingGraphicType.PositionUnit",
  [
    {no: 0, name: "POSITION_UNIT_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "POSITION_UNIT_BODY_FRONT", localName: "BODY_FRONT"},
    {no: 2, name: "POSITION_UNIT_BODY_BACK", localName: "BODY_BACK"},
    {no: 3, name: "POSITION_UNIT_BODY_WRAP_AROUND", localName: "BODY_WRAP_AROUND"},
    {no: 4, name: "POSITION_UNIT_NECK_FRONT", localName: "NECK_FRONT"},
    {no: 5, name: "POSITION_UNIT_NECK_BACK", localName: "NECK_BACK"},
    {no: 6, name: "POSITION_UNIT_NECK_WRAP_AROUND", localName: "NECK_WRAP_AROUND"},
    {no: 7, name: "POSITION_UNIT_CAP", localName: "CAP"},
    {no: 8, name: "POSITION_UNIT_CARRIER", localName: "CARRIER"},
  ],
);

/**
 * @generated from enum beerproto.v1.PackagingGraphicType.GraphicType
 */
export const PackagingGraphicType_GraphicType = /*@__PURE__*/ proto3.makeEnum(
  "beerproto.v1.PackagingGraphicType.GraphicType",
  [
    {no: 0, name: "GRAPHIC_TYPE_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "GRAPHIC_TYPE_SVG", localName: "SVG"},
    {no: 2, name: "GRAPHIC_TYPE_SVGZ", localName: "SVGZ"},
    {no: 3, name: "GRAPHIC_TYPE_AI", localName: "AI"},
    {no: 4, name: "GRAPHIC_TYPE_CDR", localName: "CDR"},
    {no: 5, name: "GRAPHIC_TYPE_CDX", localName: "CDX"},
    {no: 6, name: "GRAPHIC_TYPE_ODG", localName: "ODG"},
    {no: 7, name: "GRAPHIC_TYPE_EPS", localName: "EPS"},
    {no: 8, name: "GRAPHIC_TYPE_PDF", localName: "PDF"},
    {no: 9, name: "GRAPHIC_TYPE_PNG", localName: "PNG"},
    {no: 10, name: "GRAPHIC_TYPE_JPG", localName: "JPG"},
    {no: 11, name: "GRAPHIC_TYPE_GIF", localName: "GIF"},
  ],
);

/**
 * @generated from enum beerproto.v1.PackagingGraphicType.UnitsType
 */
export const PackagingGraphicType_UnitsType = /*@__PURE__*/ proto3.makeEnum(
  "beerproto.v1.PackagingGraphicType.UnitsType",
  [
    {no: 0, name: "UNITS_TYPE_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "UNITS_TYPE_MM", localName: "MM"},
    {no: 2, name: "UNITS_TYPE_IN", localName: "IN"},
  ],
);

