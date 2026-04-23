sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"com/employee/employeescrudui/test/integration/pages/EmployeesList",
	"com/employee/employeescrudui/test/integration/pages/EmployeesObjectPage"
], function (JourneyRunner, EmployeesList, EmployeesObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('com/employee/employeescrudui') + '/test/flp.html#app-preview',
        pages: {
			onTheEmployeesList: EmployeesList,
			onTheEmployeesObjectPage: EmployeesObjectPage
        },
        async: true
    });

    return runner;
});

