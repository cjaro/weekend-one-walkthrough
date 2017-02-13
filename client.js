$(document).ready(function(){ //waits for DOM  (HTML & CSS) to completely load
  $('#submitNewEmployee').on('click', function(){   // event listener on submitNewEmployee button
    // declaring variables and retrieving values from input boxes
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var idNumber = $('#idNumber').val();
    var jobTitle = $('#jobTitle').val();
    var annualSalary = $('#annualSalary').val();

    // adds new employee row to DOM
    $('#employeeTableBody').append(
      '<tr>' +
        '<td>' + firstName + '</td>' +
        '<td>' + lastName + '</td>' +
        '<td>' + idNumber + '</td>' +
        '<td>' + jobTitle + '</td>' +
        '<td>' + annualSalary + '</td>' +
      '</tr>'
    );

    //add monthly salary expenses to DOM
    var newEmployeeMonthlyExpenses = annualSalary / 12;
    var previousSalaryTotal = $('#monthlyExpenses').text();
    var totalMonthlyExpenses = parseFloat(previousSalaryTotal) + newEmployeeMonthlyExpenses;
    $('#monthlyExpenses').text(totalMonthlyExpenses);


  });
});
