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
exports.UpdateCollaboratorService = void 0;
const prisma_1 = __importDefault(require("../../../prisma"));
class UpdateCollaboratorService {
    execute({ name, email, address, phone, id, banner }) {
        return __awaiter(this, void 0, void 0, function* () {
            const UpdateCollaborator = yield prisma_1.default.collaborator.update({
                where: {
                    id: id
                },
                data: {
                    name: name,
                    email: email,
                    phone: phone,
                    address: address,
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
            return UpdateCollaborator;
        });
    }
}
exports.UpdateCollaboratorService = UpdateCollaboratorService;
