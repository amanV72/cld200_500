sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"com/customers/customerscrudui/test/integration/pages/CustomersList",
	"com/customers/customerscrudui/test/integration/pages/CustomersObjectPage"
], function (JourneyRunner, CustomersList, CustomersObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('com/customers/customerscrudui') + '/test/flp.html#app-preview',
        pages: {
			onTheCustomersList: CustomersList,
			onTheCustomersObjectPage: CustomersObjectPage
        },
        async: true
    });

    return runner;
});

