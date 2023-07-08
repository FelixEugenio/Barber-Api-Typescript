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
exports.CreateCollaboratorService = void 0;
const prisma_1 = __importDefault(require("../../../prisma"));
class CreateCollaboratorService {
    execute({ name, email, address, phone, banner }) {
        return __awaiter(this, void 0, void 0, function* () {
            // verificar se ele enviou um email
            if (!email) {
                throw new Error("Email incorrect");
            }
            //Verificar se esse email já está cadastrado na plataforma
            const CheckifCollaboratorAlreadyExists = yield prisma_1.default.collaborator.findFirst({
                where: {
                    email: email
                }
            });
            if (CheckifCollaboratorAlreadyExists) {
                throw new Error("User already exists");
            }
            const CreateCollaborator = yield prisma_1.default.collaborator.create({
                data: {
                    name: name,
                    email: email,
                    address: address,
                    phone: phone,
                    banner: banner
                },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    phone: true,
                    banner: true
                }
            });
            return CreateCollaborator;
        });
    }
}
exports.CreateCollaboratorService = CreateCollaboratorService;
