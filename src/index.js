/**
 * dat-gui JavaScript Controller Library
 * http://code.google.com/p/dat-gui
 *
 * Copyright 2011 Data Arts Team, Google Creative Lab
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */

import Color from './dat/color/Color';
import math from './dat/color/math';
import interpret from './dat/color/interpret';

import Controller from './dat/controllers/Controller';
import BooleanController from './dat/controllers/BooleanController';
import OptionController from './dat/controllers/OptionController';
import StringController from './dat/controllers/StringController';
import NumberController from './dat/controllers/NumberController';
import NumberControllerBox from './dat/controllers/NumberControllerBox';
import NumberControllerSlider from './dat/controllers/NumberControllerSlider';
import FunctionController from './dat/controllers/FunctionController';
import ColorController from './dat/controllers/ColorController';
import GUIVR from './datguivr/index';

import domImport from './dat/dom/dom';
import GUIImport from './dat/gui/GUI';

export const color = {
  Color: Color,
  math: math,
  interpret: interpret
};

export const controllers = {
  Controller: Controller,
  BooleanController: BooleanController,
  OptionController: OptionController,
  StringController: StringController,
  NumberController: NumberController,
  NumberControllerBox: NumberControllerBox,
  NumberControllerSlider: NumberControllerSlider,
  FunctionController: FunctionController,
  ColorController: ColorController
};

export const dom = { dom: domImport };

export const gui = { GUI: GUIImport };

export const GUI = GUIImport;

export default {
  color,
  controllers,
  dom,
  gui,
  GUI,
  GUIVR
};
