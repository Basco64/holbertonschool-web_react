var Subjects;
(function (Subjects) {
    var Subject = /** @class */ (function () {
        function Subject() {
        }
        Object.defineProperty(Subject.prototype, "teacher", {
            get: function () {
                return this._teacher;
            },
            enumerable: false,
            configurable: true
        });
        Subject.prototype.setTeacher = function (teacher) {
            this._teacher = teacher;
        };
        return Subject;
    }());
    Subjects.Subject = Subject;
})(Subjects || (Subjects = {}));
//# sourceMappingURL=Subject.js.map