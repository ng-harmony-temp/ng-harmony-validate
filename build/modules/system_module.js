import { validate } from "ng-harmony-decorator";
import "ng-harmony-log";

export let Email = class Email {
    _email(email) {
        let regex = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;

        if (regex.test(email)) return true;else throw new InMemoryValidationError();
    }
};

//# sourceMappingURL=system_module.js.map