"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Meditation_duration, _Meditation_intervalId;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Meditation = void 0;
class Meditation {
    constructor(duration) {
        _Meditation_duration.set(this, 0);
        _Meditation_intervalId.set(this, undefined);
        __classPrivateFieldSet(this, _Meditation_duration, duration, "f");
    }
    start() {
        console.log("Start Meditation");
        __classPrivateFieldSet(this, _Meditation_intervalId, setInterval(() => {
            var _a;
            console.log(__classPrivateFieldGet(this, _Meditation_duration, "f"));
            __classPrivateFieldSet(this, _Meditation_duration, (_a = __classPrivateFieldGet(this, _Meditation_duration, "f"), _a--, _a), "f");
            if (__classPrivateFieldGet(this, _Meditation_duration, "f") === 0) {
                clearInterval(__classPrivateFieldGet(this, _Meditation_intervalId, "f"));
                console.log("Jay Guru Dev");
            }
        }, 1000), "f");
    }
}
exports.Meditation = Meditation;
_Meditation_duration = new WeakMap(), _Meditation_intervalId = new WeakMap();
//# sourceMappingURL=meditation.js.map