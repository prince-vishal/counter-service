"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMetadata = void 0;
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
let UserMetadata = class UserMetadata {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true }),
    __metadata("design:type", Number)
], UserMetadata.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], UserMetadata.prototype, "user_id", void 0);
__decorate([
    typeorm_1.Column('varchar', { name: 'lastIpAddress', length: 255 }),
    class_validator_1.IsIP(),
    __metadata("design:type", String)
], UserMetadata.prototype, "lastIpAddress", void 0);
__decorate([
    typeorm_1.Column('json', { name: 'geoData' }),
    __metadata("design:type", Object)
], UserMetadata.prototype, "geoData", void 0);
__decorate([
    typeorm_1.Column('datetime', { name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], UserMetadata.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column('datetime', { name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], UserMetadata.prototype, "updatedAt", void 0);
UserMetadata = __decorate([
    typeorm_1.Entity('user_metadata')
], UserMetadata);
exports.UserMetadata = UserMetadata;
//# sourceMappingURL=userMetadata.entity.js.map