//*
// BeerProto
//
// Another beer format, written in protocol buffer.
//
// Copyright (c) 2020 Ross Merrigan

// @generated by protoc-gen-es v1.3.1
// @generated from file beerproto/v1/style.proto (package beerproto.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { BitternessRangeType, CarbonationRangeType, ColorRangeType, GravityRangeType, PercentRangeType } from "./measureable_units_pb.js";

/**
 * @generated from enum beerproto.v1.StyleCategories
 */
export const StyleCategories = proto3.makeEnum(
  "beerproto.v1.StyleCategories",
  [
    {no: 0, name: "STYLE_CATEGORIES_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "STYLE_CATEGORIES_BEER", localName: "BEER"},
    {no: 2, name: "STYLE_CATEGORIES_CIDER", localName: "CIDER"},
    {no: 3, name: "STYLE_CATEGORIES_KOMBUCHA", localName: "KOMBUCHA"},
    {no: 4, name: "STYLE_CATEGORIES_MEAD", localName: "MEAD"},
    {no: 5, name: "STYLE_CATEGORIES_SODA", localName: "SODA"},
    {no: 6, name: "STYLE_CATEGORIES_WINE", localName: "WINE"},
    {no: 7, name: "STYLE_CATEGORIES_OTHER", localName: "OTHER"},
  ],
);

/**
 * StyleType provide information for Style categorization
 *
 * @generated from message beerproto.v1.StyleType
 */
export const StyleType = proto3.makeMessageType(
  "beerproto.v1.StyleType",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "aroma", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "ingredients", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "category_number", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 5, name: "notes", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "flavor", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "mouthfeel", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "final_gravity", kind: "message", T: GravityRangeType },
    { no: 9, name: "style_guide", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "color", kind: "message", T: ColorRangeType },
    { no: 11, name: "original_gravity", kind: "message", T: GravityRangeType },
    { no: 12, name: "examples", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 14, name: "carbonation", kind: "message", T: CarbonationRangeType },
    { no: 15, name: "alcohol_by_volume", kind: "message", T: PercentRangeType },
    { no: 16, name: "international_bitterness_units", kind: "message", T: BitternessRangeType },
    { no: 17, name: "appearance", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 18, name: "category", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 19, name: "style_letter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 20, name: "type", kind: "enum", T: proto3.getEnumType(StyleCategories) },
    { no: 21, name: "overall_impression", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * RecipeStyleType defines style information stored in a recipe record
 *
 * @generated from message beerproto.v1.RecipeStyleType
 */
export const RecipeStyleType = proto3.makeMessageType(
  "beerproto.v1.RecipeStyleType",
  () => [
    { no: 1, name: "type", kind: "enum", T: proto3.getEnumType(StyleCategories) },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "category", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "category_number", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 5, name: "style_letter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "style_guide", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);
