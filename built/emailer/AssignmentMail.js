"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util = require("util");
const FROM_NAME = "Secret Santa";
const FROM_EMAIL = "hohoho@wilczewski.org";
const SUBJECT = "Secret Santa Assignment - 3rd round";
class AssignmentMail {
    static fromAssignment(assignment) {
        const mail = new this();
        mail.setAssignment(assignment);
        mail.assignTo();
        mail.assignBody();
        return mail;
    }
    constructor() {
        this.from = this.getEmailAddressFromNameAndEmail(FROM_NAME, FROM_EMAIL);
        this.subject = SUBJECT;
    }
    setAssignment(assignment) {
        this.assignment = assignment;
    }
    assignTo() {
        const name = this.assignment.from.name;
        const email = this.assignment.from.email;
        this.to = this.getEmailAddressFromNameAndEmail(name, email);
    }
    assignBody() {
        // tslint:disable-next-line:max-line-length
        this.body = util.format("As a Secret Santa for the 2018 Christmas, you have been assigned to give a gift to %s.", this.assignment.to.name);
        if (this.assignment.to.name === "alex") {
            // tslint:disable-next-line:max-line-length
            this.body += "\n\nYou got me, and I wrote this app so I get to throw in an easter egg. Give me something good :D.";
        }
    }
    getEmailAddressFromNameAndEmail(name, email) {
        return util.format("%s <%s>", name, email);
    }
}
exports.default = AssignmentMail;
//# sourceMappingURL=AssignmentMail.js.map