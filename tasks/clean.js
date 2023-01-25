"use strict";
import { config } from "../configModul ";
import del from "del";
export const clean = () => del([config.clean]);
