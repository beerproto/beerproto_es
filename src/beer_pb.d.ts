//*
// BeerProto
//
// Another beer format, written in protocol buffer.
//
// Copyright (c) 2020 Ross Merrigan

// @generated by protoc-gen-es v1.9.0
// @generated from file beerproto/v1/beer.proto (package beerproto.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { MashProcedureType } from "./mash_pb.js";
import type { RecipeType } from "./recipe_pb.js";
import type { MiscellaneousType } from "./misc_pb.js";
import type { StyleType } from "./style_pb.js";
import type { FermentationProcedureType } from "./fermentation_pb.js";
import type { BoilProcedureType } from "./boil_pb.js";
import type { FermentableType } from "./fermentable_pb.js";
import type { CultureInformation } from "./culture_pb.js";
import type { EquipmentType } from "./equipment_pb.js";
import type { PackagingProcedureType } from "./packaging_pb.js";
import type { VarietyInformation } from "./hop_pb.js";
import type { WaterBase } from "./water_pb.js";

/**
 * @generated from message beerproto.v1.Recipe
 */
export declare class Recipe extends Message<Recipe> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * A collection of steps providing process information for common mashing procedures
   *
   * @generated from field: repeated beerproto.v1.MashProcedureType mashes = 2;
   */
  mashes: MashProcedureType[];

  /**
   * Records containing a minimal collection of the description of ingredients, procedures and other required parameters necessary to recreate a batch of beer
   *
   * @generated from field: repeated beerproto.v1.RecipeType recipes = 3;
   */
  recipes: RecipeType[];

  /**
   * Records for adjuncts which do not contribute to the gravity of the beer
   *
   * @generated from field: repeated beerproto.v1.MiscellaneousType miscellaneous_ingredients = 4;
   */
  miscellaneousIngredients: MiscellaneousType[];

  /**
   * Records detailing the characteristics of the beer styles for which judging guidelines have been established
   *
   * @generated from field: repeated beerproto.v1.StyleType styles = 5;
   */
  styles: StyleType[];

  /**
   * A collection of steps providing process information for common fermentation procedures
   *
   * @generated from field: repeated beerproto.v1.FermentationProcedureType fermentations = 6;
   */
  fermentations: FermentationProcedureType[];

  /**
   * A collection of steps providing process information for common boil procedures
   *
   * @generated from field: repeated beerproto.v1.BoilProcedureType boil = 7;
   */
  boil: BoilProcedureType[];

  /**
   * Explicitly encode version within list of records
   *
   * @generated from field: double version = 8;
   */
  version: number;

  /**
   * Records for any ingredient that contributes to the gravity of the beer
   *
   * @generated from field: repeated beerproto.v1.FermentableType fermentables = 9;
   */
  fermentables: FermentableType[];

  /**
   * Records detailing the wide array of unique cultures
   *
   * @generated from field: repeated beerproto.v1.CultureInformation cultures = 10;
   */
  cultures: CultureInformation[];

  /**
   * Provides necessary information for brewing equipment
   *
   * @generated from field: repeated beerproto.v1.EquipmentType equipments = 11;
   */
  equipments: EquipmentType[];

  /**
   * A collection of steps providing process information for common packaging procedures
   *
   * @generated from field: repeated beerproto.v1.PackagingProcedureType packaging = 12;
   */
  packaging: PackagingProcedureType[];

  /**
   * Records detailing the many properties of unique hop varieties
   *
   * @generated from field: repeated beerproto.v1.VarietyInformation hop_varieties = 13;
   */
  hopVarieties: VarietyInformation[];

  /**
   * Records for water profiles used in brewing
   *
   * @generated from field: repeated beerproto.v1.WaterBase profiles = 14;
   */
  profiles: WaterBase[];

  constructor(data?: PartialMessage<Recipe>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "beerproto.v1.Recipe";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Recipe;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Recipe;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Recipe;

  static equals(a: Recipe | PlainMessage<Recipe> | undefined, b: Recipe | PlainMessage<Recipe> | undefined): boolean;
}

