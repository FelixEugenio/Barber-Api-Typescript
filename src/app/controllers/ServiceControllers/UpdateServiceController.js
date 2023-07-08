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
exports.UpdateServiceController = void 0;
const UpdateServiceServices_1 = require("../../services/ServiceServices/UpdateServiceServices");
class UpdateServiceController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const { service, duration, price } = req.body;
            const updateServiceServices = new UpdateServiceServices_1.UpdateServiceServices();
            const { originalname, filename: banner } = req.file;
            const UpdateService = yield updateServiceServices.execute({
                service,
                banner,
                duration,
                price,
                id
            });
            return res.json(UpdateService);
        });
    }
}
exports.UpdateServiceController = UpdateServiceController;
