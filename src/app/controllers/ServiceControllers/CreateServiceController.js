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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateServiceController = void 0;
const CreateServiceServices_1 = require("../../services/ServiceServices/CreateServiceServices");
class CreateServiceController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { service, price, duration } = req.body;
            const createService = new CreateServiceServices_1.CreateServiceServices();
            const { originalname, filename: banner } = req.file;
            const user = yield createService.execute({
                service,
                price,
                duration,
                banner
            });
            return res.json(user);
        });
    }
}
exports.CreateServiceController = CreateServiceController;
