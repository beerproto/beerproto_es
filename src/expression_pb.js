//*
// BeerProto
//
// Another beer format, written in protocol buffer.
//
// Copyright (c) 2020 Ross Merrigan

// @generated by protoc-gen-es v1.9.0
// @generated from file beerproto/v1/expression.proto (package beerproto.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum beerproto.v1.BinaryArithmetic
 */
export const BinaryArithmetic = /*@__PURE__*/ proto3.makeEnum(
  "beerproto.v1.BinaryArithmetic",
  [
    {no: 0, name: "BINARY_ARITHMETIC_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "BINARY_ARITHMETIC_ADDITION", localName: "ADDITION"},
    {no: 2, name: "BINARY_ARITHMETIC_SUBTRACTION", localName: "SUBTRACTION"},
    {no: 3, name: "BINARY_ARITHMETIC_MULTIPLICATION", localName: "MULTIPLICATION"},
    {no: 4, name: "BINARY_ARITHMETIC_DIVISION", localName: "DIVISION"},
    {no: 5, name: "BINARY_ARITHMETIC_POWER", localName: "POWER"},
  ],
);

/**
 * @generated from message beerproto.v1.ExpressionTree
 */
export const ExpressionTree = /*@__PURE__*/ proto3.makeMessageType(
  "beerproto.v1.ExpressionTree",
  () => [
    { no: 1, name: "expression", kind: "message", T: BinaryExpression },
  ],
);

/**
 * @generated from message beerproto.v1.UnaryExpression
 */
export const UnaryExpression = /*@__PURE__*/ proto3.makeMessageType(
  "beerproto.v1.UnaryExpression",
  () => [
    { no: 1, name: "double", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
  ],
);

/**
 * @generated from message beerproto.v1.BinaryExpression
 */
export const BinaryExpression = /*@__PURE__*/ proto3.makeMessageType(
  "beerproto.v1.BinaryExpression",
  () => [
    { no: 1, name: "operator", kind: "enum", T: proto3.getEnumType(BinaryArithmetic) },
    { no: 10, name: "binary_left", kind: "message", T: BinaryExpression, oneof: "left" },
    { no: 11, name: "unary_left", kind: "message", T: UnaryExpression, oneof: "left" },
    { no: 12, name: "parameter_left", kind: "message", T: ParameterExpression, oneof: "left" },
    { no: 20, name: "binary_right", kind: "message", T: BinaryExpression, oneof: "right" },
    { no: 21, name: "unary_right", kind: "message", T: UnaryExpression, oneof: "right" },
    { no: 22, name: "parameter_right", kind: "message", T: ParameterExpression, oneof: "right" },
  ],
);

/**
 * @generated from message beerproto.v1.ParameterExpression
 */
export const ParameterExpression = /*@__PURE__*/ proto3.makeMessageType(
  "beerproto.v1.ParameterExpression",
  () => [
    { no: 1, name: "parameter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

