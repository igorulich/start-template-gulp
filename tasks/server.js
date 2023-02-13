"use strict";
import { config } from "../configModul ";/*підключення файла з конфігураціями*/
import browserSync from "browser-sync";;/*Налаштуйте набір налаштувань синхронізації з інтерфейсу користувача або командного рядка, 
щоб створити персоналізоване тестове середовище*/
export function server(cb) {/*експортуемо tasks server*/
	browserSync.init(config.serverConfig), cb();/*запускаум локальний сервкр зналаштуванями які прописані у файлі конфігурації*/
};
