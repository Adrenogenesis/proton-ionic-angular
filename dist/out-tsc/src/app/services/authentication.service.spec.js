import { TestBed } from '@angular/core/testing';
import { AuthenticateService } from './authentication.service';
describe('AuthenticateService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(AuthenticateService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=authentication.service.spec.js.map