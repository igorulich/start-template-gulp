"use strict";
import { config } from "../configModul ";/*підключення файла з конфігураціями*/
import del from "del";/*підключення del бібліотеки для видаленя проміжних файлів*/
export const clean = () => del([config.clean]);/*експортуемо tasks clean*/
