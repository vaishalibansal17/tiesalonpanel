import { BreadcrumbModule } from "./breadcrumb.module";

describe("PageHeaderModule", () => {
	let breadcrumbModule: BreadcrumbModule;

	beforeEach(() => {
		breadcrumbModule = new BreadcrumbModule();
	});

	it("should create an instance", () => {
		expect(breadcrumbModule).toBeTruthy();
	});
});