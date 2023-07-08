"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateHourService = void 0;
const prisma_1 = __importDefault(require("../../../prisma"));
class CreateHourService {
    execute({ hour }) {
        return __awaiter(this, void 0, void 0, function* () {
            //Verificar se esse email já está cadastrado na plataforma
            const HourAlreadyExists = yield prisma_1.default.hour.findFirst({
                where: {
                    hour: hour
                }
            });
            if (HourAlreadyExists) {
                throw new Error("Hour already exists");
            }
            const CreateHour = yield prisma_1.default.hour.create({
                data: {
                    hour: hour
                },
                select: {
                    id: true,
                    hour: true
                }
            });
            return CreateHour;
        });
    }
}
exports.CreateHourService = CreateHourService;
